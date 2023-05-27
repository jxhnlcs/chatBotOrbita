<template>
    <navbar />
    <section class="salon">
      <img src="src\assets\img\mapa.png" alt="Mapa delegacias">
  </section>
  <rodape />
</template>
  
<script>
  
import navbar from '../components/navbar.vue';
import rodape from '../components/rodape.vue';
  
export default{
    components: {
        navbar,
        rodape,
    },
}
</script>
  
<style scoped>
.salon {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>