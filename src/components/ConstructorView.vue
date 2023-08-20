<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- Здесь будут детали -->
<template>
  <div class="constructor">
    <div class="constructor_parts">
      <div class="constructor_parts__icon" @click="installBiohandDetail({ name: 'biohand1' })">
        <div
          class="constructor_parts__biohand"
          :class="{ active: details.biohand1, disable: biohand < 1 && !details.biohand1 }"
        ></div>
      </div>
      <div class="constructor_parts__icon" @click="installBiohandDetail({ name: 'biohand2' })">
        <div
          class="constructor_parts__biohand"
          :class="{ active: details.biohand2, disable: biohand < 1 && !details.biohand2 }"
        ></div>
      </div>
      <div class="constructor_parts__icon" @click="installBiohandDetail({ name: 'biohand3' })">
        <div
          class="constructor_parts__biohand"
          :class="{ active: details.biohand3, disable: biohand < 1 && !details.biohand3 }"
        ></div>
      </div>
      <div class="constructor_parts__icon" @click="installBiohandDetail({ name: 'biohand4' })">
        <div
          class="constructor_parts__biohand"
          :class="{ active: details.biohand4, disable: biohand < 1 && !details.biohand4 }"
        ></div>
      </div>
      <div class="constructor_parts__icon" @click="installMicrochipDetail({ name: 'microchip1' })">
        <div
          class="constructor_parts__microchip"
          :class="{ active: details.microchip1, disable: microchip < 1 && !details.microchip1 }"
        ></div>
      </div>
      <div class="constructor_parts__icon" @click="installMicrochipDetail({ name: 'microchip2' })">
        <div
          class="constructor_parts__microchip"
          :class="{ active: details.microchip2, disable: microchip < 1 && !details.microchip2 }"
        ></div>
      </div>
      <div class="constructor_parts__icon" @click="installMicrochipDetail({ name: 'microchip3' })">
        <div
          class="constructor_parts__microchip"
          :class="{ active: details.microchip3, disable: microchip < 1 && !details.microchip3 }"
        ></div>
      </div>
      <div class="constructor_parts__icon" @click="installMicrochipDetail({ name: 'microchip4' })">
        <div
          class="constructor_parts__microchip"
          :class="{ active: details.microchip4, disable: microchip < 1 && !details.microchip4 }"
        ></div>
      </div>
      <div class="constructor_parts__icon" @click="installSoulDetail({ name: 'soul' })">
        <div
          class="constructor_parts__soul"
          :class="{ active: details.soul, disable: soul < 1 && !details.soul }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data: () => ({}),
  computed: {
    ...mapState(['details', 'biohand', 'microchip', 'soul']),
  },
  methods: mapMutations(['installBiohandDetail', 'installMicrochipDetail', 'installSoulDetail']),
};
</script>

<style lang="scss" scoped>
.constructor {
  display: flex;
  flex-direction: column;

  width: 236px;

    &_info{
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
    }

    &_parts{
      width: auto;
      height: auto;

      display: flex;
      flex-wrap: wrap;

      gap: 10px;

      &__icon{
        width: 48px;
        height: 48px;

        border-radius: 4px;
        background: #333940;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      &__biohand {
        width: 36px;
        height: 24px;
        box-sizing: border-box;

        mask-image: url('../assets/tech-mini.svg');
        mask-repeat: no-repeat;
        mask-position: center center;
        background: #ffffff;
      }

        &__microchip {
        width: 24px;
        height: 24px;

        mask-image: url('../assets/microchip-mini.svg');
        mask-repeat: no-repeat;
        mask-position: center center;
        background: #ffffff;
    }

      &__soul {
        width: 32px;
        height: 32px;

        mask-image: url('../assets/soul-mini.svg');
        mask-repeat: no-repeat;
        mask-position: center center;
        background: #ffffff;
    }
  }

  &_info{
    font-size: 12px;
    line-height: 16px;
  }
}

// .constructor_info {
//   font-size: 12px;
//   font-weight: 500;
//   line-height: 16px;
// }
// .constructor_parts {
//   display: flex;
//   width: auto;
//   height: auto;
//   flex-wrap: wrap;
//   gap: 10px;
// }

// .constructor_parts__icon {
//   width: 48px;
//   height: 48px;

//   border-radius: 4px;
//   background: #333940;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .constructor_parts__biohand {
//   width: 36px;
//   height: 24px;
//   box-sizing: border-box;

//   mask-image: url('../assets/tech-mini.svg');
//   mask-repeat: no-repeat;
//   mask-position: center center;
//   background: #ffffff;
// }

// .constructor_parts__microchip {
//   width: 24px;
//   height: 24px;

//   mask-image: url('../assets/microchip-mini.svg');
//   mask-repeat: no-repeat;
//   mask-position: center center;
//   background: #ffffff;
// }

// .constructor_parts__soul {
//   width: 32px;
//   height: 32px;

//   mask-image: url('../assets/soul-mini.svg');
//   mask-repeat: no-repeat;
//   mask-position: center center;
//   background: #ffffff;
// }

.disable {
  background: #4c5865;
}

.active {
  background: #ff7f22;
  border: 2px solid #ff7f22;
}

// .constructor_info {
//   font-size: 12px;
//   line-height: 16px;
// }
</style>
