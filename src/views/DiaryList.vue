<template>
  <b-container><div style="padding: 10px"> </div></b-container>
  <!--여백-->
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
          <div @click="onRowClicked(data, data.item, data.item.title)">
            {{ data.item.title }}
          </div>
        </template>
      </b-table>

      <form class="d-flex" v-on:submit.prevent>
        <b-form-select
          v-model="searchSelected"
          :options="options"
        ></b-form-select>
        &nbsp;
        <b-form-input v-model="searchText"></b-form-input>
        &nbsp;
        <b-button class="btn btn-secondary my-2 my-sm-0" v-on:click="goSearch">
          Search
        </b-button>
      </form>
      &nbsp;
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="itemList"
        align="center"
        @page-click="pageClick"
      ></b-pagination>
      <!--
      <p class="mt-3">현재 페이지 : {{ currentPage }}</p>
      -->
      <b-button variant="outline-primary" @click="goWrite">글쓰기</b-button>
    </div>
  </b-container>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "BoardList",
  components: {},
  async setup() {
    const router = useRouter();

    const app = getCurrentInstance();
    const $axios = app.appContext.config.globalProperties.$axios;
    //const $serverUrl = app.appContext.config.globalProperties.$serverUrl;
    const state = reactive({
      perPage: 5,
      currentPage: 1,
      pagingItems: [],
      originItems: [],
      index: "",
      searchText: null,
      searchSelected: "author",
      options: [
        { value: "author", text: "작성자" },
        { value: "title", text: "제목" },
        { value: "content", text: "내용" },
      ],
    });

    const onRowClicked = (one, two, three) => {
      router.push({
        name: "DiaryDetail",
        params: { idx: two.id }, //Params 프로그래밍 방식
      });
    };

    //page-click event를 쓰면, 페이징버튼을 누를 때, 버튼 이벤트와 page번호를 argument로 전달해줌.
    const pageClick = (bvEvt, page) => {
      state.currentPage = page;
      getData(page);
    };

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

    const timeout = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const getData = async (page) => {
      await timeout(300);
      const { data } = await $axios.get(
        process.env.VUE_APP_API_URI + "/api/diary/selectAll",
        {}
      );
      state.originItems = data;
      paginging(page);
      return data;
    };

    const paginging = (page) => {
      let startNo = (page - 1) * 5;
      let endNo = page * 5;
      state.pagingItems = state.originItems.slice(startNo, endNo); //endNo-1까지. endNo미포함
    };

    const goSearch = async () => {
      const { data } = await $axios.get(
        process.env.VUE_APP_API_URI +
          "/api/diary/searchList/" +
          state.searchSelected +
          "/" +
          state.searchText,
        {}
      );
      console.log("##### data", data);
      state.originItems = data;
      paginging(state.currentPage);
    };

    const goWrite = () => {
      router.push({
        name: "DiaryWrite",
      });
    };

    onMounted(async () => {
      //await getData(state.currentPage);
    });

    const load = await getData(state.currentPage); //맨 밑에 와야함

    return {
      ...toRefs(state),
      pageClick,
      onRowClicked,
      load,
      goSearch,
      goWrite,
    };
  },
  data() {
    return {};
  },
  computed: {
    rows() {
      return this.originItems.length;
    },
  },
  methods: {},
};
</script>

<style></style>
