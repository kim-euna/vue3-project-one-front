<template>
  <b-container>
  <div>
    <!-- b-table에서 제공하는 row-clicked param으로 3개 보내줌 -->
    <b-table
      id="itemList"
      :items="pagingItems"
      :per-page="perPage"
      :current-page="currentPage"
      :bordered="true"
      :hover="true"
      @head-clicked="head"
    >
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="itemList"
      align="center"
      @page-click="pageClick"
    ></b-pagination>
    <p class="mt-3">현재 페이지 : {{ currentPage }}</p>
    <b-button>글쓰기</b-button>
  </div>
    </b-container>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import { onBeforeMount } from '@vue/runtime-core';
import { getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
    name : 'BoardList',
    components : {
    },
    setup() {
        const router = useRouter()

        const app = getCurrentInstance();     
        const $axios = app.appContext.config.globalProperties.$axios;   
        //const $serverUrl = app.appContext.config.globalProperties.$serverUrl;   
        const state = reactive({
            perPage : 5,
            currentPage : 1,
            pagingItems : [],
            originItems : [],
            index : '',      
        });

        const onRowSelected = (item, index, event) => {
            alert(item);
            alert(index);
            alert(event);
            router.push({
                name : "BoardDetail",
                params : { idx: item.index } //Params 프로그래밍 방식
            });
            //router.push({ name: "BoardDetail"})
        }
        const writeContent = () => {
            alert("writeContent입니다.");
        }

        const head = () => {
            alert("@");
            
        }
        //page-click event를 쓰면, 페이징버튼을 누를 때, 버튼 이벤트와 page번호를 argument로 전달해줌.
        const pageClick = (bvEvt, page) => {
            state.currentPage = page;
            getData(page);
        }

        /**
        const getData = (page) => {
            $axios.get($serverUrl + "/board/list", {
                //params: this.requestBody,
                //headers: {}
            }).then((res) => {    
                state.originItems = res.data
                paginging(page);    
            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        }
        */

        const getData = async (page) => {
            try {
                const { data } = await $axios.get(process.env.VUE_APP_API_URI + '/board/list', {})
                state.originItems = data
                paginging(page);  
            } catch(err) {
                if (err.message.indexOf('Network Error') > -1) {
                alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            }
        }

        const paginging = (page) => {
            let startNo = ( page - 1 ) * 5; 
            let endNo = ( page * 5 );
            state.pagingItems = state.originItems.slice(startNo, endNo); //endNo-1까지. endNo미포함
        }

        onBeforeMount(() => {
            getData(state.currentPage);
        })

        return {
            ...toRefs(state),
            writeContent,
            pageClick,
            head,
        }
    },
    data() {
        return {   
        }
    },
    computed : {
        rows() {
            return this.originItems.length;
        }
    },
    methods : {
      onRowSelected(items) {
        this.originItems = items
      },
    }
}
</script>

<style>
</style>