<template>
    <transition v-if="show" name="fade">
        <div class="chargepage">
            <div class="preLogo"></div>
            <p>Loading...</p>
            <img src="../assets/preloader.svg" alt="">
            <!-- <div class="circles">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div> -->
        </div>
    </transition>
</template>

<script>
export default {
  name: 'chargepage',
  data () {
    return {
      show: true
    }
  },
  mounted () {
    this.showToggle()
  },
  methods: {
    showToggle () {
      setTimeout(() => {
        this.show = false
      }, 100000000000000)
    }
  }
}
</script>

<style scoped>
.chargepage{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #181f29eb;
    z-index: 9999;
}

.chargepage .preLogo{
    width: 190px;
    height: 60px;
    background: url(/img/Logo-dibanka-768x158.1805f981.png);
    background-repeat: no-repeat;
    background-size: 100%;
}

.chargepage p{
    font-size: 1.2rem;
    font-family: noto-sans-thin;
    color: white;
}

.chargepage img{
    margin-top: -64px;
}

/* .chargepage .circles{
    display: flex;
    margin-top: 1rem;
}

.chargepage .circles .circle{
    width: 1rem;
    height: 1rem;
    margin: 1rem;
    background-color: #ff007a;
    border-radius: 50%;
    animation-name: scaleIn;
    animation-duration: 1s;
    transform: scale(0);
}

.chargepage .circles .circle:nth-child(1){
    animation-delay: 0s
}

.chargepage .circles .circle:nth-child(2){
    animation-delay: .05s;
}

.chargepage .circles .circle:nth-child(3){
    animation-delay: .1s;
}

.chargepage .circles .circle:nth-child(4){
    animation-delay: .15s;
}

.chargepage .circles .circle:nth-child(5){
    animation-delay: .2s;
}

.fade-enter-active , .fade-leave-active{
    transition: opacity 1s;
}

.fade-enter-active .preLogo, .fade-leave-active .preLogo{
    animation-name: scaleOut;
    animation-duration: 5s;
}

.fade-enter-active p, .fade-leave-active p{
    animation-name: scaleOut;
    animation-duration: 5s;
}

.fade-enter, .fade-leave-to{
    opacity: 0;
}

@keyframes scaleOut {
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(0);
    }
}
@keyframes scaleIn {
    0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
} */

</style>
