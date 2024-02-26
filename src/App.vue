<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HomeView from './views/AboutView.vue'

import { Icon } from '@iconify/vue';
// const myProps = defineProps({
//     icons: {
//     type: String,
//     required: true
//   },
// })
</script>
<script>
    export default {
        components: {
            Icon,
        },
        methods: {
          readFile() {
            window.open('Resume.pdf', '_blank') //to open in new tab
          }
        }
    };
</script>

<template>
  <div id="containernya" class="grid p-4 
    bg-gradient-to-b from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-800
    sm:bg-gradient-to-r sm:from-zinc-800 sm:to-zinc-700 sm:hover:from-zinc-700 sm:hover:to-zinc-800
    grid-rows-1
    text-center
    sm:text-left
    sm:grid-rows-6 
    md:place-items-center 
    lg:place-items-center 
    sm:h-screen 
    md:h-screen
    lg:h-screen 
    h-[30%]
    top-0
    w-full
    sm:w-[280px]
    md:w-[370px]
    lg:w-[500px] 
    fixed z-50
    lg:pr-14">
    <div></div>
    <div></div>
    <div class="grid grid-rows-2 lg:grid-rows-3">
      <h1 class="font-bold 
        text-2xl
        sm:text-3xl
        sm:-mt-3
        md:text-5xl
        lg:text-5xl text-gray-300">Deni Achmad</h1>
      <h1 class="
        text-lg
        sm:text-xl
        sm:-mt-1
        md:text-3xl
        lg:text-3xl text-gray-300">Full-stack web developer</h1>
        <h1 class="w-fit hidden 
        md:text-xl 
        md:block 
        lg:text-xl 
        lg:block">I build accessible, inclusive products and digital experiences for the web.</h1>
      </div>
    <h1 class="w-fit text-sm sm:text-md md:hidden lg:hidden">I build accessible, inclusive products and digital experiences for the web.</h1>
    <div></div>
    <div></div>
    <div class="grid grid-cols-5 gap-4 w-full">
      <div class="grid grid-rows-2">
        
        <button  id="btn-hover" class="border-2 mb-1 mt-2 rounded-full justify-self-center  hover:bg-zinc-700 hover:border-black">
          <p class="hidden">tes</p>
          <RouterLink class="hover:text-black text-zinc-400" to="/"><Icon class="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] pt-2 pb-2 hover:text-black" icon="healthicons:ui-user-profile" /></RouterLink>
        </button>
        <h1 id="text" class="text-center text-xs">ABOUT</h1>
      </div>
      <div class="grid grid-rows-2">
        
        <button id="btn-hover1" class="border-2 mb-1 mt-2 rounded-full justify-self-center hover:bg-zinc-700 hover:border-black">
          <p class="hidden">tes</p>
          <RouterLink class="hover:text-black text-zinc-400" to="/experience" aria-label="Experience" ><Icon class="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] pt-2 pb-2 hover:text-black" icon="game-icons:achievement" /></RouterLink>
          <!-- <Icon class="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] pt-2 pb-2 hover:text-black" icon="game-icons:achievement" /> -->
        </button>  
        <h1 id="text" class="text-center text-xs">EXP</h1>
      </div>
      <div class="grid grid-rows-2">
        
        <button id="btn-hover2" class="border-2 mb-1 mt-2 rounded-full justify-self-center  hover:bg-zinc-700 hover:border-black">
          <p class="hidden">tes</p>
          <RouterLink class="hover:text-black text-zinc-400" to="/skill"><Icon class="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] pt-2 pb-2 hover:text-black" icon="game-icons:skills" /></RouterLink>
          <!-- <Icon class="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] pt-2 pb-2 hover:text-black" icon="game-icons:skills" /> -->
        </button>  
        <h1 id="text" class="text-center text-xs">SKILL</h1>
      </div>
      <div class="grid grid-rows-2">
        

        <button id="btn-hover3" class="border-2 mb-1 mt-2 rounded-full justify-self-center  hover:bg-zinc-700 hover:border-black">
          <p class="hidden">tes</p>
          <RouterLink class="hover:text-black text-zinc-400" to="/project"><Icon class="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] pt-2 pb-2 hover:text-black" icon="ic:round-add-task" /></RouterLink>
          <!-- <Icon class="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] pt-2 pb-2 hover:text-black" icon="game-icons:skills" /> -->
        </button>  
      
        <h1 id="text" class="text-center text-xs">PROJECT</h1>
      </div>
      <div class="grid grid-rows-2">
        
        <button id="btn-hover4" v-on:click="readFile()" class="border-2 mb-1 mt-2 rounded-full justify-self-center  hover:bg-zinc-700 hover:border-black">
          <p class="hidden">tes</p>
          <Icon class="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] pt-2 pb-2 hover:text-black" icon="uiw:file-pdf" />
        </button>
        <h1 id="text" class="text-center text-xs">RESUME</h1>
      </div>

    </div>
  </div>
  <div class="contact hidden xl:block fixed lg:right-2">
    <div class="grid grid-rows-5 border-2 border-gray-500 rounded-lg -mt-[10px] p-2">
      <br><br>
      <Icon class="lg:w-[50px] lg:h-[50px] p-1 hover:text-white hover:rounded-lg" icon="emojione:flag-for-indonesia" />
      <button class="w-full">
        <p class="hidden">tes</p>
        <a class="text-gray-400" href="https://www.instagram.com/dee__721/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <Icon class="lg:w-[50px] lg:h-[50px] p-1 hover:bg-zinc-600 hover:text-white hover:rounded-lg" icon="mdi:instagram" />
        </a>
      </button>
      <button class="w-full">
        <p class="hidden">tes</p>
        <a class="text-gray-400" aria-label="Github" href="https://github.com/imdeni" target="_blank" rel="noreferrer">
          <Icon class="lg:w-[50px] lg:h-[50px] p-1 hover:bg-zinc-600 hover:text-white hover:rounded-lg" icon="codicon:github" />
        </a>
      </button>
        <button class="w-full">
        <p class="hidden">tes</p>
        <a class="text-gray-400" aria-label="Gmail"  href="https://mail.google.com/mail/u/0/?fs=1&to=im.deniachmad@gmail.com&tf=cm" target="_blank" rel="noreferrer">
          <Icon class="lg:w-[50px] lg:h-[50px] p-1 hover:bg-zinc-600 hover:text-white hover:rounded-lg" icon="mdi:gmail" />
        </a>
      </button>
      <button class="w-full">
        <p class="hidden">tes</p>
        <a class="text-gray-400" aria-label="Whatsapp"  href="https://api.whatsapp.com/send?phone=6285803619114" target="_blank" rel="noreferrer">
          <Icon class="lg:w-[50px] lg:h-[50px] p-2 hover:bg-zinc-600 hover:text-white hover:rounded-lg" icon="mi:call" />
        </a>
      </button>
     </div>
    
  </div>
    <!-- <div><HomeView/></div> -->
    <RouterView />
    
</template>

<style>
#containernya{
  animation-timing-function: linear;
  animation: ani-cont 1.5s forwards;
}
.contact{
  margin-top: -300px;
  animation-timing-function: linear;
  animation: animate 1.5s forwards;
}
@keyframes animate{
  0%{
    margin-top: -300px;
  }
  100%{
    margin-top: 0px;
  }
} 
@keyframes ani-cont{
  0%{
    opacity: 0%;
  }
  100%{
    opacity: 100%;
  }
} 
#text{
  color: rgb(209 213 219);
  /* font-weight: bold; */
}
#btn-hover:hover + #text,#btn-hover1:hover + #text,#btn-hover2:hover + #text,#btn-hover3:hover + #text,#btn-hover4:hover + #text {
  color: black;
}
</style>