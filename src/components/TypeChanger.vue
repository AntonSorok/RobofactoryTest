<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div>
    <div class="block">
      <div class="option">
        <div class="option_field">
          <p class="option_field__title">Тип биоробота:</p>
          <div class="option_field_type">
            <div class="option_field_type__choose">
              <label class="radio" for="frontend">
                <input
                  :checked="selectedType === 'frontend'"
                  class="radio-input"
                  id="frontend"
                  type="radio"
                  :name="biorobots"
                  @change="changeType('frontend')"
                />
                <span class="radio-fake"></span>

                <p class="subtitle">FrontEnd</p>
              </label>
            </div>
            <div class="option_field_type__choose">
              <label class="radio" for="design">
                <input
                  :checked="selectedType === 'design'"
                  class="radio-input"
                  id="design"
                  type="radio"
                  :name="biorobots"
                  @change="changeType('design')"
                />
                <span class="radio-fake"></span>

                <p class="subtitle">Design</p>
              </label>
            </div>
          </div>
        </div>
        <div class="option_field">
          <p class="option_field__title">Тип стабилизатора:</p>
          <div class="option_field_type">
            <div class="option_field_type__choose">
              <label class="radio" for="male">
                <input
                  :checked="selectedGender === 'male'"
                  class="radio-input"
                  id="male"
                  type="radio"
                  :name="stabilizer"
                  @change="changeGender('male')"
                />
                <span class="radio-fake"></span>

                <p class="subtitle">Male</p>
              </label>
            </div>
            <div class="option_field_type__choose">
              <label class="radio" for="female">
                <input
                  :checked="selectedGender === 'female'"
                  class="radio-input"
                  id="female"
                  type="radio"
                  :name="stabilizer"
                  @change="changeGender('female')"
                />
                <span class="radio-fake"></span>

                <p class="subtitle">Female</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'TypeChanger',
  data: () => ({}),
  computed: {
    ...mapState(['selectedType', 'selectedGender']),
  },
  methods: mapMutations(['changeType', 'changeGender']),
};
</script>

<style lang="scss" scoped>
.typeField {
  display: flex;
}

.block {
  width: 236px;

  // padding-right: 27px;
}
.option {
  display: flex;
  flex-direction: column;
  gap: 28px;

  &_field {
    &__title {
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
      padding-bottom: 16px;
    }
    &_type {
      display: flex;
      justify-content: space-between;
      height: 32px;
    }
  }
}
.subtitle {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #ffffff;
  margin-left: 12px;
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

.radio {
  display: flex;
  align-items: center;
}

.radio-input {
  display: none;
}

.radio-fake {
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 2px solid #a3b8cc;
  border-radius: 50%;
  position: relative;
}

.radio-fake::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 16px;
  height: 16px;
  background-color: #ff7f22;
  border-radius: 50%;
  transition: 0.2s;
  opacity: 0;
}

.radio-txt {
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  margin: 0 0 0 12px;
}

.radio-input:checked + .radio-fake::before {
  opacity: 1;
}
</style>
