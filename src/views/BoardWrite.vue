<template>
  <div>
    <b-card>
      <div class="board-detail">
        <div class="board-contents">
          <input type="text" v-model="originItems.title" class="w3-input w3-border" placeholder="제목을 입력해주세요.">
          <input type="text" v-model="originItems.author" class="w3-input w3-border" placeholder="작성자를 입력해주세요." v-if="idx === undefined">
        </div>
        <div class="board-contents">
          <textarea id="" cols="30" rows="10" v-model="originItems.contents" class="w3-input w3-border" style="resize: none;">
          </textarea>
        </div>
        <div class="common-buttons">
          <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="goSave">저장</button>&nbsp;
          <button type="button" class="w3-button w3-round w3-gray" v-on:click="goList">목록</button>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import { onBeforeMount } from '@vue/runtime-core';
import axios from 'axios';

export default {
    name : 'BoardWrite',
    components : {
    },
    setup() {
        const state = reactive({       
          originItems : [
            {
              idx : '',
              title : '',
              author : '',
              created_at : '',
              contents : ''
            }    
          ]           
        });

        const getData = async () => {
            try {
                const { data } = await axios.get(process.env.VUE_APP_API_URI + '/board/'+state.originItems.idx, {}); // back : @PathVariable : URL 경로의 일부를 파라미터로 사용할 때 이용. URL에서 값을 가져온다.
                state.originItems = data;
            } catch(err) {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
                }
            }
        }

        const goSave = () => {

        }

        const goList = () => {
          router.push('/board/write');
        }

        onBeforeMount(() => {
            getData();
        })

        return {
            ...toRefs(state),
            goSave,
            goList,
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