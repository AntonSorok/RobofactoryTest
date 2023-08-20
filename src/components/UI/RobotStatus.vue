<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <transition name="modal">
    <div v-if="productionRobotStatus === true" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <a href="#" @click="hideRobotmodal"
            ><img src="@/assets/Close.svg" class="modal__close" alt="close"
          /></a>
          <div class="modal_info_textblock">
            <h1 class="modal__title">Биоробот произведён</h1>
            <h2 class="modal__text">Поздравляем! Вы произвели биоробота</h2>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: mapState(['productionRobotStatus']),
  methods: mapMutations(['hideRobotmodal']),
};
</script>

<style lang="scss">
// .modal {
//   position: absolute;
//   width: 496px;
//   height: 240px;
//   top: 288px;
//   left: 472px;
//   border-radius: 10px;

//   background: #fff;
// }
.modal__close {
  position: relative;
  left: 456px;
  top: 8px;
  width: 32px;
  height: 32px;
}

.modal_info_textblock {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 23px;
  width: 320px;
  box-sizing: border-box;
}
.modal__title {
  // position: relative;
  // top: 33px;
  // left: 106px;

  color: #212529;
  font-size: 32px;
  line-height: 40px;
  font-weight: 600;
  box-sizing: border-box;
}
.modal__text {
  // position: relative;
  // top: 136px;
  // left: 106px;

  color: #4c5865;
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
  box-sizing: border-box;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 496px;
  height: 240px;
  border-radius: 10px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
