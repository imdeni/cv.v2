<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div class=" ml-[500px]">
  <WelcomeItem class="z-50">
    <template #icon >
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>
    
    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need tprovides you with all information you need to get started.provides you with all information you need to get started.provides you with all information you need to get started.provides you with all information you need to get started.provides you with all information you need to get started.provides you with all information you need to get started.provides you with all information you need to get started.o get started.
  </WelcomeItem>

  <WelcomeItem class="z-50">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with allprovides you with all information you need to get started.provides you with all information you need to get started.provides you with all information you need to get started.provides you with all information you need to get started. information you need to get started.
  </WelcomeItem>
</div>
</template>
