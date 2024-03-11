<template>
  <div class="Main">
    <div class="Header">
      <img src="../assets/logo.png" alt="Logo">
      <h1>{{ msg }}</h1>
      <button class="login" @click="openLoginWindow">로그인</button>
      <button class="sign"  @click="openSignWindow">회원가입</button>
    </div>

    <div class="Body">
      <div class="Sidebar">
        <select class="sel1" v-model="selectedComponent">
          <option value="" selected hidden>선택해주세요</option>
          <option value="Component1">색인추가</option>
          <option value="데이터조회">데이터조회</option>
          <option value="스키마">스키마</option>
          <option value="검색설정">검색설정</option>
          <option value="설정">설정</option>
        </select>
      </div>

      <div class="Section">
        <!-- 조건부 렌더링 -->
        <Component1 v-if="selectedComponent === 'Component1'" @connect-clicked="showComponent2" />
        <Component2 v-else-if="selectedComponent === 'Component2'" :formData="component1Data" />
      </div>
    </div>
  </div>
</template>

<script>
import Component1 from './Component1.vue'
import Component2 from './Component2.vue'

export default {
  name: 'Main',
  data () {
    return {
      msg: 'Vue 페이지',
      selectedComponent: '',
      component1Data: {} // Component1에서 전달된 데이터 저장
    }
  },
  components: {
    Component1,
    Component2
  },
  methods: {
    showComponent2 (data) {
      this.component1Data = data // Component1에서 받은 데이터 저장
      this.selectedComponent = 'Component2' // Component2 표시
    },
    openSignWindow () {
      window.open('/sign', '_blank', 'width=600,height=600')
    },

    openLoginWindow () {
      window.open('/login', '_blank', 'width=600,height=600')
    }
  }
}
</script>

<style scoped>
.Main {
  width: 100%;
  height: 100%;
}

.Body {
  display: flex;
}

.Header {
  display: flex;
  border: 1px solid black;
  width: 100%;
  height: 162px;
  background-color: #D9D9D9;
  text-align: center;
  font-size: 30px;
}

img {
  width: 162px;
  height: 162px;
  border: 1px solid black;
}

h1 {
  text-align: center;
  margin: 0 auto;
  line-height: 162px;
}

.Section {
  width: 1600px;
  height: 800px;
  background-color: #D9D9D9;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 25px;
}

.Sidebar {
  width: 163px;
  height: 858px;
  background-color: #6b6a6a;
  border: 1px solid black;
  text-align: center;
}

.sel1 {
  width: 90%;
  height: 40px;
  font-size: 16px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #D9D9D9;
}

.login {
  width: 70px;
  height: 50px;
  text-align: center;
  margin-top: 10px;
  margin-right: 10px;
}

.sign {
  width: 70px;
  height: 50px;
  text-align: center;
  margin-top: 10px;
  margin-right: 10px;
}
</style>
