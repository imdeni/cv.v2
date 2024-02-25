<script setup>
const myProps = defineProps({
  msg: {
    type: String,
    required: true
  },
})
</script>
<template>
    <p class="border-2 border-gray-400 rounded-full w-fit max-w-[200px] min-w-[65px] pr-2 pl-2 pt-0.5 pb-0.5 w-[80px] text-center">{{msg}}</p>

</template>