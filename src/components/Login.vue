// components/Login.vue

<template>
  <div>
    <form @submit.prevent="login">
      <label for="username">
        Username :
        <input type="text" id="username" v-model="username" />
      </label>
      <br />
      <label for="password">
        Password :
        <input type="password" id="password" v-model="password" />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import store from '../store/index.js'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      // Vuex 스토어로부터 로그인 액션을 호출하여 사용자 정보를 전달합니다.
      store
        .dispatch('login', {
          username: this.username,
          password: this.password
        })
        .then((response) => {
          // 응답을 받아 로그인이 성공했는지 여부를 확인합니다.
          if (response.success) {
            // 로그인이 성공했을 경우 로직을 추가할 수 있습니다.
            alert('로그인 성공!')
            window.close()
          } else {
            // 로그인이 실패했을 경우 처리할 로직을 추가할 수 있습니다.
            alert('로그인 실패: ' + response.message)
          }
        })
        .catch((error) => {
          // 오류가 발생했을 경우 처리합니다.
          alert('로그인 실패: ' + error.message)
        })
    }
  }
}
</script>

<style></style>
