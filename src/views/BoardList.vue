<template>
    <b-container>
    <div>
        <b-table 
            id="itemList"
            :items="pagingItems"
            :per-page="perPage"
            :current-page="currentPage"
            :bordered="true"
            :hover="true"
        >
        <template #cell(title)="data">
            <div @click="onRowClicked(data, data.item, data.item.title )">{{ data.item.title }}</div>
        </template>
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

        <!-- TEST btn -->
        <b-button>Button</b-button>
        <b-button variant="danger">Button</b-button>
        <b-button variant="success">Button</b-button>
        <b-button variant="outline-primary">Button</b-button>
        
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

        const onRowClicked = (one, two, three) => {
            console.log(JSON.stringify(two.idx));//key
            router.push({
                name : "BoardDetail",
                params : { idx: two.idx } //Params 프로그래밍 방식
            });
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
            pageClick,
            onRowClicked,
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
    }
}
</script>

<style>
</style>