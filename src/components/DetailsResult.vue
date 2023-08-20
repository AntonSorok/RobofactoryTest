<template>
  <div :class="getResultRobot" class="result"></div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({}),
  computed: mapGetters(['getResultRobot']),
};
</script>

<style lang="scss">
.result {
  background: url('../assets/production-sprite.png');
  width: 236px;
  height: 320px;
}
.frontend-male {
  background-position: 0px 0px;
}
.frontend-male-available {
  background-position: -230px 0px;
}
.frontend-male-ready {
  background-position: -470px 0px;
}

.frontend-female {
  background-position: -708px 10px;
}
.frontend-female-available {
  background-position: -935px 10px;
}
.frontend-female-ready {
  background-position: -1180px 10px;
}

.design-male {
  background-position: -2124px 0px;
}
.design-male-available {
  background-position: -2355px 0px;
}
.design-male-ready {
  background-position: -2585px 0px;
}

.design-female {
  background-position: -1416px 10px;
}
.design-female-available {
  background-position: -1655px 10px;
}
.design-female-ready {
  background-position: -1900px 10px;
}
</style>
