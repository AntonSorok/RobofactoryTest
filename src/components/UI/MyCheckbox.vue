<template>
  <div>
    <label class="typeField" for="frontend">
      <input
        class="radiobtn"
        id="frontend"
        type="radio"
        :value="'frontend'"
        :name="biorobots"
        v-model="type"
        checked
        @change="changeType"
      /><slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'my-checkbox',
};
</script>

<style lang="scss" scoped>
.typeField {
  display: flex;
  gap: 12px;
}

.radiobtn + label {
  position: relative;
  padding: 0 0 0 30px;
  cursor: pointer;
  padding-left: 50px;
}
.radiobtn + label:before {
  content: ' ';
  position: absolute;
  top: 0 px;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #a3b8cc;
  background: transparent;
}
.radiobtn + label:after {
  content: ' ';
  position: absolute;
  top: 7px;
  left: 5px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ff7f22;
  opacity: 0;
}
.radiobtn:checked + label:after {
  opacity: 1;
}
</style>
