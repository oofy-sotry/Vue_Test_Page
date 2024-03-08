<template>
  <div class="Component1">
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
                <input
                  type="text"
                  v-model="username"
                  placeholder="root"
                />
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
              <button type="button" @click="connect">
                연결
              </button>
              <button type="button">
                취소
              </button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      serverHost: '',
      databaseName: '',
      username: '',
      password: ''
    }
  },
  methods: {
    connect () {
      // 데이터를 이벤트로 전달
      this.$emit('connect-clicked', {
        serverHost: this.serverHost,
        databaseName: this.databaseName,
        username: this.username,
        password: this.password
      })
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
