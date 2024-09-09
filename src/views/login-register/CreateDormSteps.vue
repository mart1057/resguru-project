<template>
    <div id="create-dorm-steps">
      <header class="header">
        <img src="@/assets/logo.png" alt="Organice Logo" class="logo" />
        <h1>เริ่มต้นสร้างหอพัก</h1>
        <div class="user-info">
          <span>Nontadaech</span>
        </div>
      </header>
      <main class="main-content">
        <ul class="steps">
          <li :class="{'completed': step1}">
            ข้อมูลหอพักทั่วไป
            <button v-if="!step1" @click="editStep(1)" class="btn edit">แก้ไข</button>
          </li>
          <li :class="{'completed': step2}">
            กำหนด ผังห้อง
            <button v-if="!step2" @click="editStep(2)" class="btn edit">แก้ไข</button>
          </li>
          <li :class="{'completed': step3}">
            กำหนดรูปแบบบาร์ค่าเช่า และข้อมูลต่างๆบิล
            <button v-if="!step3" @click="editStep(3)" class="btn set">ตั้งค่า</button>
          </li>
          <li :class="{'completed': step4}">
            กำหนดค่าห้อง
            <button v-if="!step4" @click="editStep(4)" class="btn set">ตั้งค่า</button>
          </li>
          <li :class="{'completed': step5}">
            กำหนดการคิดค่าน้ำ ค่าไฟ
            <button v-if="!step5" @click="editStep(5)" class="btn set">ตั้งค่า</button>
          </li>
          <li :class="{'completed': step6}">
            กำหนดค่าบริการอื่นๆ และส่วนลด
            <button v-if="!step6" @click="editStep(6)" class="btn set">ตั้งค่า</button>
          </li>
        </ul>
        <p>!! ข้อมูลต่างๆสามารถแก้ไขภายหลังได้ที่หมวดตั้งค่าหอพัก !!</p>
        <button class="start-button">บันทึกและเริ่มต้นการใช้งาน</button>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        step1: true,
        step2: true,
        step3: false,
        step4: false,
        step5: false,
        step6: false,
      };
    },
    methods: {
      editStep(step) {
        console.log(`Editing step ${step}`);
        // Add your editing logic here
      },
    },
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #003765; /* Changed from original orange to #003765 */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: white;
  }
  .logo {
    height: 40px;
  }
  .user-info {
    color: white;
  }
  .main-content {
    text-align: center;
    padding: 20px;
  }
  .steps {
    list-style: none;
    padding: 0;
    margin: 20px 0;
  }
  .steps li {
    margin: 10px 0;
    padding: 10px;
    background-color: #f1f1f1;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
  }
  .steps li.completed {
    background-color: #e0ffe0;
  }
  .btn {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .btn.edit {
    background-color: #f0ad4e; /* Original color for edit buttons */
    color: white;
  }
  .btn.set {
    background-color: #5bc0de; /* Original color for set buttons */
    color: white;
  }
  .start-button {
    background-color: #003765;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>