<template>
    <div id="utility-rates">
      <header class="header">
        <h1>กำหนดการคิดค่าน้ำ ค่าไฟ</h1>
      </header>
      <main class="main-content">
        <div class="instructions">
          <p>- กรุณาเลือกห้องที่ต้องการ และกดปุ่ม กำหนดค่าน้ำ หรือ กำหนดค่าไฟ</p>
          <p>- สามารถกำหนดการคิดค่าน้ำ ค่าไฟ แต่ละห้องแยกต่างหากได้</p>
          <button class="video-button">ดู VDO วิธีการตั้งค่า</button>
        </div>
        <div v-for="(floor, index) in floors" :key="index" class="floor">
          <div class="floor-header">
            <span>ชั้นที่ {{ floor.number }}</span>
            <button @click="selectAllRooms(floor)" class="btn select-all">เลือกทั้งชั้น</button>
            <button @click="deselectAllRooms(floor)" class="btn deselect-all">ไม่เลือก</button>
          </div>
          <div class="rooms">
            <div v-for="room in floor.rooms" :key="room.number" class="room">
              <span>{{ room.number }}</span>
              <p>ยังไม่ได้กำหนดค่าน้ำ</p>
              <p>ยังไม่ได้กำหนดค่าไฟ</p>
            </div>
          </div>
        </div>
        <div class="actions">
          <button class="btn water">กำหนดค่าน้ำ 💧</button>
          <button class="btn electricity">กำหนดค่าไฟ 🔧</button>
        </div>
        <button class="btn submit">ยืนยัน</button>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        floors: [
          {
            number: 1,
            rooms: [{ number: 101 }, { number: 102 }],
          },
          {
            number: 2,
            rooms: [{ number: 201 }],
          },
          {
            number: 3,
            rooms: [{ number: 301 }],
          },
        ],
      };
    },
    methods: {
      selectAllRooms(floor) {
        console.log(`Selecting all rooms on floor ${floor.number}`);
        // Add logic to select all rooms
      },
      deselectAllRooms(floor) {
        console.log(`Deselecting all rooms on floor ${floor.number}`);
        // Add logic to deselect all rooms
      },
    },
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
  .instructions {
    margin-bottom: 20px;
  }
  .video-button {
    background-color: #f0ad4e;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .floor {
    margin-bottom: 20px;
  }
  .floor-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 5px;
  }
  .rooms {
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }
  .room {
    background-color: #e0f7fa;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    width: 120px;
  }
  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
  }
  .select-all {
    background-color: #4CAF50;
    color: white;
  }
  .deselect-all {
    background-color: #f44336;
    color: white;
  }
  .actions {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .water {
    background-color: #2196F3;
    color: white;
  }
  .electricity {
    background-color: #FF5722;
    color: white;
  }
  .submit {
    background-color: #003765;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  </style>