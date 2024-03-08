<template>
  <div class="Component2">
    <div class="Container">
      <div class="Ddiv">
        <table class="StyledTable">
          <thead class="TableHeader">
            <tr class="TableRow">
              <th class="TableHeaderCell">Server Host</th>
              <th class="TableHeaderCell">Database</th>
              <th class="TableHeaderCell">User</th>
              <th class="TableHeaderCell">Password</th>
            </tr>
          </thead>

          <tbody class="TableBody">
            <tr class="TableRow" v-for="row in data" :key="row.id">
              <td class="TableCell">{{ row.serverHost }}</td>
              <td class="TableCell">{{ row.databaseName }}</td>
              <td class="TableCell">{{ row.username }}</td>
              <td class="TableCell">{{ row.password }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <label>Server Host:</label>
        <input type="text" v-model="formData.serverHost" />
      </div>
      <div>
        <label>Database:</label>
        <input type="text" v-model="formData.databaseName" />
      </div>
      <div>
        <label>User:</label>
        <input type="text" v-model="formData.username" />
      </div>
      <div>
        <label>Password:</label>
        <input type="text" v-model="formData.password" />
      </div>

      <button type="button" @click="addRow">
        Add Row
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formData: Object // Main에서 받은 데이터
  },
  data () {
    return {
      data: [] // 테이블에 표시될 데이터 배열
    }
  },
  methods: {
    addRow () {
      // 입력 폼에서 입력된 데이터를 data 배열에 추가
      this.data.push({
        id: this.data.length + 1,
        serverHost: this.formData.serverHost,
        databaseName: this.formData.databaseName,
        username: this.formData.username,
        password: this.formData.password
      })
      // 입력 폼 초기화
      this.formData = {
        serverHost: '',
        databaseName: '',
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>
.Container {
  max-width: 600px;
  margin: 20px auto;
}

.Ddiv {
  border: 1px solid black;
  overflow-y: auto; /* 세로 스크롤이 필요할 때만 스크롤 생성 */
  max-height: 200px; /* 내용의 최대 높이를 설정 */
}

.StyledTable {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.TableHeader {
  background-color: #f2f2f2;
}

.TableCell {
  padding: 10px;
}
</style>
