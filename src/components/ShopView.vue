<template>
  <article class="shop">
    <div class="route"><p class="route__count">03</p></div>
    <div class="market">
      <h2 class="market__title">Рынок комплектующих</h2>
      <div class="market_place">
        <div class="market_place_items">
          <div class="biotech"></div>
          <h3 class="market_place_items__title">Биорука</h3>
          <p class="market_place_items__price">
            Строимость: <slot class="market_place_items__price-bold">{{ biohandCost }} монет</slot>
          </p>
          <my-button
            :disabled="biohandButtonStatus"
            @click="buyBiohand"
            class="market_place_items__buy"
            >Установить</my-button
          >
        </div>
        <div class="market_place_items">
          <div class="microchip"></div>
          <h3 class="market_place_items__title">Микрочип</h3>
          <p class="market_place_items__price">
            Строимость:
            <slot class="market_place_items__price-bold">{{ microchipCost }} монет</slot>
          </p>
          <my-button
            :disabled="microchipButtonStatus"
            @click="buyMicrochip"
            class="market_place_items__buy"
            >Установить</my-button
          >
        </div>
        <div class="market_place_items">
          <div class="soul"></div>
          <h3 class="market_place_items__title">Душа</h3>
          <p class="market_place_items__price">
            Строимость: <slot class="market_place_items__price-bold">{{ soulCost }} монет</slot>
          </p>
          <my-button :disabled="soulButtonStatus" @click="buySoul" class="market_place_items__buy"
            >Установить</my-button
          >
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { mapMutations, mapGetters, mapState } from 'vuex';

export default {
  name: 'ShopView',
  data: () => ({}),
  methods: mapMutations(['buyBiohand', 'buyMicrochip', 'buySoul']),
  computed: {
    ...mapGetters(['biohandButtonStatus', 'microchipButtonStatus', 'soulButtonStatus']),
    ...mapState(['biohandCost', 'microchipCost', 'soulCost']),
  },
};
</script>

<style lang="scss" scoped>
.shop {
  max-width: 1016px;
  width: 100%;

  box-sizing: border-box;

  padding-bottom: 100px;
  margin: 0 auto;

  display: flex;
}

.route {
  width: 24px;

  padding-right: 130px;
  &__count {
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #667380;

    align-items: center;

    padding-bottom: 114px;
    padding-top: 6px;
  }
}

.market {
  display: flex;
  flex-direction: column;

  row-gap: 60px;

  &_place {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;

    &_items {
      width: 236px;

      display: flex;
      flex-direction: column;
      &__title {
        text-align: center;

        padding-bottom: 5px;
      }

      &__price {
        display: flex;
        justify-content: center;
        gap: 8px;
        font-size: 16px;
        line-height: 24px;

        padding-bottom: 24px;

        &-bold {
          font-weight: 600;
        }
      }

      &__buy {
        text-align: center;

        padding: 12px 60px;

        background: linear-gradient(180deg, #ff7f22 0%, #ff5722 100%);
        &:hover {
          background: #ff5722;
        }

        &:active {
          background: #ff7f22;
        }

        &:disabled {
          background: #4c5865;
          color: #7d90a6;
        }
      }
    }
  }
}

.biotech {
  width: 236px;
  height: 128px;

  background: url('@/assets/BioMicSoul.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -0 -25px;

  padding-bottom: 25px;
}

.microchip {
  width: 236px;
  height: 128px;

  background: url('@/assets/BioMicSoul.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -0 -245px;

  padding-bottom: 25px;
}

.soul {
  width: 236px;
  height: 128px;

  background: url('@/assets/BioMicSoul.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -0 -465px;

  padding-bottom: 25px;
}

@media (max-width: 1919px) and (min-width: 1024px) {
  .route {
    display: none;
  }
  .shop {
    max-width: 757px;
    width: 100%;
  }
}

@media (max-width: 1023px) and (min-width: 768px) {
  .route {
    display: none;
  }
  .shop {
    max-width: 496px;
    width: 100%;
  }
}

@media (max-width: 767px) and (min-width: 320px) {
  .route {
    display: none;
  }
  .shop {
    max-width: 236px;
    width: 100%;
  }

  .market__title {
    text-align: center;
  }
}
</style>
