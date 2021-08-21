<template>
  <div class="container-tramites">
    <div class="cont-tramites">
      <nav>
        <img src="../assets/Logo-dibanka-768x158.png" alt="logo" class="logo">
        <div class="divTramites">
          <h2>Tramites</h2>
          <router-link to="/">
              <button class="btn-blue">Consultar otro usuario </button>
          </router-link>
        </div>
      </nav>

      <section class="content">
          <div>
            <div class="buscar">
              <h2>Buscar tramite</h2>
              <label for="radicado">Búsqueda por No. de radicado</label>
              <input class="radicado" type="text" id="radicado" v-model="radicado">
              <label for="fecha">Búsqueda por fecha</label>
              <input type="date" id="fecha" placeholder="" >
              <label for="estado">Búsqueda por estado</label>
              <select>
                <option disabled value="">Seleccione un el</option>
                <option>Tramites cerrados</option>
                <option>Tramites Abiertos</option>
              </select>            
              <button class="btn-yellow" @click="filtrarTramite()">Consultar</button>
            </div>
          </div>
          <div class="historial">
            <table class="tramites">
              <thead>
                <tr>
                  <th scope="col">Fecha de creación</th>
                  <th scope="col">No. Radicado</th>
                  <th scope="col">Asunto</th>
                  <th scope="col" class="estado">Estado</th>
                  <th scope="col">Historial</th>
                </tr>
              </thead>
              <tbody ref="" v-html="tr"></tbody>
            </table>
          </div>
      </section>

      <div class="footer">
        <p><span>DiBanka 2021</span> Copyright © Todos los derechos reservados - <a href="https://dibanka.co/wp-content/uploads/2021/05/Politica-de-Tratamiento-de-Datos-Personales-Mayo-2021.pdf" target="_blank">Política de privacidad</a> - <a href="https://dibanka.co/la_empresa/" target="_blank">¿Quiénes somos?</a> - <a href="https://dibanka.co/contactanos/" target="_blank"> Contact us / Contacta con nosotros </a></p>
      </div>

    </div>

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

      <!-- CHAT -->

    <div id="openModal" class="modalDialog">
      <div>
        <div class="modal-header">
          <table class="tramites">
            <thead>
              <tr>
                <th scope="col">Fecha de creación</th>
                <th scope="col">No. Radicado</th>
                <th scope="col">Asunto</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody ref="" v-html="tr2"></tbody>
          </table>
          <a href="#close" title="Close" class="close"><img src="../assets/close.svg" alt=""></a>
        </div>
  
        <div class="chat">
          <div class="lineDay">
            <hr>
            <p>Ago 12/21</p>
            <hr>
          </div>
          <div class="content uRight">
            <p class="fecha">Usuario  13:20 Ago 12/21</p>
            <div class="user">
                <div class="messg">
                  <h3>Buenas tardes, me gustaria hacer un reclamo</h3>
                </div>
            </div>
          </div>
          <div class="content uleft">
            <p class="fecha">Asesor  13:21 Ago 12/21</p>
            <div class="user">
                <div class="messg">
                  <h3>Buenas tardes, sobre que es el reclamo?</h3>
                </div>
            </div>
          </div>
          <div class="content uRight">
            <p class="fecha">Usuario  13:25 Ago 12/21</p>
            <div class="user">
                <div class="messg">
                  <h3>Una factura con valores incorrectos</h3>
                </div>
            </div>
          </div>
          <div class="content uRight">
            <div class="user">
                <div class="messg">
                  <h3>quisiera solicitar la corrección</h3>
                </div>
            </div>
          </div>
          <div class="content uRight">
            <div class="file">
                <a href="/assets/documents/modelo-factura-pdf.pdf" target="_blank" class="messg">
                  <img src="../assets/pdf.png" alt="">
                  <p>Factura.pdf</p>
                </a>
            </div>
          </div>
          <div class="content uleft">
            <p class="fecha">Asesor  13:30 Ago 12/21</p>
            <div class="user">
                <div class="messg">
                  <h3>En 3 dias habiles se le enviará la factura corregida al correo, tambien podra descargarla por este medio.</h3>
                </div>
            </div>
          </div>
          <div class="content uRight">
            <p class="fecha">Usuario  13:32 Ago 12/21</p>
            <div class="user">
                <div class="messg">
                  <h3>Muchas gracias, quedo atento.</h3>
                </div>
            </div>
          </div>
          <div class="lineDay">
            <hr>
            <p>Ago 15/21</p>
            <hr>
          </div>
          <div class="content uleft">
            <p class="fecha">Asesor  13:33 Ago 12/21</p>
            <div class="user">
                <div class="messg">
                  <h3>Buenas tardes, adjunto factura corregida</h3>
                </div>
            </div>
          </div>
          <div class="content uleft">
            <div class="file">
                <a href="/assets/documents/modelo-factura-pdf.pdf" target="_blank" class="messg">
                  <img src="../assets/pdf.png" alt="">
                  <p>Factura corregida.pdf</p>
                </a>
            </div>
          </div>
          <div class="lineDay">
            <hr>
            <p>Tramite cerrado</p>
            <hr>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
import users from '@/user.js'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data(){
    return {
      showModal: false,
      radicado: '',
      users: users.info,
      tr: '',
      tr2: '',
      datosModal: [],
      datUser: JSON.parse(localStorage.getItem("key"))
    }
  },

  mounted() {
    this.creatTabla(this.datUser[0].tramites)
    this.creatTabla2(this.datUser[0].tramites)
  },
  methods: {

    creatTabla(tramites){
      this.tr = ''
      this.tr2 = ''
      this.datosModal = []
      for (let j = 0; j < tramites.length; j++) {
        this.tr += '<td>'+tramites[j].fecha+'</td><td>'+tramites[j].radicado+'</td><td>'+tramites[j].asunto+'</td><td class="estado">'+tramites[j].estado+'</td><td><a href="#openModal" class="btn-blue">Ver</a></td></tr>'
        this.datosModal.push(tramites[j].radicado)

        console.log(tramites[j].radicado);
        // console.log(datosModal[0]);

        for (let f = 0; f < tramites.length; f++) {
          console.log(this.datosModal);
          if (this.datosModal[0] == tramites[f].radicado) {
              this.tr2 = ''
              this.tr2 += '<td>'+tramites[0].fecha+'</td><td>'+tramites[0].radicado+'</td><td>'+tramites[0].asunto+'</td><td>'+tramites[0].estado+'</td></tr>'
          }
          else if (this.datosModal[1] == tramites[f].radicado) {
              this.tr2 = ''
              this.tr2 += '<td>'+tramites[1].fecha+'</td><td>'+tramites[1].radicado+'</td><td>'+tramites[1].asunto+'</td><td>'+tramites[1].estado+'</td></tr>'
          }
          break
        }   
      }
    },

    filtrarTramite(){
        console.log(this.datosModal);
        const listaCondiciones1 = [
            { columna: "radicado", valor: this.radicado, operador: "===" }
        ];
        const datas = this.datUser[0].tramites
        const radi = datas.filter(el => this.cumpleLasCondiciones1(el, listaCondiciones1))
        if (radi.length > 0) {
          this.creatTabla(radi)
        }else{
          alert("El tramite no existe")
          this.creatTabla(datas)
        }
    },

    cumpleLasCondiciones1(el, cond) {
      return !cond
        .map(cnd => this.evaluarCondicion1(el, cnd))
        .includes(false);
    },

    evaluarCondicion1(el, cnd) {
      if(cnd.operador === "===") 
          return el[cnd.columna] === cnd.valor;
    },

    showModals() {
      document.getElementById('openModal').style.display = 'block';
    },

    CloseModals() {
      document.getElementById('openModal').style.display = 'none';
    }
  }
}
</script>