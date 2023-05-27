<template>
    <navbar />
    <section>
        <div class="main">
            <div class="row">
              <div id="circle" class="circle"></div>
                <div class="left-main">
                  <div class="all-text">
                    <h1 class="title">Conheça nossos <span class="spanDireitos">Penteados</span></h1>
                    <p class="text">"Todos os dias são para celebrar a força, a resiliência e os estilos das mulheres. Nós merecemos igualdade, respeito e liberdade em todas as esferas da vida inclusive na forma que nos penteamos. Juntas, construímos um futuro onde todas as mulheres possam brilhar e esbanjarem sua beldade."</p>
                  </div>
                </div>
              <div class="right-main">
                  <img class="imgRight" src="src\assets\img\mulher.png" alt="Imagem da bmw x1">
              </div>
            </div>
          </div>
    </section>
    
    <rodape />
</template>
  
<script>
  
import navbar from '../components/navbar.vue';
import rodape from '../components/rodape.vue';
  
export default{
    components: {
        navbar,
        rodape
    },

    mounted(){
      
    }
}
</script>
  
<style scoped>

.main{
  margin-top: -25px;
}

.row{
  display: flex;
}

.left-main{
  margin-left: 30px;
}

.circle{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #d85daf;
  clip-path: circle(250px at right 350px);
}

.title{
    font-size: 70px;
    font-weight: bold;
    cursor: default;
    color: #d85daf;
}

.spanDireitos{
    color: #000000;
}

.text{
    font-size: 20px;
    font-weight: bold;
    cursor: default;
    text-align: justify;
    color: #d85daf;
}

.right-main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.imgRight{
    width: 570px;
    z-index: 999;
}

@media screen and (max-width: 600px) { /* Responsivity smarthphones */  .main{
    margin-top: -50px;
  }
    
    .row{
      flex-direction: column;
    }

    .left-main{
      margin-left: 0px;
    }

    .all-text{
      align-items: center;
      text-align: center;
      width: 90%;
    }

    .title{
      font-size: 65px;
    }

    .text{
      margin-right: 20px;
      font-size: 24px;
    }

    .circle{
      display: none;
    }

    .imgRight{
      display: none;
    }
  }

</style>