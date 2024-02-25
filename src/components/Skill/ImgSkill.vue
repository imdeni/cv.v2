<script setup>
const myProps = defineProps({
  msg: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
})
</script>

<template>
    <div class="grid grid-cols-[45px_minmax(0px,2000px)] pl-2">
        <img v-bind:src="img"  v-bind:alt="msg" class="w-8 h-8">
        <p class="text-left pt-1 pb-1 text-md sm:text-base lg:text-lg">{{ msg }}</p>
     </div>
</template>