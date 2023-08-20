/* eslint-disable no-multi-assign */
/* eslint-disable operator-linebreak */
import { createStore } from 'vuex';

export default createStore({
  state: {
    money: 0,
    checked: false,
    biohandCost: 7,
    microchipCost: 5,
    soulCost: 25,
    buyButtonDisabled: true,
    biohand: 0,
    microchip: 0,
    soul: 0,
    biohandSellCost: 5,
    microchipSellCost: 3,
    soulSellCost: 15,
    sellButtonSDisabled: true,
    selectedType: 'frontend',
    selectedGender: 'male',
    detailStatus: 'disabled',
    produceButtonDisabled: false,
    productionRobotStatus: false,
    modalVisible: false,
    details: {
      biohand1: false,
      biohand2: false,
      biohand3: false,
      biohand4: false,
      readyBiohandDetails: 0,

      microchip1: false,
      microchip2: false,
      microchip3: false,
      microchip4: false,
      readyMicrochipDetails: 0,

      soul: false,
      readySoulDetails: 0,
    },
    readyDetails: 0,
  },
  getters: {
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

    // Первая страница

    biohandButtonStatus(state) {
      if (state.money >= state.biohandCost) {
        state.buyButtonDisabled = false;
      } else {
        state.buyButtonDisabled = true;
      }
      return state.buyButtonDisabled;
    },

    microchipButtonStatus(state) {
      if (state.money >= state.microchipCost) {
        state.buyButtonDisabled = false;
      } else {
        state.buyButtonDisabled = true;
      }
      return state.buyButtonDisabled;
    },

    soulButtonStatus(state) {
      if (state.money >= state.soulCost) {
        state.buyButtonDisabled = false;
      } else {
        state.buyButtonDisabled = true;
      }
      return state.buyButtonDisabled;
    },

    // Вторая страница

    sellBiohandButtonStatus(state) {
      if (state.biohand > 0) {
        state.sellButtonSDisabled = false;
      } else {
        state.sellButtonSDisabled = true;
      }
      return state.sellButtonSDisabled;
    },

    sellMicrochipButtonStatus(state) {
      if (state.microchip > 0) {
        state.sellButtonSDisabled = false;
      } else {
        state.sellButtonSDisabled = true;
      }
      return state.sellButtonSDisabled;
    },

    sellSoulButtonStatus(state) {
      if (state.soul > 0) {
        state.sellButtonSDisabled = false;
      } else {
        state.sellButtonSDisabled = true;
      }
      return state.sellButtonSDisabled;
    },

    // Третья страница

    getResultRobot(state) {
      let resultRobotStatus = '';
      if (state.readyDetails === 9) {
        resultRobotStatus = `${state.selectedType}-${state.selectedGender}-ready`;
      } else if (state.biohand + state.microchip + state.soul + state.readyDetails >= 9) {
        resultRobotStatus = `${state.selectedType}-${state.selectedGender}-available`;
      } else {
        resultRobotStatus = `${state.selectedType}-${state.selectedGender}`;
      }
      return resultRobotStatus;
    },

    productionButtonStatus(state) {
      state.readyDetails =
        state.details.readyBiohandDetails +
        state.details.readyMicrochipDetails +
        state.details.readySoulDetails;

      if (state.readyDetails === 9) {
        state.produceButtonDisabled = false;
      } else {
        state.produceButtonDisabled = true;
      }
      return state.produceButtonDisabled;
    },

    textCased(state) {
      let biohandCased = '';
      let microchipCased = '';
      let soulCased = '';
      let money = '';
      let textCased = [];

      if (state.details.readyBiohandDetails === 3) {
        biohandCased = `${4 - state.details.readyBiohandDetails} биоруки`;
        textCased.push(biohandCased);
      } else if (state.details.readyBiohandDetails >= 0 && state.details.readyBiohandDetails < 4) {
        biohandCased = `${4 - state.details.readyBiohandDetails} биорук`;
        textCased.push(biohandCased);
      }
      if (state.details.readyMicrochipDetails === 3) {
        microchipCased = `${4 - state.details.readyMicrochipDetails} микрочипа`;
        textCased.push(microchipCased);
      } else if (
        state.details.readyMicrochipDetails >= 0 &&
        state.details.readyMicrochipDetails < 4
      ) {
        microchipCased = `${4 - state.details.readyMicrochipDetails} микрочипов`;
        textCased.push(microchipCased);
      }

      if (state.details.readySoulDetails === 0) {
        soulCased = `${1 - state.details.readySoulDetails} души`;
        textCased.push(soulCased);
      }

      if (state.money < 10) {
        money = 'монет';
        textCased.push(money);
      }

      if (textCased.length === 1
      ) {
        textCased = textCased.slice(0, 1).join();
      } else {
        textCased = [textCased.slice(0, -1).join(' , '), textCased.at(-1)].join(' и ');
      }
      return textCased;
    },
  },

  mutations: {
    addMoney(state) {
      if (state.checked && state.money < 96) {
        state.money += 5;
      } else if (state.checked && state.money + 5 > 100) {
        state.modalVisible = true;
      }
      if (!state.checked && state.money < 100) {
        state.money += 1;
      } else if (!state.checked && state.money >= 100) {
        state.modalVisible = true;
      }
      return state.money;
    },

    getFive(state) {
      state.checked = !state.checked;
      return state.checked;
    },

    // Первая страница

    buyBiohand(state) {
      state.biohand += 1;
      state.money -= state.biohandCost;
      return [state.biohand, state.money];
    },

    buyMicrochip(state) {
      state.microchip += 1;
      state.money -= state.microchipCost;
      return [state.microchip, state.money];
    },

    buySoul(state) {
      state.soul += 1;
      state.money -= state.soulCost;
      return [state.soul, state.money];
    },

    // Вторая страница

    sellBiohand(state) {
      if (state.money + state.biohandSellCost < 100) {
        state.biohand -= 1;
        state.money += state.biohandSellCost;
      } else state.modalVisible = true;

      return [state.biohand, state.money];
    },

    sellMicrochip(state) {
      if (state.money + state.microchipSellCost < 100) {
        state.microchip -= 1;
        state.money += state.microchipSellCost;
      } else state.modalVisible = true;

      return [state.microchip, state.money];
    },

    sellSoul(state) {
      if (state.money + state.soulSellCost < 100) {
        state.soul -= 1;
        state.money += state.soulSellCost;
      } else state.modalVisible = true;
      return [state.soul, state.money];
    },

    // Третья страница

    changeType(state, type) {
      state.selectedType = type;
    },

    changeGender(state, gender) {
      state.selectedGender = gender;
    },

    installBiohandDetail(state, detail) {
      if (state.biohand > 0 && state.details[detail.name] !== true) {
        state.details[detail.name] = true;
        state.biohand -= 1;
        state.details.readyBiohandDetails += 1;
      } else if (state.details[detail.name] > 0) {
        state.details[detail.name] = false;
        state.biohand += 1;
        state.details.readyBiohandDetails -= 1;
      }
      console.log(state.details.readyBiohandDetails);
    },
    installMicrochipDetail(state, detail) {
      if (state.microchip > 0 && state.details[detail.name] !== true) {
        state.details[detail.name] = true;
        state.microchip -= 1;
        state.details.readyMicrochipDetails += 1;
      } else if (state.details[detail.name] > 0) {
        state.details[detail.name] = false;
        state.microchip += 1;
        state.details.readyMicrochipDetails -= 1;
      }
      console.log(state.details.readyMicrochipDetails);
    },

    installSoulDetail(state, detail) {
      if (state.soul > 0 && state.details[detail.name] !== true) {
        state.details[detail.name] = true;
        state.soul -= 1;
        state.details.readySoulDetails += 1;
      } else if (state.details[detail.name] > 0) {
        state.details[detail.name] = false;
        state.soul += 1;
        state.details.readySoulDetails -= 1;
      }
      console.log(state.details.readySoulDetails);
    },

    productionRobot(state) {
      state.produceButtonDisabled = true;
      state.money -= 10;
      Object.keys(state.details).forEach((detail) => {
        console.log(state.details[detail]);
        state.details[detail] = false;
      });
      state.productionRobotStatus = true;
    },

    hideRobotmodal(state) {
      state.productionRobotStatus = false;
    },

    hideMoneyModal(state) {
      state.modalVisible = false;
    },
  },
  actions: {},
  modules: {},
});
