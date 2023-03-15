<template>
  <div class="crypto center">
    <div class="mainRoute"><p class="mainRoute__page">02</p></div>
    <div class="cryptoBag">
      <h2 class="cryptoBag__title">Кошелёк криптовалют</h2>
      <div class="cryptoBag__coin">
        <!-- <img
          class="coin"
          v-for="CurrentMoney in CurrentMoney"
          :key="CurrentMoney"
          src="@/assets/coin.svg"
          alt=""
        /> -->
        <div
          v-bind:style="{ left: CurrentMoney * 8 + 600 + 'px' }"
          v-for="CurrentMoney in CurrentMoney"
          :key="CurrentMoney"
          class="coin"
        ></div>
      </div>
      <p class="cryptoBag__amount">{{ CurrentMoney }} biorobo {{ getTextCased }}</p>
      <!-- Меняется по падежам -->
      <div class="cryptoBag__action">
        <router-link to="" @click.prevent="addMoney" class="CrtyptoBag__action-still"
          >Нацыганить</router-link
        >
        <div>
          <label for="fiveCoin" class="control control-checkbox">
            Цыганить по 5 монет
            <input id="fiveCoin" @click="getFive" type="checkbox" />
            <div class="control_indicator"></div>
          </label>
          <!-- <input
              id="fiveCoins"
              class="cryptoBag__action-still_Input"
              type="checkbox"
            />
            <label class="cryptoBag__action-still_Label" for="fiveCoins"
              >Цыганить по 5 монет</label
            > -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data: () => ({
    check: '<button>check</button>',
  }),
  methods: mapMutations(['addMoney', 'getFive', 'changeButtonStatus']),
  computed: mapGetters(['CurrentMoney', 'GetFive', 'getTextCased']),
};
</script>
