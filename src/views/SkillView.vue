<script setup>
import Imgs from '../components/Skill/ImgSkill.vue'
</script>


<template>
  <div class="relative h-screen ml-2 mr-4 sm:ml-[280px] sm:mt-0 md:ml-[370px] md:mt-0 lg:ml-[500px]">
    <div class="z-0 absolute top-1/3 sm:top-0 pr-2 pl-2 sm:pl-4 md:pl-12 lg:pt-12 md:pt-12 sm:pt-8 md:pr-2 lg:pr-14">
      
      <h1 class="rounded-full border-2 w-fit pr-2 pl-2 font-bold mt-2 text-gray-200 text-sm lg:text-base">SKILL</h1><br>
      <hr class="-mt-2"><br>
        <div class="grid grid-cols-1 gap-2">
        
            <div class="text-center">
                <p class="font-bold text-lg mb-1 text-gray-300">Programming Languages</p>
                <div class="border-2 border-gray-400 rounded-lg p-2 grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <Imgs img="src/assets/img/xxx.png" msg="Hypertext Preprocessor"/>
                    <Imgs img="src/assets/img/html.png" msg="Hypertext Markup Language"/>
                    <Imgs img="src/assets/img/css.png" msg="Cascading Style Sheets"/>
                    <Imgs img="src/assets/img/javascript.png" msg="Javascript"/>
                    <Imgs img="src/assets/img/python.png" msg="Python"/>
                    <Imgs img="src/assets/img/vb.png" msg="Visual basic"/>
                    <Imgs img="src/assets/img/sqls.png" msg="Standard Query Language"/>
                
                </div>
            </div>

            <div class="text-center">
                <p class="font-bold text-lg mb-1 text-gray-300">Libraries & Frameworks</p>
                <div class="border-2 border-gray-400 rounded-lg p-2 grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <Imgs img="src/assets/img/codeigniter.png" msg="CodeIgniter"/>
                    <Imgs img="src/assets/img/laravel.png" msg="Laravel"/>
                    <Imgs img="src/assets/img/vue.png" msg="Vue"/>
                    <Imgs img="src/assets/img/api.png" msg="Json API"/>
                    <Imgs img="src/assets/img/tailwind.png" msg="Tailwind"/>
                
                </div>
            </div>

            <div class="text-center">
                <p class="font-bold text-lg mb-1 text-gray-300">Tools & Platforms</p>
                <div class="border-2 border-gray-400 rounded-lg p-2 grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <Imgs img="src/assets/img/git.png" msg="Git"/>
                    <Imgs img="src/assets/img/github.png" msg="GitHub"/>
                    <Imgs img="src/assets/img/vsc.png" msg="Visual Studio Code"/>
                    <Imgs img="src/assets/img/cpanel.png" msg="Cpanel"/>
                    <Imgs img="src/assets/img/cmd.png" msg="Command Prompt"/>
                    <!-- <Imgs img="src/assets/img/heidi.png" msg="HeidiSql"/> -->
                    <Imgs img="src/assets/img/mysql.png" msg="MySql"/>
                    <Imgs img="src/assets/img/sql.png" msg="Ms SQL"/>
                    <Imgs img="src/assets/img/mongo.png" msg="MongoDB"/>
                    <Imgs img="src/assets/img/postman.png" msg="Postman"/>
                    <Imgs img="src/assets/img/redis.png" msg="Redis"/>
                    <Imgs img="src/assets/img/docker.png" msg="Docker"/>
                    <Imgs img="src/assets/img/kubernetes.png" msg="Kubernetes"/>
                    <Imgs img="src/assets/img/xampp.png" msg="XAMPP"/>
                
                
                </div>
            </div>

        </div>
    </div>
  </div>
</template>