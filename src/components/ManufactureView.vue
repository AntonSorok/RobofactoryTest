<template>
  <article class="manufacture">
    <div class="route"><p class="route__count">05</p></div>
    <div class="production">
      <h2 class="production_title">Производство</h2>
      <div class="production_block">
        <TypeChanger class="typeChanger"></TypeChanger>
        <ConctuctorView class="constructorView"></ConctuctorView>
        <DetailsResult class="detailsResult"></DetailsResult>
        <my-button
          :disabled="productionButtonStatus === true || money < 10"
          class="btn manufacture_btn"
          @click="productionRobot"
          >Произвести за 10 монет
        </my-button>
        <div class="manufacture_text">
          <p v-if="productionButtonStatus === false && money >= 10" class="constructor_info">
            Все готово для производста робота
          </p>
          <p v-else class="constructor_info">
            Для производства биоробота не хватает {{ textCased }}
          </p>
        </div>
      </div>
    </div>
    <!-- <h2 class="production__title">Производство</h2>
    <div class="production_section">
      <div class="production_section_input">
        <div class="production_section_input_type">
          <p class="production_section_input_type__title">Тип биоробота:</p>
          <div class="production_section_type_submit">
            <div class="production_section_type_submit-frontend">
              <label class="production_section_type__title-frontend"></label>
            </div>
          </div>
        </div>
      </div>
     </div> -->
  </article>
</template>

<script>
import TypeChanger from '@/components/TypeChanger.vue';
import ConctuctorView from '@/components/ConstructorView.vue';
import DetailsResult from '@/components/DetailsResult.vue';
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'ManufactureView',
  components: {
    TypeChanger,
    ConctuctorView,
    DetailsResult,
  },
  computed: {
    ...mapState(['money', 'produceButtonDisabled', 'readyDetails']),
    ...mapGetters(['productionButtonStatus', 'textCased']),
  },
  methods: mapMutations(['productionRobot']),
};
</script>

<style lang="scss" scoped>
.manufacture {
  max-width: 1016px;
  width: 100%;

  box-sizing: border-box;

  padding-bottom: 100px;
  margin: 0 auto;

  display: flex;

    &_text {
    grid-area: 3 / 3 / 4 / 4;
    width: 195px;
    height: 48px;
  }
}

.production_title {
  height: 72px;
  padding-bottom: 60px;
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

.production_block {
  display: grid;
  grid-template-columns: (1fr 25px 1fr 39px 1fr);
  grid-template-rows: (1fr 75px 1fr);

  // display: flex;
  // flex-wrap: wrap;
  // justify-content: center;
}

.typeChanger {
  grid-area: 1 / 1 / 2 / 2;
}

.constructorView {
  grid-area: 1 / 3 / 2 / 4;
}
.detailsResult {
  grid-area: 1 / 5 / 4 / 6;
}

.manufacture_btn {
  grid-area: 3 / 1 / 4 / 2;
}

.btn {
  background: transparent;
  border: 2px solid #ff7f22;
  filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.16));
  border-radius: 60px;

  // margin-top: 77px;

  &:hover {
    background: #ff5722;
    border: 0px;
  }

  &:active {
    background: #ff7f22;
    border: 0px;
  }

  &:disabled {
    background: transparent;
    border: 2px solid #4c5865;
    color: #4c5865;
  }
}

.constructor_info {
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}

@media (max-width: 1919px) and (min-width: 1024px) {
  .route {
    display: none;
  }
  .manufacture {
    max-width: 757px;
    width: 100%;
  }
}

@media (max-width: 1023px) and (min-width: 768px) {
  .route {
    display: none;
  }
  .manufacture {
    max-width: 496px;
    width: 100%;
  }

  .production_block {
    display: grid;
    grid-template-columns: 1fr 38px 1fr;
    grid-template-rows: 1fr 40px 1fr 20px auto 20px auto;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  .typeChanger {
    grid-area: 1 / 1 / 2 / 2;
  }

  .constructorView {
    grid-area: 3 / 1 / 4 / 2;
  }
  .detailsResult {
    grid-area: 1 / 3 / 8 / 4;
  }

  .manufacture_btn {
    grid-area: 5 / 1 / 6 / 2;
  }
  .manufacture_text {
    grid-area: 7 / 1 / 8 / 2;
  }
}
@media (max-width: 767px) and (min-width: 320px) {
  .route {
    display: none;
  }
  .manufacture {
    max-width: 236px;
    width: 100%;
  }
  .production_title {
    text-align: center;
  }

  .production_block {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 30px auto 40px auto 20px auto 20px auto;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  .typeChanger {
    grid-area: 3 / 1 / 4 / 2;
  }

  .constructorView {
    grid-area: 5 / 1 / 6 / 2;
  }
  .detailsResult {
    grid-area: 1 / 1 / 2 / 2;
  }

  .manufacture_btn {
    grid-area: 7 / 1 / 8 / 2;
  }
  .manufacture_text {
    grid-area: 9 / 1 / 10 / 2;
  }
}
</style>
