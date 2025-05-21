<script setup lang="ts">
const { data, isLoading } = useQuery({
  key: ['coffee-list'],
  query: () => request('https://api.sampleapis.com/coffee/hot'),
})
</script>

<template>
  <Button
    @click="toast.success('hello')"
  >
    hello
  </Button>
  <Button icon="pi pi-home" aria-label="Save" />

  <ProgressSpinner v-if="isLoading" style="width: 32px; height: 32px;" stroke-width="4" fill="transparent" />
  <ScrollPanel v-else class="h-50 mt-10">
    <p class="px-5">
      {{ JSON.stringify(data, null, 4) }}
    </p>
  </ScrollPanel>
</template>
