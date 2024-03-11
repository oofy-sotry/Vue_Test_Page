import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 로컬 스토리지에서 사용자 정보를 가져오는 함수
function getUserFromLocalStorage () {
  const userData = localStorage.getItem('user')
  return userData ? JSON.parse(userData) : { username: null, password: null }
}

export default new Vuex.Store({
  state: {
    user: getUserFromLocalStorage() // 초기 상태를 로컬 스토리지에서 가져온 사용자 정보로 설정
  },
  mutations: {
    // 사용자 정보를 저장하는 뮤테이션
    setUser (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData)) // 로컬 스토리지에 사용자 정보 저장
      console.log('사용자 정보가 저장되었습니다:', userData)
    }
  },
  actions: {
    // 사용자 정보를 설정하는 액션
    sign ({ commit }, userData) {
      // 여기에서는 간단히 사용자 정보를 저장하고 뮤테이션을 호출합니다.
      commit('setUser', userData)
      console.log(userData)
    },
    // 로그인 액션
    login ({ state }, userData) {
      // 저장된 사용자 정보와 입력된 정보를 비교하여 로그인 처리
      if (state.user.username === userData.username && state.user.password === userData.password) {
        return Promise.resolve({ success: true, message: '로그인 성공' })
      } else if (state.user.username !== userData.username) {
        return Promise.reject(new Error('잘못된 사용자 이름'))
      } else {
        return Promise.reject(new Error('잘못된 사용자 비밀번호'))
      }
    }
  },
  modules: {}
})
