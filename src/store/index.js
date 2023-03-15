import { createStore } from 'vuex';
// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

export default createStore({
  state: {
    checked: false,
    isButtonDisabled: true,
    existButtonDisabled: true,
    money: 0,
    biotech: 0,
    microchip: 0,
    soul: 0,
    FrontMale: 0,
    FrontFemale: 0,
    DesignMale: 0,
    DesingFemale: 0,
    type: 'front',
    gender: 'male',
    biohands: 0,
    microchips: 0,
    souls: 0,
    result: '',
    active: 'available',
    isDisabled: '',
  },
  getters: {
    BiotechButtonStatus(state) {
      if (state.money >= 7) {
        state.isButtonDisabled = false;
      } else state.isButtonDisabled = true;
      return state.isButtonDisabled;
    },
    MicrochipButtonStatus(state) {
      if (state.money >= 5) {
        state.isButtonDisabled = false;
      } else state.isButtonDisabled = true;
      return state.isButtonDisabled;
    },
    SoulButtonStatus(state) {
      if (state.money >= 25) {
        state.isButtonDisabled = false;
      } else state.isButtonDisabled = true;
      return state.isButtonDisabled;
    },

    GetFive: (state) => state.checked,
    CurrentMoney: (state) => state.money,
    CurrentBiotech: (state) => state.biotech,
    CurrentMicrochip: (state) => state.microchip,
    CurrentSoul: (state) => state.soul,

    CurrentBiotechButtonStatus(state) {
      if (state.biotech > 0) {
        state.existButtonDisabled = false;
      } else state.existButtonDisabled = true;
      return state.existButtonDisabled;
    },
    CurrentMicrochipButtonStatus(state) {
      if (state.microchip > 0) {
        state.existButtonDisabled = false;
      } else state.existButtonDisabled = true;
      return state.existButtonDisabled;
    },
    CurrentSoulButtonStatus(state) {
      if (state.soul > 0) {
        state.existButtonDisabled = false;
      } else state.existButtonDisabled = true;
      return state.existButtonDisabled;
    },

    getTextCased: (state) => {
      let textCased = 'монет';
      if (state.money >= 11 && state.money <= 19) {
        textCased = 'монет';
      } else if (state.money % 10 >= 2 && state.money % 10 <= 4) {
        textCased = 'монеты';
      } else if (state.money % 10 === 1) {
        textCased = 'монета';
      } else {
        textCased = 'монет';
      }
      return textCased;
    },
    getType: (state) => state.type,
    getGender: (state) => state.gender,
    CurrentFrontmale: (state) => state.FrontMale,
    CurrentFrontfemale: (state) => state.FrontFemale,
    CurrentDesignmale: (state) => state.DesignMale,
    CurrentDesignfemale: (state) => state.DesingFemale,
    getResult: (state) => {
      if (state.type === 'frontend' && state.gender === 'male') {
        state.result = `${state.type}-${state.gender}`;
      }
      if (state.type === 'frontend' && state.gender === 'female') {
        state.result = `${state.type}-${state.gender}`;
      }
      if (state.type === 'design' && state.gender === 'male') {
        state.result = `${state.type}-${state.gender}`;
      }
      if (state.type === 'design' && state.gender === 'female') {
        state.result = `${state.type}-${state.gender}`;
      }
      return state.result;
    },
    changeDisabled: (state) => {
      if (state.biotech === 0 && state.biohands === 0) {
        state.isDisabled = true;
      } else {
        state.isDisabled = false;
      }
      return state.isDisabled;
    },
  },
  mutations: {
    addMoney(state) {
      if (state.checked === true) {
        state.money += 5;
      } else state.money += 1;

      console.log(state.money);
      return state.money;
    },
    getFive(state) {
      state.checked = !state.checked;
      console.log(state.checked);
      return state.checked;
    },
    buyBiotech(state) {
      state.biotech += 1;
      state.money -= 7;
      return [state.biotech, state.money];
    },
    buyMicrochip(state) {
      state.microchip += 1;
      state.money -= 5;
      return [state.microchip, state.money];
    },
    buySoul(state) {
      state.soul += 1;
      state.money -= 25;
      return [state.soul, state.money];
    },
    sellBiotech(state) {
      state.biotech -= 1;
      state.money += 5;
      return [state.biotech, state.money];
    },
    sellMicrochip(state) {
      state.microchip -= 1;
      state.money += 3;
      return [state.microchip, state.money];
    },
    sellSoul(state) {
      state.soul -= 1;
      state.money += 15;
      return [state.soul, state.money];
    },
    switchType: (state, type) => {
      state.type = type;
    },
    switchGender: (state, gender) => {
      state.gender = gender;
    },

    addBiohand: (state) => {
      if (state.biotech === 0) {
        console.log('heh');
      } else {
        state.biohands += 1;
        state.biotech -= 1;
        state.active = 'active';
      }
      // if (state.biotech > 0) {
      //   state.biohands += 1;
      // } else {
      //   state.biohands -= 1;
      // }
    },
    takeBiohand: (state) => {
      state.biohands -= 1;
      state.biotech += 1;
      state.active = 'avaliable';

      // state.biotech -= 1;
      // if (state.biotech < 0) {
      //   state.biohands -= 1;
      // } else {
      //   state.biohands += 1;
      // }
    },
  },
  actions: {},
  modules: {},
});
