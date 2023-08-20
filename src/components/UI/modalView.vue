<template>
  <transition name="modal">
    <div v-if="modalVisible === true" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <a href="#" @click="hideMoneyModal" class="modal__close"
            ><img src="@/assets/Close.svg" class="modal__close_icon" alt="close" />
          </a>
          <div class="modal_info_block">
            <div class="modal__coin"></div>
            <div class="modal_info_textblock">
              <h1 class="modal__title">Количество монет ограничено</h1>
              <h2 class="modal__text">Вы не можете нацыганить более 100 монет biorobo</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: mapState(['modalVisible']),
  methods: mapMutations(['hideMoneyModal']),
};
</script>

<style lang="scss">
.modal {
  border-radius: 10px;

  background: #fff;
}
.modal__close {
  position: relative;

  left: 456px;
  top: 8px;
}
.modal__close_icon {
  width: 32px;
  height: 32px;
}

.modal_info_block {
  display: flex;
}
.modal__coin {

  width: 43px;
  height: 52px;
  margin-left: 34px;
  margin-top: 15px;
  background: url('@/assets/coin.svg');
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
}
.modal_info_textblock {
  display: flex;
  flex-direction: column;
  gap: 23px;
  width: 320px;
  margin: 0 auto;
  box-sizing: border-box;
}
.modal__title {
  color: #212529;
  font-size: 32px;
  line-height: 40px;
  font-weight: 600;
  box-sizing: border-box;
}

.modal__text {
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

@media (max-width: 767px) and (min-width: 320px) {
  .modal-container {
    width: 236px;
    height: 210px;
    border-radius: 10px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal__coin {
    position: relative;
    bottom: 10px;

    width: 44px;
    height: 52px;
    box-sizing: border-box;

    background: url('@/assets/coin.svg');
    background-repeat: no-repeat;
    background-size: cover;

    margin: 0 auto;
  }

  .modal__close {
    position: relative;
    left: 196px;
    top: 8px;
  }
  .modal__close_icon {
    width: 32px;
    height: 32px;

    background: url('@/assets/Close.svg');
  }

  .modal_info_block {
    flex-direction: column;
    align-items: center;
  }

  .modal_info_textblock {
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 236px;
    box-sizing: border-box;

    margin: 0;
  }

  .modal__title {
    width: 236px;
    box-sizing: border-box;

    color: #212529;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    text-align: center;
  }

  .modal__text {
    width: 236px;
    box-sizing: border-box;

    color: #4c5865;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    text-align: center;
  }
}
</style>
