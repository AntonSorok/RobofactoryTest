<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="fabrictaion-container">
    <div class="fab-blocks-container">
      <div class="fab-block-wrapper">
        <div class="changers-container">
          <div class="changer">
            <div class="changer__title changer__title-title">Тип биоробота:</div>
            <div class="changer__switches-container">
              <div class="switch-wrapper" @click="switchType('front')">
                <div :class="{ switch: type === 'front' }"></div>
              </div>
              <div class="changer__case changer__case-text">FrontEnd</div>
              <div class="switch-wrapper" @click="switchType('design')">
                <div :class="{ switch: type === 'design' }"></div>
              </div>
              <div class="changer__case changer__case-text">Design</div>
            </div>
          </div>
          <div class="changer">
            <div class="changer__title changer__title-title">Стабилизатор:</div>
            <div class="changer__switches-container">
              <div class="switch-wrapper" @click="switchGender('male')">
                <div :class="{ switch: gender === 'male' }"></div>
              </div>
              <div class="changer__case changer__case-text">Male</div>
              <div class="switch-wrapper" @click="switchGender('female')">
                <div :class="{ switch: gender === 'female' }"></div>
              </div>
              <div class="changer__case changer__case-text">Female</div>
            </div>
          </div>
        </div>
      </div>
      <div class="fab-block-wrapper">
        <div class="required-parts">
          <div class="required-parts__parts-container">
            <div class="required-parts__part-wrapper"><BiohandPart /></div>
            <div class="required-parts__part-wrapper"><BiohandPart /></div>
            <div class="required-parts__part-wrapper"><BiohandPart /></div>
            <div class="required-parts__part-wrapper"><BiohandPart /></div>
          </div>
          <div class="required-parts__parts-container">
            <div class="required-parts__part-wrapper"><MicrochipPart /></div>
            <div class="required-parts__part-wrapper"><MicrochipPart /></div>
            <div class="required-parts__part-wrapper"><MicrochipPart /></div>
            <div class="required-parts__part-wrapper"><MicrochipPart /></div>
          </div>
          <div class="required-parts__parts-container">
            <div class="required-parts__part-wrapper"><SoulPart /></div>
          </div>
        </div>
      </div>
      <div class="fab-block-wrapper">
        <div class="button-wrapper">
          <div
            class="button-main wd236 button-text"
            :class="fabButtonComputed"
            @click="status === 'available' ? fabricateRobot() : null"
          >
            Произвести за 10 монет
          </div>
        </div>
      </div>
      <div class="fab-block-wrapper">
        <div class="func-text-wrapper">
          <div class="functional-text">{{ funcText }}</div>
        </div>
      </div>
    </div>
    <div class="robot-preview">
      <div :class="gender + '-' + type + '-' + status"></div>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import BiohandPart from '@/components/BiohandPart.vue';
import MicrochipPart from '@/components/MicrochipPart.vue';
import SoulPart from '@/components/SoulPart.vue';

export default {
  name: 'FabricationModule',
  components: {
    BiohandPart,
    MicrochipPart,
    SoulPart,
  },
  computed: {
    fabButtonComputed() {
      return {
        'button-orange-wired': this.status === 'available',
        'button-disable-wired': this.status === 'blocked',
      };
    },
  },
  setup() {
    const store = useStore();
    return {
      type: computed(() => store.getters['fabrication/getType']),
      gender: computed(() => store.getters['fabrication/getGender']),
      status: computed(() => store.getters['fabrication/getStatus']),
      funcText: computed(() => store.getters['fabrication/getFuncText']),
      switchType: (type) => store.commit('fabrication/SWITCH_TYPE', type),
      switchGender: (gender) => store.commit('fabrication/SWITCH_GENDER', gender),
      fabricateRobot: () => store.dispatch('fabricateRobot'),
    };
  },
};
</script>
<style lang="scss" scoped>
@use '@/style/textstyles';
@use '@/style/sprites';
@use '@/style/buttonstyle';
@import '@/style/universalmixins';
.fabrictaion-container {
  display: flex;
  flex-direction: row;
  margin-top: 45px;
  @include mobile {
    margin: auto;
    flex-direction: column-reverse;
  }
  @include non-desktop {
    margin-top: 45px;
  }
  @include desktop {
    margin-left: 135px;
  }
}
.fab-blocks-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 520px;
}
.fab-block-wrapper {
  display: flex;
  margin-right: 24px;
  width: 236px;
  @include mobile {
    margin: auto;
  }
}
.changer {
  &__title {
    margin-top: 30px;
  }
  &__switches-container {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
  &__case {
    display: flex;
    align-items: center;
    margin-left: 12px;
    margin-right: 33px;
    min-width: 57px;
  }
}
.switch-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 2px solid #a3b8cc;
  border-radius: 100%;
  box-sizing: border-box;
  margin-left: 4px;
  cursor: pointer;
}
.switch {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background: #ff7f22;
}
.required-parts {
  margin-top: 30px;
  &__parts-container {
    display: flex;
  }
  &__part-wrapper {
    width: 48px;
    height: 48px;
    margin-right: 10px;
    margin-bottom: 16px;
  }
}
.top-part-container {
  display: flex;
  flex-direction: row;
}
.button-wrapper {
  margin-top: 50px;
}
.func-text-wrapper {
  max-width: 195px;
  max-height: 48px;
  margin-top: 50px;
}
.robot-preview {
  width: 236px;
  height: 320px;
  @extend %mobile-margin;
  @include tablet-horizontal-width {
    position: absolute;
    @media only screen and (min-width: 1020px) and (max-width: 1320px) {
      right: 10%;
    }
    @media only screen and (min-width: 1321px) and (max-width: 1400px) {
      right: 20%;
    }
    @media only screen and (min-width: 1401px) {
      right: 25%;
    }
  }
}
</style>
