<template>
  <article class="crypto">
    <div class="route"><p class="route_count">02</p></div>
    <div class="crypto_bag">
      <h2 class="crypto_bag__title">Кошелёк криптовалют</h2>
      <div class="crypto_bag__coin">
        <img src="@/assets/coin.svg" alt="coin" v-for="(coin, index) in money" :key="index" />
      </div>
      <p class="crypto_bag__amount">
        {{ money }}
        <slot
          ><p class="crypto_bag__amount-text">biorobo {{ getTextCased }}</p></slot
        >
      </p>
      <div class="crypto_bag_action">
        <a href="#" class="crypto_bag_action_still" @click.prevent="addMoney">Нацыганить</a>
        <div>
          <label for="fiveCoin" class="control control-checkbox">
            Цыганить по 5 монет
            <input id="fiveCoin" type="checkbox" @click="getFive" />
            <div class="control_indicator"></div>
          </label>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  name: 'CryptoView',
  data: () => ({}),
  computed: {
    ...mapState(['money']),
    ...mapGetters(['getTextCased']),
  },
  methods: {
    ...mapMutations(['addMoney', 'getFive']),
  },
};
</script>

<style lang="scss" scoped>
.crypto {
  max-width: 1016px;
  width: 100%;
  box-sizing: border-box;

  padding-bottom: 100px;
  margin: 0 auto;

  display: flex;

  &_bag {
    display: flex;
    flex-direction: column;

  &__title {
    padding-bottom: 60px;
  }

  &__coin {
    position: relative;
    margin: 0 0 24px 0;

    &img:not(:first-child) {
      position: absolute;
      left: -5px;
    }
  }

  &__amount {
    display: flex;
    gap: 8px;

    line-height: 24px;
    font-weight: 700;

    padding-bottom: 44px;

    &-text {
      line-height: 24px;
      font-weight: 500;
    }
  }

  &_action {
    display: flex;
    gap: 31px;
  }
}
}

.route {
  width: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding-bottom: 22px;
  padding-right: 130px;

  &_count {
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #667380;

    align-items: center;
    padding-bottom: 114px;
  }
}

.coin {
  height: 20px;
  width: 16px;

  background-size: cover;
  background: url('@/assets/coin.svg');
  background-repeat: no-repeat;

  position: absolute;
}

.control {
  font-family: 'Montserrat', sans-serif;

  display: block;

  position: relative;
  padding-left: 36px;
  margin-bottom: 5px;
  padding-top: 3px;

  cursor: pointer;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}
.control input {
  position: absolute;
  z-index: -1;

  opacity: 0;
}
.control_indicator {
  position: absolute;
  top: 0;
  left: 0;

  height: 24px;
  width: 24px;
  border: 2px solid #a3b8cc;
  border-radius: 0px;

  background: transparent;
}
.control:hover input ~ .control_indicator,
.control input:focus ~ .control_indicator {
  background: transparent;
}
.control:hover input ~ .control_indicator {
  border: 2px solid #4c5865;
}

.control input:checked ~ .control_indicator {
  background: transparent;
}
.control:hover input:not([disabled]):checked ~ .control_indicator,
.control input:checked:focus ~ .control_indicator {
  background-color: transparent;
}
.control input:disabled ~ .control_indicator {
  background: transparent;
  opacity: 2;
  pointer-events: none;
  border: 2px solid #333940;
}
.control_indicator:after {
  box-sizing: unset;
  content: '';
  position: absolute;
  display: none;
}
.control input:checked ~ .control_indicator:after {
  display: block;
}
.control-checkbox .control_indicator:after {
  left: 10px;
  top: 3px;
  width: 3px;
  height: 15px;
  border: solid #ff7f22;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.control-checkbox input:disabled ~ .control_indicator:after {
  border-color: #ff7f22;
}

@media (max-width: 1919px) and (min-width: 1024px) {
  .route {
    display: none;
  }
  .crypto {
    max-width: 757px;
    width: 100%;
  }
}

@media (max-width: 1023px) and (min-width: 768px) {
  .route {
    display: none;
  }
  .crypto {
    max-width: 496px;
    width: 100%;
  }
}

@media (max-width: 767px) and (min-width: 320px) {
  .route {
    display: none;
  }
  .crypto {
    max-width: 236px;
    width: 100%;

    &_bag__title {
    text-align: center;
    }

    &_bag_action {
    flex-direction: column;
    }
  }

}
</style>
