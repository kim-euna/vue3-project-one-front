<template>
  <div>
  <b-container>
    <div style="padding:10px;"> </div><!--여백-->

    <div v-if="error">
      <h2>{{ error }}</h2>
    </div>
    
    <Suspense v-else>
        <!-- 비동기 호출이 1개 이상 있는 컴포넌트들 -->
        <template #default>
            <BoardList />
        </template>
        <template #fallback>
          <!-- 로딩 스피너 -->
          <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </template>        
    </Suspense>
  </b-container>
  </div>
</template>

<script>
import { onErrorCaptured, defineAsyncComponent, ref } from 'vue'

export default {
  components: {
    BoardList: defineAsyncComponent(() => import('./BoardList.vue'))
  },
  setup() {
    const error = ref(null)

    //Suspense Error 처리
    onErrorCaptured(e => {
      error.value = e
      return true
    })
    return {
      error
    }
  }  
}
</script>
<style scoped>
</style>