<script setup>
import { Icon } from '@iconify/vue';
import Isi from './IsiProject.vue';

</script>
<script>
    export default {
        components: {
            Icon,
        },
    };
</script>

<template>
  <div class="relative h-screen ml-2 mr-4 sm:ml-[280px] sm:mt-0 md:ml-[370px] md:mt-0 lg:ml-[500px] ">
    <div class="z-0 absolute top-1/3 sm:top-0 pr-2 pl-2 sm:pl-4 md:pl-12 lg:pt-12 md:pt-12 sm:pt-8  md:pr-2 lg:pr-14">
      
      <h1 class="rounded-full border-2 w-fit pr-2 pl-2 font-bold mt-2 text-gray-200">PROJECT</h1><br>
      <hr class="-mt-2"><br>

      <Isi />

    </div>
  </div>
</template>