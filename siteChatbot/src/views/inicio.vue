<template>
    <navbar />
    <section class="salon">
    <h1>Bem-vinda</h1>
    <div class="salon-container-pic" data-aos="fade-up">
      <div class="salon-resumeContainer">
        <div class="salon-resumeCenter">
          <p class="text-center salon-resume-text">Olá, sou a Sheila, uma cabeleireira apaixonada pelo mundo da beleza e suas possibilidades. Atuo na área há dois anos, desenvolvendo habilidades em corte, coloração, penteados e cuidados com os cabelos. Sempre me esforço para aprender as últimas tendências e aprimorar minhas técnicas para proporcionar o melhor serviço aos meus clientes. Além disso, tenho excelente habilidade de comunicação, relacionamento interpessoal e dedicação ao atendimento.</p>
          <h2 class="salon-resume-title">Resumo de qualificações</h2>
          <ul class="salon-core">
            <li>Cortes modernos e estilos personalizados;</li>
            <li>Coloração criativa e técnicas avançadas;</li>
            <li>Penteados elegantes para todas as ocasiões;</li>
            <li>Cuidados capilares especializados;</li>
          </ul>
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
        Swal.fire({
            icon: 'info',
            title: 'Você deseja fazer um agendamento de imediato?',
            showDenyButton: true,
            confirmButtonText: 'Sim',
            denyButtonText: 'Não',
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: 'Ok!',
                html: '<a href="https://api.whatsapp.com/send/?phone=%2B14155238886&text=join+learn-over&type=phone_number&app_absent=0" target="_blank">Clique aqui para agendar</a>',
                icon: 'success',
                confirmButtonText: 'Fechar'
                });
            }
            });
        }
    }
  
</script>
  
<style scoped>
.salon {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

#salon-pic {
  width: 20vw;
  height: 18%;
  margin: 0 auto;
  border-radius: 50%;
}

.salon-container-pic {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-bottom: 30px;
}

.salon-resumeCenter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.salon > h1 {
  font-size: 3rem;
  font-weight: bold;
  line-height: 3rem;
  color: #d85daf;
  margin-top: 45px;
}

.salon-resumeCenter ul {
  list-style: none;
  text-align: center;
  font-size: 20px;
  width: 50%;
}

.salon-core {
  font-size: 14px;
  margin-right: 20px;
  line-height: 2em;
  color: black;
}

.salon-resume-title{
    color: #d85daf;
}

.salon-resume-text {
  font-size: 1.2rem;
  padding: 10px 0 40px 0;
  line-height: 2em;
  width: 60%;
  color: black;
  text-align: justify;
}

.salon-contatoRow {
  margin-top: 30px;
  display: flex;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  gap: 15px;
  background-color: #181717;
  outline: 3px #181717 solid;
  outline-offset: -3px;
  border-radius: 5px;
  margin-right: 30px;
  margin-left: 30px;
  border: none;
  cursor: pointer;
  transition: 400ms;
  text-decoration: none;
  margin-bottom: 100px;
}

.bottom-details .bottom_text span,
.bottom-details .bottom_text a {
  font-size: 14px;
  font-weight: 300;
  color: #000000;
  font-weight: bold;
  opacity: 0.8;
  text-decoration: none;
}

.bottom-details .bottom_text a:hover {
  opacity: 1;
  text-decoration: underline;
}

.bottom-details .bottom_text a {
  margin-right: 10px;
  color: black;
}

@media (max-width: 520px) {
  footer::before {
    top: 145px;
  }
}

@media only screen and (max-width: 600px) {
  #salon-pic {
    width: 70vw;
  }
  
  .salon-resume-text {
    width: 90%;
  }
  
  .salon-core {
    width: 100%;
  }
}

</style>