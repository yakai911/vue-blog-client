<template>
  <div class="form-container">
    <form class="sign-form" @submit.prevent="register(name, email, password)">
      <div>
        <label for="name">用户名</label>
        <input type="text" v-model="user.name" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="eamil" v-model="user.email" />
      </div>
      <div>
        <label for="password">密码</label>
        <input type="password" v-model="user.password" />
      </div>
      <button type="submit">注册</button>
    </form>
    <div>
      <p>name:{{ user.name }}</p>
      <p>email:{{ user.email }}</p>
      <p>password:{{ user.password }}</p>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useMutation, useQuery, useResult } from "@vue/apollo-composable";
import listUserQuery from "../../graphql/listUser.query.gql";
import registerMutation from "../../graphql/register.mutation.gql";

export default {
  name: "register",
  setup() {
    const user = reactive({
      name: "",
      email: "",
      password: "",
    });

    const { result } = useQuery(listUserQuery);
    const users = useResult(result, null, (data) => data.users);

    const { mutate: register } = useMutation(registerMutation, () => ({
      variables: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
      update: (store, { data: { register } }) => {
        const data = store.readQuery({ query: listUserQuery });
        updatedData = data.users.concat(register);
        store.writeQuery({
          query: listUserQuery,
          data: { users: updatedData },
        });
      },
    }));

    return { users, user, register };
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  background: chocolate;
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
