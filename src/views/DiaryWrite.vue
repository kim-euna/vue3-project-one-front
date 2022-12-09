<template>
  <div>
    <b-card>
      <div class="row">
        <div class="col-md-2" />
        <div class="col-md-8">
          <b-form @submit="onSubmit">
            <!-- @reset="onReset -->
            <b-form-group id="input-group-1" label="제목" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="item.title"
                type="text"
                placeholder="Enter title"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="작성자" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="item.author"
                placeholder="Enter author"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="작성일" label-for="input-3">
              <b-form-input
                id="input-3"
                v-model="item.created_at"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="내용" label-for="input-3">
              <b-form-textarea
                id="textarea"
                v-model="item.contents"
                placeholder="Enter something"
                rows="8"
              ></b-form-textarea>
            </b-form-group>

            <b-button @click="goSave()">저장</b-button>
            <b-button @click="goDiaryList()">목록으로</b-button>
          </b-form>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

export default {
  name: "DiaryDetail",
  components: {},
  setup() {
    const router = useRouter();
    const route = useRoute();
    const state = reactive({
      item: [
        {
          title: "테스트",
          author: "테스트",
          created_at: "2022-12-09T07:51:01",
          content: "테스트",
          delete_yn: "N",
        },
      ],
    });

    const goDiaryList = () => {
      router.push({
        name: "DiaryMain",
      });
    };

    const goSave = async () => {
      try {
        //validation추가
        await axios
          .post(
            process.env.VUE_APP_API_URI + "/api/diary/insertOne",
            {
              title: "테스트",
              author: "테스트",
              created_at: "2022-12-09T07:51:01",
              content: "테스트",
              delete_yn: "N",
            },
            { headers: { "Content-Type": "application/json" } }
          )
          .then((res) => {
            if (res.data.success) {
              alert("등록되었습니다.");
            } else {
              alert("다시 시도해주세요.");
            }
          });
        goDiaryList();
      } catch (err) {
        if (err.message.indexOf("Network Error") > -1) {
          alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.");
        }
      }
    };

    onBeforeMount(() => {});

    return {
      ...toRefs(state),
      goDiaryList,
      goSave,
    };
  },
  data() {
    return {};
  },
};
</script>

<style></style>
