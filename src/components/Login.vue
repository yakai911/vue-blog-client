<template>
  <div class="form-container">
    <form class="sign-form" @submit.prevent="signIn(email, password)">
      <h2>登录</h2>
      <div>
        <label for="email">Email</label>
        <input type="eamil" v-model="user.email" />
      </div>
      <div>
        <label for="password">密码</label>
        <input type="password" v-model="user.password" />
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useMutation } from "@vue/apollo-composable";
import loginMutation from "../../graphql/login.mutation.gql";

export default {
  name: "Login",
  setup() {
    const user = reactive({
      email: "",
      password: "",
    });

    const token = ref("");

    const { mutate: login } = useMutation(loginMutation, () => ({
      variables: {
        email: user.email,
        password: user.password,
      },
    }));

    async function signIn(email, password) {
      const res = await login(email, password);
      const token = res.data.login.accessToken;
      localStorage.setItem("token", token);
      console.log(token);
      user.email = "";
      user.password = "";
    }

    return { token, user, signIn };
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  background: white;
  margin: 150px 400px;
  display: flex;
  justify-content: center;
  padding: 25px;

  .sign-form {
    background: white;
    height: 550px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 auto;

    button {
      border-radius: 4px;
      background-color: #0879bf;
      height: 55px;
      color: white;
      text-align: center;
      display: inline-block;
      vertical-align: middle;
      width: 80%;
      cursor: pointer;
      font: 500 18px/54px Graphik;
      text-transform: none;
      max-width: 477px;
      border: none;
    }

    & div {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 30px;

      & label {
        font-size: 16px;
        color: #444;
        margin-bottom: 15px;
      }

      & input {
        height: 40px;
      }
    }
  }
}
</style>
