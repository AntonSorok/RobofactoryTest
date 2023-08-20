<template>
  <article class="storage">
    <div class="route"><p class="route__count">04</p></div>

    <div class="stock">
      <h2 class="stock__title">Склад</h2>
      <div class="stock_items">
        <div class="stock_items_info">
          <h3 class="stock_items_info__title">Биорука</h3>
          <p class="stock_items_info__price">
            Стоимость:
            <slot class="stock_items_info__price-bold"> {{ biohandSellCost }} монет</slot>
          </p>
          <h2 class="stock_items_info__amount">{{ biohand }} шт.</h2>
          <my-button
            class="stock_items_info__sell"
            :disabled="sellBiohandButtonStatus"
            @click="sellBiohand"
            >Продать</my-button
          >
        </div>
        <div class="stock_items_info">
          <h3 class="stock_items_info__title">Микрочип</h3>
          <p class="stock_items_info__price">
            Стоимость:
            <slot class="stock_items_info__price-bold"> {{ microchipSellCost }} монет</slot>
          </p>
          <h2 class="stock_items_info__amount">{{ microchip }} шт.</h2>
          <my-button
            class="stock_items_info__sell"
            :disabled="sellMicrochipButtonStatus"
            @click="sellMicrochip"
            >Продать</my-button
          >
        </div>
        <div class="stock_items_info">
          <h3 class="stock_items_info__title">Душа</h3>
          <p class="stock_items_info__price">
            Стоимость: <slot class="stock_items_info__price-bold"> {{ soulSellCost }} монет</slot>
          </p>
          <h2 class="stock_items_info__amount">{{ soul }} шт.</h2>
          <my-button
            class="stock_items_info__sell"
            :disabled="sellSoulButtonStatus"
            @click="sellSoul"
            >Продать</my-button
          >
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'StorageView',
  data: () => ({}),
  methods: mapMutations(['sellBiohand', 'sellMicrochip', 'sellSoul']),
  computed: {
    ...mapGetters(['sellBiohandButtonStatus', 'sellMicrochipButtonStatus', 'sellSoulButtonStatus']),
    ...mapState([
      'biohandSellCost',
      'microchipSellCost',
      'soulSellCost',
      'biohand',
      'microchip',
      'soul',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.storage {
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

.stock {
  display: flex;
  flex-direction: column;

  row-gap: 60px;

  &_items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 24px;

    &_info {
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

        font-weight: 500;
        font-size: 16px;
        line-height: 24px;

        padding-bottom: 15px;

        &-bold {
          font-weight: 600;
        }
      }

      &__amount {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #ffffff;

        padding-bottom: 24px;
      }

      &__sell {
        text-align: center;
        color: #7cdaf9;
        background-color: transparent;

        padding: 12px 60px;

        border: 2px solid #7cdaf9;
        filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.16));
        border-radius: 60px;

        &:hover {
          background: #7cdaf9;
          color: black;
        }

        &:active {
          background: transparent;
          border: 2px solid #22b3e3;
          color: #7cdaf9;
        }

        &:disabled {
          background: transparent;
          color: #4c5865;
          border: 2px solid #4c5865;
        }
      }
    }
  }
}

@media (max-width: 1919px) and (min-width: 1024px) {
  .route {
    display: none;
  }
  .storage {
    max-width: 757px;
    width: 100%;
  }
}

@media (max-width: 1023px) and (min-width: 768px) {
  .route {
    display: none;
  }
  .storage {
    max-width: 496px;
    width: 100%;
  }
}

@media (max-width: 767px) and (min-width: 320px) {
  .route {
    display: none;
  }
  .storage {
    max-width: 236px;
    width: 100%;
  }
  .stock__title {
    text-align: center;
  }
}
</style>
