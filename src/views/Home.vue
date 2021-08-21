<template>
  <div class="container-home">
    <div class="content">
      <form action="">
          <img src="../assets/Logo-dibanka-768x158.png" alt="logo" class="logo">
          <h1>Tramites PQR</h1>
          <p>Ingresa tus datos para ver el historial de tramites y su estado actual</p>
          <!-- campos -->
          <label for="email">Correo electronico</label>
          <input v-model="email" type="email" id="email" placeholder="Por ejemplo, juan@dominio.com">
          <label for="telefono">Teléfono celular</label>
          <input v-model="telefono" type="tel" id="telefono" placeholder="Por ejemplo, 3141239875" >
          <label for="pin">PIN</label>
          <input v-model="pin" type="number" id="pin" placeholder="Ingrese el numero que se le envió" >
          <a @click="showModal = true">Olvido su PIN?</a>
          <button type="button" @click="consultar()" class="btn-yellow">Consultar estado del trámite</button>
      </form>
    </div>
    <img src="../assets/ondas.png" class="ondas" alt="ondas">


    <transition name="fade">
        <div class="super-modal" v-if="showModal">
            <div class="modal">
              <button class="close" @click="showModal = false"><img src="../assets/close.svg" alt=""></button>
              <h1>Recordar PIN</h1>
              <p>Ingresa tu correo electrónico para enviar un nuevo PIN</p>
              <!-- campos -->
              <label for="email">Correo electronico</label>
              <input type="email" id="email" placeholder="Por ejemplo, juan@dominio.com">
              <button class="btn-yellow">Solicitar PIN</button>
            </div>
        </div>
    </transition>
  </div>
</template>

<script>

import users from '@/user.js'

export default {
  name: 'Home',
  data(){
    return {
      showModal: false,
      email: 'qweqw@gmail.com',
      telefono: '1234',
      pin: '1234',
      pinUser: null,
      users: users.info
    }
  },

  methods: {
    consultar(){
      const listaCondiciones = [
          { columna: "correo", valor: this.email, operador: "===" },
          { columna: "telefono", valor: this.telefono, operador: "===" },
          { columna: "pin", valor: this.pin, operador: "===" }
      ];
      const user = users.info.filter(elemento => this.cumpleLasCondiciones(elemento, listaCondiciones))
      console.log(user)
      if (user.length > 0) {
        this.$router.push('/tramites/')
        localStorage.setItem("key", JSON.stringify(user));
      }
      else{
        alert("qweqwe")
      }
    },

    cumpleLasCondiciones(elemento, condiciones) {
      return !condiciones
        .map(condicion => this.evaluarCondicion(elemento, condicion))
        .includes(false);
    },

    evaluarCondicion(elemento, condicion) {
      if(condicion.operador === "===") {
          return elemento[condicion.columna] === condicion.valor;
      }
    }
  }
}
</script>
