<template>
    <Suspense>
        <template #default>
            <board-list/>
        </template>
        <template #fallback>
           <span>Loading....</span>
        </template>        
    </Suspense>
</template>

<script>
export default {
  components: {
    BoardList: defineAsyncComponent(() => import('./BoardList.vue'))
  }
}
</script>