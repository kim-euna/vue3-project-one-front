<template>
  <div>
    <b-card>
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left">
          <div class="content-detail-content-info-left-number">
            {{ originItems.idx }}
          </div>
          <div class="content-detail-content-info-left-subject">
            {{ originItems.title }}
          </div>
        </div>
        <div class="content-detail-content-info-right">
          <div class="content-detail-content-info-right-user">
            글쓴이: {{ originItems.author }}
          </div>
          <div class="content-detail-content-info-right-created">
            등록일: {{ originItems.created_at }}
          </div>
        </div>
      </div>
      <div class="content-detail-content">
        {{ originItems.contents }}
      </div>
      <div class="content-detail-button">
        <b-button variant="primary" @click="goUpdate">수정</b-button>
        <b-button variant="success" @click="goDelete">삭제</b-button>
      </div>
      <div class="content-detail-comment">
        덧글
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
    name : 'BoardDetail',
    components : {
    },
    setup() {
        const router = useRouter()      
        const route = useRoute()      
        const state = reactive({            
            originItems : [
              {
                idx : '',
                title : '',
                author : '',
                created_at : '',
                contents : ''
              }
            ],
        });

        const getData = async () => {
            try {
                const { data } = await axios.get(process.env.VUE_APP_API_URI + '/board/1', {}); // back : @PathVariable : URL 경로의 일부를 파라미터로 사용할 때 이용. URL에서 값을 가져온다.
                state.originItems = data;
            } catch(err) {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
                }
            }
        }

        const goUpdate = () => {
            router.push('/board/write');
        }

        const goDelete = () => {

        }

        onBeforeMount(() => {
            getData();
            console.log("idx : " + route.params.idx);
        })

        return {
            ...toRefs(state),
            goUpdate,
            goDelete,
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