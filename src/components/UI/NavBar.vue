<template>
  <nav class="nav">
    <div class="nav_logo">
      <a href="#">
        <img class="logo" src="@/assets/Logo.svg" alt="logo" />
      </a>
    </div>
    <my-button class="nav-btn">Произвести биоробота</my-button>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="scss" scoped>
.nav {
  max-width: 1016px;
  width: 100%;
  height: 48px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;

  padding-bottom: 96px;
  padding-top: 48px;
  margin: 0 auto;

  &_logo{
    width: 78px;
    height: 48px;

  }
}

.nav-btn {
  background-color: transparent;
  border: 2px solid #ff7f22;
  filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.16));

  &:hover {
    background: #ff5722;
    border: 0px;
  }

  &:active {
    background: #ff7f22;
    border: 0px;
  }
}

.logo {
  width: 78px;
  height: 48px;
  background-size: cover;
  background-repeat: no-repeat;
}
@media (max-width: 1919px) and (min-width: 1024px) {
  .nav {
    max-width: 757px;
    width: 100%;
  }
}

@media (max-width: 1023px) and (min-width: 768px) {
  .nav {
    max-width: 496px;
    width: 100%;
  }
}

@media (max-width: 767px) and (min-width: 320px) {
  .nav {
    max-width: 236px;
    width: 100%;

    &_logo{
      display: none;
    }
  }
}
</style>
