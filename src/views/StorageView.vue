<template>
  <div class="storage center">
    <div class="mainRoute">
      <p class="mainRoute__page">04</p>
    </div>
    <div class="stock">
      <h2 class="stock_title">Склад</h2>
      <div class="stock_itembox">
        <div class="stock__items">
          <p class="stock__items_subtitle">Биорука</p>
          <p class="stock__items-price">Стоимость: <strong>5 монет</strong></p>
          <h2 class="stock__items_amount">{{ CurrentBiotech }} шт</h2>
          <button
            :disabled="CurrentBiotechButtonStatus"
            @click="sellBiotech"
            class="stock__items-sell button"
          >
            Продать
          </button>
        </div>
        <div class="stock__items">
          <p class="stock__items_subtitle">Микрочип</p>
          <p class="stock__items-price">Стоимость: <strong>3 монет</strong></p>
          <p class="stock__items_amount">{{ CurrentMicrochip }} шт</p>
          <button
            :disabled="CurrentMicrochipButtonStatus"
            @click="sellMicrochip"
            class="stock__items-sell button"
          >
            Продать
          </button>
        </div>
        <div class="stock__items">
          <p class="stock__items_subtitle">Душа</p>
          <p class="stock__items-price">Стоимость: <strong>15 монет</strong></p>
          <p class="stock__items_amount">{{ CurrentSoul }} шт</p>
          <button
            :disabled="CurrentSoulButtonStatus"
            @click="sellSoul"
            class="stock__items-sell button"
          >
            Продать
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  data: () => ({}),
  methods: mapMutations(['sellBiotech', 'sellMicrochip', 'sellSoul']),
  computed: mapGetters([
    'CurrentMoney',
    'CurrentBiotech',
    'CurrentMicrochip',
    'CurrentSoul',
    'CurrentBiotechButtonStatus',
    'CurrentMicrochipButtonStatus',
    'CurrentSoulButtonStatus',
  ]),
};
</script>
