<script setup>
import { Icon } from '@iconify/vue';
</script>
<script>
export default {
  components: {
    Icon,
  },
  // methods: {
  //   tes() {
  //     const fs = require('fs');



  //     fs.readFile('data.txt', 'utf8', function (err, data) {

  //       if (err) {

  //         console.error(err);

  //       } else {

  //         console.log(data);

  //       }

  //     });
  //   }
  // }
};
</script>

<template>
  <div class="relative h-screen ml-2 mr-4 sm:ml-[280px] sm:mt-0 md:ml-[370px] md:mt-0 lg:ml-[500px] ">
    <div class="z-0 absolute top-1/3 sm:top-0 pr-2 pl-2 sm:pl-4 md:pl-12 lg:pt-12 md:pt-12 sm:pt-8  md:pr-2 lg:pr-14">

      <h1 class="rounded-full border-2 w-fit pr-2 pl-2 font-bold mt-2 text-gray-200">ABOUT</h1><br>
      <hr class="-mt-2"><br>
      <div class="hover:bg-zinc-700 rounded-lg text-justify text-lg p-4">
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->
        <p>Live in Semarang Regency, Central Java, Indonesia. 25 years old, Bachelor of Computer Information Systems, PGRI
          Semarang University with GPA 3.29. My main language is indonesian, and intermediate in english reading and
          writing.</p>
        <br>
        <p>I started my career as a programmer starting from receiving small projects in the creation of websites and
          applications. Creating a Website from Scratch and creating new algorithms is a fun job for me because I can know
          new things and also new knowledge in programming. So I decided to continue my path as a programmer.</p>
      </div>

      <div class="hover:bg-zinc-700 rounded-lg text-justify text-lg pr-4 pl-4 pb-2 pt-2">
        <button class="w-full">
          <a aria-label="Instagram" class="text-gray-400" href="https://www.instagram.com/dee__721/" target="_blank"
            rel="noreferrer">
            <div
              class="border-2 border-gray-400 rounded-lg p-2 grid grid-cols-[30px_minmax(0px,auto)] place-items-center">
              <Icon class="w-[30px] h-[30px]" icon="mdi:instagram" />
              <p>dee__721</p>
            </div>
          </a>
        </button>
      </div>
      <div class="hover:bg-zinc-700 rounded-lg text-justify text-lg pr-4 pl-4 pb-2 pt-2">
        <button class="w-full">
          <a aria-label="Github" class="text-gray-400" href="https://github.com/imdeni" target="_blank" rel="noreferrer">
            <div
              class="border-2 border-gray-400 rounded-lg p-2 grid grid-cols-[30px_minmax(0px,auto)] place-items-center">
              <Icon class="w-[30px] h-[30px]" icon="codicon:github" />
              <p>imdeni</p>
            </div>
          </a>
        </button>
      </div>
      <div class="hover:bg-zinc-700 rounded-lg text-justify text-lg pr-4 pl-4 pb-2 pt-2">
        <button class="w-full">
          <a aria-label="Gmail" class="text-gray-400"
            href="https://mail.google.com/mail/u/0/?fs=1&to=im.deniachmad@gmail.com&tf=cm" target="_blank"
            rel="noreferrer">
            <div
              class="border-2 border-gray-400 rounded-lg p-2 grid grid-cols-[30px_minmax(0px,auto)] place-items-center">
              <Icon class="w-[30px] h-[30px]" icon="mdi:gmail" />
              <p>Im.deniachmad@gmail.com</p>
            </div>
          </a>
        </button>
      </div>

      <div class="hover:bg-zinc-700 rounded-lg text-justify text-lg pr-4 pl-4 pb-2 pt-2">
        <button class="w-full">
          <a aria-label="Whatsapp" class="text-gray-400" href="https://api.whatsapp.com/send?phone=6285600163725"
            target="_blank" rel="noreferrer">
            <div
              class="border-2 border-gray-400 rounded-lg p-2 grid grid-cols-[30px_minmax(0px,auto)] place-items-center">
              <Icon class="w-[30px] h-[30px]" icon="mi:call" />
            <p>+62 856-0016-3725</p>
          </div>
        </a>
      </button>
    </div>
    <!-- <button v-on:click="tes()">tes</button> -->
  </div>
</div></template>

