<template>
  <div class="shop center">
    <div class="mainRoute">
      <p class="mainRoute__page">03</p>
    </div>
    <div class="market">
      <h2 class="market_title">Рынок комплектующих</h2>
      <div class="market__place">
        <div class="itembox">
          <div class="itembox__biotech"></div>
          <!-- <img class="itembox_pic" src="/img/Subtract.svg" alt="Biotech" /> -->
          <h1 class="itembox_title">Биорука</h1>
          <p class="itembox-price">Стоимость: <strong>7 монет</strong></p>
          <button
            :disabled="BiotechButtonStatus"
            @click="buyBiotech"
            class="itembox_install button"
          >
            Установить
          </button>
        </div>
        <div class="itembox">
          <div class="itembox__microchip"></div>

          <!-- <img class="itembox_pic" src="/img/Microchip.svg" alt="Microchip" /> -->
          <p class="itembox_title">Микрочип</p>
          <p class="itembox-price">Стоимость: <strong>5 монет</strong></p>
          <button
            :disabled="MicrochipButtonStatus"
            @click="buyMicrochip"
            class="itembox_install button"
          >
            Установить
          </button>
        </div>
        <div class="itembox">
          <div class="itembox__soul"></div>

          <!-- <img class="itembox_pic" src="/img/Soul.svg" alt="Soul" /> -->
          <h1 class="itembox_title">Душа</h1>
          <p class="itembox-price">Стоимость: <strong>25 монет</strong></p>
          <button :disabled="SoulButtonStatus" @click="buySoul" class="itembox_install button">
            Установить
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
  methods: mapMutations(['buyBiotech', 'buyMicrochip', 'buySoul']),
  computed: mapGetters([
    'CurrentMoney',
    'BiotechButtonStatus',
    'MicrochipButtonStatus',
    'SoulButtonStatus',
  ]),
};
</script>
