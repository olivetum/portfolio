<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">


            <slot name="header">
              <div class="modal-header">
              default header
              </div>
            </slot>


              <div class="modal-header">
                <slot name="body"></slot>
              </div>


          <div class="modal-footer">
            <slot name="footer">
              MATEUSZ RÓŻALSKI DESIGN
                <i class=" modal-default-button fa fa-level-down fa-2x" aria-hidden="true" @click="$emit('close')"></i>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .2s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 60%;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
@media only screen and (max-width: 751px) {
  .modal-container {
    width: 90%;
  }
}
@media only screen and (max-height: 551px) {
  .modal-container {
    width: 40%;
  }
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  height: auto;
}
.modal-body {
  padding: 20px;
  color: black;
  background: #e3b505;
}

.modal-default-button {
  float: right;
}

.modal-footer {
  font-family: 'Barlow Semi Condensed', sans-serif;
  padding: 25px;
  font-weight: 600;
}

.fa {
  cursor: pointer;
  margin-bottom: -15px;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}
</style>
