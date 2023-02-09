<template>INFO 2</template>

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
