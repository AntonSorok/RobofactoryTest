<template>
  <article class="welcome">
    <div class="route">
      <p class="route__count">01</p>
      <p class="route__text">Скролл</p>
      <i class="route__arrow fa-solid fa-arrow-down"></i>
    </div>
    <div class="welcome_block">
      <div class="welcome_block_textbox">
        <h1 class="welcome_block_textbox__title">Фабрика по производству биороботов</h1>
        <p class="welcome_block_textbox__subtitle">класса «монитор-кресло»</p>
      </div>
    </div>
    <div class="welcome_block_image">
      <div class="welcome_block_image__circle"></div>
      <img class="welcome_block_image__blueRobot" src="../assets/blueRobot.svg" alt="blueRobot" />
      <img class="welcome_block_image__redRobot" src="../assets/redRobot.svg" alt="redRobot" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'WelcomePage',
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.welcome {
  max-width: 1016px;
  width: 100%;
  box-sizing: border-box;

  padding-bottom: 100px;
  margin: 0 auto;

  display: flex;

  &_block {
    display: flex;
    gap: 50px;

    &_textbox {
      max-width: 470px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 24px;
    }

    &_image {
      position: relative;
      display: flex;
      width: 366px;
      height: 320px;
      gap: 20px;

      &__blueRobot {
        width: 176px;
        z-index: 1;
      }

      &__redRobot {
        padding-top: 102px;
        width: 138px;
        transform: scale(-1, 1);
        z-index: 1;
      }
      &__circle {
        position: absolute;
        left: 31px;
        width: 275px;
        height: 275px;
        background-color: #1e2936;
        border-radius: 50%;
        z-index: 0;
      }
    }
  }
}
.route {
  width: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 22px;
  padding-top: 48px;
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
  }

  &__text {
    rotate: -90deg;
    padding-left: 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    color: #667380;
  }

  &__arrow {
    rotate: -90deg;
    color: #667380;
  }
}
@media (max-width: 1919px) and (min-width: 1024px) {
  .route {
    display: none;
  }
  .welcome {
    max-width: 757px;
    width: 100%;

    &_block {
      &_image {
        width: 236px;
        height: 206px;

        &__blueRobot {
          width: 113px;
          z-index: 1;
        }

        &__redRobot {
          padding-top: 102px;
          width: 126px;
          transform: scale(-1, 1);
          z-index: 1;
        }
        &__circle {
          position: absolute;
          left: 31px;
          width: 177px;
          height: 177px;
          background-color: #1e2936;
          border-radius: 50%;
          z-index: 0;
        }
      }
    }
  }
}

@media (max-width: 1023px) and (min-width: 768px) {
  .route {
    display: none;
  }
  .welcome {
    max-width: 496px;
    width: 100%;

    &_block {
      &_image {
        width: 236px;
        height: 206px;

        &__blueRobot {
          width: 113px;
          z-index: 1;
        }

        &__redRobot {
          padding-top: 102px;
          width: 126px;
          transform: scale(-1, 1);
          z-index: 1;
        }
        &__circle {
          position: absolute;
          left: 31px;
          width: 177px;
          height: 177px;
          background-color: #1e2936;
          border-radius: 50%;
          z-index: 0;
        }
      }
    }
  }
}

@media (max-width: 767px) and (min-width: 320px) {
  .route {
    display: none;
  }
  .welcome {
    max-width: 236px;
    width: 100%;

    flex-direction: column-reverse;
    align-items: center;

    &_block {
      &_textbox {
        &__title {
          text-align: center;
          padding-top: 30px;
        }
        &__subtitle {
          display: none;
        }
      }
      &_image {
        width: 236px;
        height: 206px;

        &__blueRobot {
          width: 113px;
          z-index: 1;
        }

        &__redRobot {
          padding-top: 102px;
          width: 126px;
          transform: scale(-1, 1);
          z-index: 1;
        }
        &__circle {
          position: absolute;
          left: 31px;
          width: 177px;
          height: 177px;
          background-color: #1e2936;
          border-radius: 50%;
          z-index: 0;
        }
      }
    }
  }
}
</style>
