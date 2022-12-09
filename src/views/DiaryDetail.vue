<template>
  <div>
    <b-card>
      <div class="row">
      <div class="col-md-2"/>
      <div class="col-md-8">
      <b-form @submit="onSubmit"> <!-- @reset="onReset -->
        <b-form-group id="input-group-1" label="제목" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="originItems.title"
            type="text"
            placeholder="Enter title"
            required
            disabled
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="작성자" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="originItems.author"
            placeholder="Enter author"
            required
            disabled
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="작성일" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="originItems.created_at"
            required
            disabled
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="내용" label-for="input-3">
          <b-form-textarea
            id="textarea"
            v-model="originItems.contents"
            placeholder="Enter something"
            rows="8"
            disabled
          ></b-form-textarea>
        </b-form-group>

        <b-button @click="goDiaryList">목록으로</b-button>
      </b-form>
      </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import { onBeforeMount } from '@vue/runtime-core';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'

export default {
    name : 'DiaryDetail',
    components : {
    },
    setup() {
        const router = useRouter()
        const route = useRoute()
        const state = reactive({
          originItems : [
            {
              id : '',
              title : '',
              author : '',
              created_at : '',
              contents : ''
            }
          ],
          contentsLen : '',
        });

        const getData = async () => {
            try {
                console.log('state.originItems.id', state.originItems.id);
                //http://localhost:8081/api/diary/selectOne/2
                const { data } = await axios.get(process.env.VUE_APP_API_URI + '/api/diary/selectOne/' + state.originItems.id, {}); // back : @PathVariable : URL 경로의 일부를 파라미터로 사용할 때 이용. URL에서 값을 가져온다.
                state.originItems = data;
                state.contentsLen = Object.keys(state.originItems.contents).length;
            } catch(err) {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
                }
            }
        }

        const goDiaryList = () => {
            router.push({
                name : "DiaryMain"
            });
        }

        onBeforeMount(() => {
            console.log('route.params.id', route.params.idx);
          state.originItems.id = route.params.idx;
          getData();
        })

        return {
            ...toRefs(state),
            goDiaryList,
        }
    },
    data() {
        return {
        }
    },
}
</script>

<style>
</style>