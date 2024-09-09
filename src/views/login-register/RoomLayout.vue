<template>
    <div id="room-layout">
      <header class="header">
        <h1>กำหนดผังห้อง</h1>
      </header>
      <main class="main-content">
        <div class="level">
          <button @click="removeLevel" class="remove-level">- ลบชั้น</button>
          <span>ชั้นที่ {{ currentLevel }}</span>
          <button @click="addLevel" class="add-level">+ เพิ่มชั้น</button>
        </div>
        <form @submit.prevent="submitForm">
          <table>
            <thead>
              <tr>
                <th>ชื่อห้อง</th>
                <th>ชื่อห้องที่ต้องการแก้ไข</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(room, index) in rooms" :key="index">
                <td>{{ room }}</td>
                <td><input type="text" v-model="rooms[index]" /></td>
                <td><button @click="removeRoom(index)" type="button" class="remove-room">- ลบ</button></td>
              </tr>
            </tbody>
          </table>
          <button @click="addRoom" type="button" class="add-room">+ เพิ่มห้อง</button>
          <button type="submit" class="submit">ยืนยัน</button>
        </form>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentLevel: 1,
        rooms: ['101']
      };
    },
    methods: {
      addLevel() {
        this.currentLevel += 1;
      },
      removeLevel() {
        if (this.currentLevel > 1) {
          this.currentLevel -= 1;
        }
      },
      addRoom() {
        const newRoomNumber = this.currentLevel * 100 + this.rooms.length + 1;
        this.rooms.push(newRoomNumber.toString());
      },
      removeRoom(index) {
        this.rooms.splice(index, 1);
      },
      submitForm() {
        console.log('Form submitted:', {
          currentLevel: this.currentLevel,
          rooms: this.rooms,
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #003765;
    color: white;
    padding: 10px;
    text-align: center;
  }
  .main-content {
    padding: 20px;
  }
  .level {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .level button {
    margin: 0 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .add-level {
    background-color: #4CAF50;
    color: white;
  }
  .remove-level {
    background-color: #f44336;
    color: white;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  table, th, td {
    border: 1px solid #ddd;
  }
  th, td {
    padding: 8px;
    text-align: center;
  }
  .add-room, .remove-room {
    background-color: #4CAF50;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .remove-room {
    background-color: #f44336;
  }
  .submit {
    background-color: #003765;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>