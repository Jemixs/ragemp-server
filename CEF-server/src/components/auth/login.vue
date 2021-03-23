<template>
  <div v-if="visible" class="h-100">
    <div class="col-12 h-100">
      <div class="content">
        <div class="login">
          <div class="logo"></div>
          <div class="title">AUTHORIZATION</div>
          <div class="error" v-if="error"><i class="ico"></i> {{ error }}</div>
          <div class="form">
            <div class="name">
              <input
                type="text"
                v-model="login"
                name=""
                id=""
                placeholder="Nick name"
                required
              />
            </div>
            <div class="pass">
              <input
                type="password"
                v-model="password"
                name=""
                id=""
                placeholder="Password"
                required
              />
            </div>
            <button v-on:click="auth" class="enterBtn">
              <div class="back"></div>
              LOGIN
            </button>
          </div>
          <div class="other">
            <a href="" class="reg">Registration</a>
            <a href="" class="forgot">Forgot password?</a>
          </div>
          <div class="soc_link">
            <span class="discord icon"></span>
            <span class="vk icon"></span>
          </div>
          <div class="footer">
            <p>© 2021 - THE RAGE:MULTIPLAYER TEAM!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      visible: true,
      error: false,
      login: "",
      password: "",
    };
  },
  methods: {
    auth: function () {
      try {
        let login = this.login;
        let password = this.password;

        if (login.length < 4 || password.length < 8) {
          this.error = "Login or password incorrect";
          return false;
        }

        mp.trigger("AUTH::CHECK_AUTH", login, password);
      } catch (e) {
        console.error(e);
      }
    },
    errors: function (err) {
      this.error = err;
    },
    hide: function (state) {
      this.visible = state;
    },
  },
  computed: {},
  created() {
    window.auth = this;
  },
};
</script>

<style lang="scss">
.content {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .login {
    position: relative;
    color: #fff;
    width: 400px;
    height: 500px;
    background: url("~@/assets/background.png") center no-repeat;
    box-shadow: 0 0 20px 4px rgba($color: #3a3a3acc, $alpha: 0.8);
    text-align: center;

    .error {
      position: absolute;
      display: flex;
      width: 100%;
      justify-content: center;
      color: red;
      font-size: 14px;
      text-shadow: 0 0 20px #ff0000;
      margin-top: 10px;

      .ico::after {
        content: "";
        display: block;
        background-image: url("~@/assets/error.png");
        background-size: 22px 22px;
        width: 22px;
        height: 22px;
        margin-right: 5px;
      }
    }

    .logo {
      display: flex;
      width: 100%;
      justify-content: center;

      &::before {
        content: "";
        display: block;
        background-image: url("~@/assets/logo.png");
        background-size: 108px 106px;
        width: 108px;
        height: 106px;
      }
    }

    .title {
      font-size: 21px;
      font-weight: 300;
      text-transform: uppercase;
      color: #edb82b;
      letter-spacing: 4px;
    }

    .form {
      margin: 60px 0 0;
      text-align: center;

      div {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;

        input {
          width: 250px;
          outline: none;
          border: none;
          padding: 7px;
          background-color: rgba($color: #0510154d, $alpha: 0.6);
          border-radius: 3px;
          color: #d6d6d6;
          font-size: 15px;
        }
      }
    }

    .enterBtn {
      position: relative;
      outline: none;
      border: 1px solid #333333;
      text-transform: uppercase;
      font-size: 14px;
      padding: 0;
      background: url("~@/assets/btn-login.png") center no-repeat;
      //padding: 3px 30px;
      color: #edb82b;
      font-weight: 300;
      transition: 0.2s all;
      width: 113px;
      height: 34px;
      letter-spacing: 2px;

      .back {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        margin: 0;
        transition: .2s all;
        bottom: 0;

        &:hover {
          background-color: rgba($color: #ffcc3d12, $alpha: .07);
        }
      }
    }

    .other {
      margin-top: 15px;

      a {
        display: block;
        text-decoration: none;
        color: #7b7b7b;
        font-size: 14px;
        transition: 0.2s all;

        &:hover {
          color: #dcac2d;
        }
      }

      .reg {
        font-size: 15px;
      }

      .forgot {
        font-size: 14px;
        color: #4e4e4e;
      }
    }

    .soc_link {
      display: flex;
      justify-content: center;
      margin-top: 20px;

      .discord {
        &::after {
          content: "";
          display: block;
          background-image: url("~@/assets/discord.png");
          background-size: 26px 29px;
          width: 26px;
          height: 29px;
        }
      }

      .vk {
        &::after {
          content: "";
          display: block;
          background-image: url("~@/assets/vk.png");
          background-size: 45px 27px;
          width: 45px;
          height: 27px;
        }
      }

      .icon {
        margin-right: 10px;
      }
    }

    .footer {
      position: absolute;
      bottom: -13px;
      padding: 0 0 0 5px;
      font-size: 8px;
      color: #555555;
    }
  }
}
</style>