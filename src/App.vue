<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

<div class="container">
   <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">contact</RouterLink>

        <RouterLink to="/recherche">recherche</RouterLink>
      </nav>
<div class="render">
  <RouterView />
</div>
</div>
      

     

  
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 12px;
}
nav{
  display: flex;
  justify-content:center;
  gap: 25px;
  color: black;
}


</style>
