<template>
  <div class="Component1">
    <form ref="myForm">
      <table>
        <thead>
          <tr>
            <td colspan="6">
              <div class="ddiv">
                <h1>Main</h1>
              </div>
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colspan="6">
              <div class="ddiv">
                <h3>MariaDB</h3>
                <div>
                  <span>Server Host : </span>
                  <input
                    type="text"
                    v-model="serverHost"
                    placeholder="IP 또는 도메인 주소"
                  />
                </div>
                <div>
                  <span>Database : </span>
                  <input
                    type="text"
                    v-model="databaseName"
                    placeholder="DB 이름"
                  />
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td colspan="6">
              <div class="ddiv">
                <h3>User</h3>
                <div>
                  <span>User : </span>
                  <input type="text" v-model="username" placeholder="root" />
                </div>
                <div>
                  <span>Password : </span>
                  <input
                    type="text"
                    v-model="password"
                    placeholder="Password"
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td colspan="6">
              <div class="ddiv2">
                <button type="button" @click="connect">연결</button>
                <button type="button" @click="resetForm">초기화</button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      serverHost: '',
      databaseName: '',
      username: '',
      password: '',
      errors: {
        serverHost: '',
        databaseName: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    connect () {
      // 유효성 체크
      if (this.validateForm()) {
        // 데이터를 이벤트로 전달
        this.$emit('connect-clicked', {
          serverHost: this.serverHost,
          databaseName: this.databaseName,
          username: this.username,
          password: this.password
        })
      } else {
        // 폼이 유효하지 않을 때 처리할 내용
        // alert('폼이 유효하지 않습니다.')
      }
    },
    validateForm () {
      this.errors = {
        serverHost: '',
        databaseName: '',
        username: '',
        password: ''
      }

      let isValid = true

      // 서버 호스트 필드 유효성 체크
      if (!this.serverHost) {
        this.errors.serverHost = '서버 호스트를 입력하세요.'
        isValid = false
        alert('서버 호스트를 입력하세요')
      } else if (!this.databaseName) {
        this.errors.databaseName = '데이터베이스 이름을 입력하세요.'
        isValid = false
        alert('데이터베이스 이름을 입력하세요')
      } else if (!this.username) {
        this.errors.username = '사용자 이름을 입력하세요.'
        isValid = false
        alert('사용자 이름을 입력하세요.')
      } else if (!this.password) {
        this.errors.password = '비밀번호를 입력하세요.'
        isValid = false
        alert('비밀번호를 입력하세요.')
      } else {
        alert('연결됩니다.')
      }
      return isValid
    },

    resetForm () {
      this.$refs.myForm.reset()
    }
  }
}
</script>

<style scoped>
table {
  margin: 0 auto;
  padding-top: 20px;
  width: 80%;
}

.ddiv {
  border: 1px solid black;
}

.ddiv2 {
  border: 1px solid black;
  display: flex;
  justify-content: flex-end;
}

button {
  margin-right: 5px;
}
</style>
