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
          <div style="padding:10px;"> 
            <p class="f"> Loading .. </p>	
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
		.f { font : normal 30px "궁서", "굴림", "sans-serif"; }	
</style>