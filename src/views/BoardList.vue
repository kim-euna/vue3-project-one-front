<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="itemList"
      align="center"
      @page-click="pageClick"
    ></b-pagination>
    <b-table
      id="itemList"
      :items="pagingItems"
      :per-page="perPage"
      :current-page="currentPage"
      @click="rowClick"
    ></b-table>
    <p class="mt-3">현재 페이지 : {{ currentPage }}</p>
    <b-button @click="writeContent">글쓰기</b-button>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import { onBeforeMount } from '@vue/runtime-core';
export default {
    name : 'BoardList',
    components : {
    },
    setup() {
        const state = reactive({
            perPage : 5,
            currentPage : 1,
            pagingItems : [],
            originItems : [
                { id : 1, title : '게시글1', creDate : '20220712'},
                { id : 2, title : '게시글2', creDate : '20220712'},
                { id : 3, title : '게시글3', creDate : '20220712'},
                { id : 4, title : '게시글4', creDate : '20220712'},
                { id : 5, title : '게시글5', creDate : '20220712'},
                { id : 6, title : '게시글6', creDate : '20220712'},
                { id : 7, title : '게시글7', creDate : '20220712'},
                { id : 8, title : '게시글8', creDate : '20220712'},
                { id : 9, title : '게시글9', creDate : '20220712'},
                { id : 10, title : '게시글10', creDate : '20220712'},
                { id : 11, title : '게시글11', creDate : '20220712'},
                { id : 12, title : '게시글12', creDate : '20220712'},
                { id : 13, title : '게시글13', creDate : '20220712'},
                { id : 14, title : '게시글14', creDate : '20220712'},
            ],
            fields : [
                { key : 'id', label : '번호' },
                { key : 'title', label : '제목' },
                { key : 'creDate', label : '등록일자' },
            ],            
        });
        const rowClick = () => {
            alert("rowClick입니다.");
        }
        const writeContent = () => {
            alert("writeContent입니다.");
        }
        //page-click event를 쓰면, 페이징버튼을 누를 때, 버튼 이벤트와 page번호를 argument로 전달해줌.
        const pageClick = (bvEvt, page) => {
            state.currentPage = page;
            getData(page);
        }
        const getData = (page) => {
            let startNo = ( page - 1 ) * 5; 
            let endNo = ( page * 5 );
            state.pagingItems = state.originItems.slice(startNo, endNo); //endNo-1까지. endNo미포함
        }
        onBeforeMount(() => {
            getData(state.currentPage);
        })
        return {
            ...toRefs(state),
            rowClick,
            writeContent,
            pageClick,
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
}
</script>

<style>
</style>