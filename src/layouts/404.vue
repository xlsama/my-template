<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <button @click="router.back()">
      返回
    </button>
  </div>
  <RouterView />
</template>
