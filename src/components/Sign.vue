<template>
  <div>
    <form @submit.prevent="sign">
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
      <button type="submit">Sign</button>
    </form>
  </div>
</template>

<script>
import store from '../store/index.js'

export default {
  name: 'SignUp',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    sign () {
      // 사용자 정보를 Vuex 스토어에 전달하여 저장합니다.
      store.dispatch('sign', {
        username: this.username,
        password: this.password
      })
      alert('회원가입되었습니다')
      window.close()
    }
  }
}
</script>

<style></style>
