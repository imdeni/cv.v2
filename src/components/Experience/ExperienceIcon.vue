<script setup>
const myProps = defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
<template>
    <div class="item">
      <i>
        <h1 class="font-bold hidden lg:block">{{msg}}</h1>
        <!-- <slot name="icon"></slot> -->
      </i>
      <div class="details">
        <h3>
          <slot name="heading"></slot>
        </h3>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <style scoped>
  .item {
    margin-top: 2rem;
    
    display: flex;
    position: relative;
  }
  
  .details {
    
    flex: 1;
    margin-left: 1rem;
  }
  
  i {
    
    /* display: flex;
    place-items: center;
    place-content: center; */
    /* width: 32px; */
    height: 32px;
    color: var(--color-text);
  }
  
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
  }
  

  @media (min-width: 1024px) {
    .item {
      margin-top: 0;
      padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    
    }
  
    i {
      top: calc(50% - 25px);
      left: -30px;
      position: absolute;
      /* border: 4px solid var(--color-border); */
      border: 4px solid rgb(161 161 170);
      background: var(--color-background);
      border-radius: 8px;
      width: 60px;
      height: 50px;
      display: flex;
    place-items: center;
    place-content: center;
    }
  
    .item:before {
      content: ' ';
      /* border-left: 1px solid var(--color-border); */
      border: 2px solid rgb(161 161 170);
      position: absolute;
      left: 0;
      bottom: calc(50% + 25px);
      height: calc(50% - 25px);
    }
  
    .item:after {
      
        content: ' ';
      /* border-left: 1px solid var(--color-border); */
      border: 2px solid rgb(161 161 170);
      position: absolute;
      left: 0;
      top: calc(50% + 25px);
      height: calc(50% - 25px);
    }
  
    .item:first-of-type:before {
      display: none;
    }
  
    .item:last-of-type:after {
      display: none;
    }
  }
  </style>
  