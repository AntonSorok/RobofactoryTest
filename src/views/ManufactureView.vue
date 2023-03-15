<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="manufacture center">
    <div class="mainRoute">
      <p class="mainRoute__page">05</p>
    </div>
    <div class="production">
      <h2 class="production_title">Производство</h2>
      <div class="production_section">
        <div class="production_input">
          <div class="biorobots__type">
            <p class="biorobots__type_title">Тип биоробота:</p>
            <div class="biorobots__type_submit">
              <div class="biorobots__type_submit-frontEnd">
                <label class="biorobots__type_title-frontEnd" for="frontend">
                  <!-- id можно убрать -->
                  <input
                    class="radiobtn"
                    id="frontend"
                    type="radio"
                    :value="'frontend'"
                    :name="biorobots"
                    v-model="type"
                    checked
                    @change="changeType"
                  />FrontEnd
                </label>
              </div>
              <div class="biorobots__type_submit-design">
                <label class="biorobots__type_title-design" for="design">
                  <input
                    class="radiobtn"
                    id="design"
                    type="radio"
                    :value="'design'"
                    :name="biorobots"
                    v-model="type"
                    @change="changeType"
                  />Design
                </label>
              </div>
            </div>
          </div>
          <div class="stabilizer__type">
            <p class="stabilizer__type_title">Cтабилизатор:</p>
            <div class="stabilizer__type_submit">
              <div class="stabilizer__type_submit-male">
                <label class="stabilizer__type_title-male" for="male">
                  <input
                    class="radiobtn"
                    id="male"
                    type="radio"
                    :value="'male'"
                    :name="stabilizer"
                    v-model="gender"
                    checked
                    @change="changeGender"
                  />Male</label
                >
              </div>
              <div class="stabilizer__type_submit-female">
                <label class="stabilizer__type_title-female" for="female">
                  <input
                    class="radiobtn"
                    id="female"
                    type="radio"
                    :value="'female'"
                    :name="stabilizer"
                    v-model="gender"
                    @change="changeGender"
                  />Female
                </label>
              </div>
            </div>
          </div>
          <button class="production_input-buy button">Произвести за 10 монет</button>
        </div>
        <div class="production_materials">
          <div class="production_materials_icon">
            <div class="production_materials_icon-block">
              <div v-if="changeDisabled" class="production_materials_icon-block__biotech disabled">
                <div class="production_materials_icon-block__biotech"></div>
              </div>
              <div
                v-else
                :class="active"
                @click="biohands === 0 ? addBiohand : takeBiohand"
                class="production_materials_icon-block__biotech"
              >
                <div class="production_materials_icon-block__biotech"></div>
              </div>
            </div>
            <div class="production_materials_icon-block">
              <div v-if="changeDisabled" class="production_materials_icon-block__biotech disabled">
                <div class="production_materials_icon-block__biotech"></div>
              </div>
              <div
                v-else
                :class="active"
                @click="biohands === 0 ? addBiohand : takeBiohand"
                class="production_materials_icon-block__biotech"
              >
                <div class="production_materials_icon-block__biotech"></div>
              </div>
            </div>
            <div class="production_materials_icon-block">
              <div class="production_materials_icon-block__biotech"></div>
            </div>
            <div class="production_materials_icon-block">
              <div class="production_materials_icon-block__biotech"></div>
            </div>
            <div class="production_materials_icon-block">
              <div class="production_materials_icon-block__microchip"></div>
            </div>
            <div class="production_materials_icon-block">
              <div class="production_materials_icon-block__microchip"></div>
            </div>
            <div class="production_materials_icon-block">
              <div class="production_materials_icon-block__microchip"></div>
            </div>
            <div class="production_materials_icon-block">
              <div class="production_materials_icon-block__microchip"></div>
            </div>
            <div class="production_materials_icon-block">
              <div class="production_materials_icon-block__soul"></div>
            </div>
          </div>
          <p class="production_materials__text">
            Для производства биоробота не хватает 2 биоруки, 3 микрочипа и 1 души
          </p>
        </div>
        <div :class="getResult" class="production_result"></div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
  data: () => ({
    type: '',
    gender: '',
  }),
  computed: {
    ...mapState(['biotech', 'biohands', 'active', 'isDisabled']),
    ...mapGetters(['getType', 'getGender', 'getResult', 'changeDisabled']),
    ...mapActions(['getPart']),
    ...mapMutations(['takeBiohand', 'addBiohand']),
  },
  methods: {
    changeType() {
      this.$store.commit('switchType', this.type);
    },
    changeGender() {
      this.$store.commit('switchGender', this.gender);
    },
  },
};
</script>

<style scoped>
.frontend-male {
  background-position: 0px 0px;
}
.frontend-female {
  background-position: -708px 10px;
}

.design-male {
  background-position: -2124px 0px;
}
.design-female {
  background-position: -1416px 10px;
}

.disabled {
  background-color: rgb(44, 44, 44);
}

.avaliable {
  background-color: rgb(219, 219, 219);
}
.active {
  background-color: rgb(255, 102, 0);
}
</style>
