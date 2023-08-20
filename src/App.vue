<template>
  <div id="app">
    <NavBar></NavBar>
    <WelcomeView></WelcomeView>
    <CryptoView></CryptoView>
    <ShopView></ShopView>
    <StorageView></StorageView>
    <ManufactureView></ManufactureView>
    <modalView></modalView>
    <RobotStatus></RobotStatus>
  </div>
</template>

<script>
import NavBar from '@/components/UI/NavBar.vue';
import WelcomeView from '@/components/WelcomeView.vue';
import CryptoView from '@/components/CryptoView.vue';
import ShopView from '@/components/ShopView.vue';
import StorageView from '@/components/StorageView.vue';
import ManufactureView from '@/components/ManufactureView.vue';
import modalView from '@/components/UI/modalView.vue';
import RobotStatus from '@/components/UI/RobotStatus.vue';

export default {
  data: () => ({}),
  components: {
    NavBar,
    WelcomeView,
    CryptoView,
    ShopView,
    StorageView,
    ManufactureView,
    modalView,
    RobotStatus,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

h1 {
  font-weight: 600;
  font-size: 56px;
  line-height: 72px;
  color: #ffffff;
}

h2 {
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
}
h3 {
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #ffffff;
}
p {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #a3b8cc;
}

a {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ff7f22;

  &:hover {
    color: #ff5722;
  }
  &:active {
    color: #ff7f22;
    text-decoration: none;
  }
  &:disabled {
    color: #4c5865;
  }
}

body {
  background: radial-gradient(82.33% 70.44% at 50% 0%, #26394d 0%, #212529 100%);

  font-family: 'Montserrat', sans-serif;
}

.btn {
  width: 236px;
  height: 48px;
  border-radius: 60px;
  box-sizing: border-box;

  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1919px) and (min-width: 1024px) {
  h1 {
    font-size: 48px;
    line-height: 56px;
  }

  h2 {
    font-size: 24px;
    line-height: 32px;
  }
  h3 {
    font-size: 18px;
    line-height: 24px;
  }

  p {
    font-size: 18px;
    line-height: 24px;
  }
}

@media (max-width: 1023px) and (min-width: 768px) {
  h1 {
    font-size: 32px;
    line-height: 40px;
  }
  h2 {
    font-size: 24px;
    line-height: 32px;
  }
  h3 {
    font-size: 18px;
    line-height: 24px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
  }
}

@media (max-width: 767px) and (min-width: 320px) {
  h1 {
    font-size: 28px;
    line-height: 32px;
  }

  h2 {
    font-size: 24px;
    line-height: 32px;
  }

  h3 {
    font-size: 18px;
    line-height: 24px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
