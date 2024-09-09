<template>
    <div id="app">
      <header class="header">
        <h1>ข้อมูลหอพัก ทั่วไป</h1>
      </header>
      <main class="main-content">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="dormName">ชื่อหอพัก *</label>
            <input type="text" id="dormName" v-model="dormName" required />
          </div>
          <div class="form-group">
            <label for="dormAddress">ที่อยู่หอพัก *</label>
            <input type="text" id="dormAddress" v-model="dormAddress" required />
          </div>
          <div class="form-group">
            <label for="dormLocation">ระบุตำแหน่งหอพักของคุณ</label>
            <div id="map" class="map"></div>
          </div>
          <div class="form-group">
            <label for="dormPhone">เบอร์โทรติดต่อหอพัก</label>
            <input type="text" id="dormPhone" v-model="dormPhone" />
            <button type="button" @click="addPhone">+ เพิ่มเบอร์โทรศัพท์</button>
          </div>
          <div class="form-group">
            <label for="dormEmail">อีเมล์ติดต่อหอพัก</label>
            <input type="email" id="dormEmail" v-model="dormEmail" />
          </div>
          <div class="form-group">
            <label for="startDate">หอพักของคุณกำหนดวันเริ่มต้นการจ่ายเงินเมื่อไหร่?</label>
            <input type="date" id="startDate" v-model="startDate" />
          </div>
          <div class="form-group">
            <label for="endDate">กำหนดวันที่สิ้นสุดการจ่ายเงิน</label>
            <input type="date" id="endDate" v-model="endDate" />
          </div>
          <button type="submit">บันทึก</button>
        </form>
      </main>
    </div>
  </template>
  
  <script>
  import L from 'leaflet';
  
  export default {
    data() {
      return {
        dormName: '',
        dormAddress: '',
        dormPhone: '',
        dormEmail: '',
        startDate: '',
        endDate: '',
        phones: [],
      };
    },
    mounted() {
      // Initialize the map
      this.initMap();
    },
    methods: {
      addPhone() {
        if (this.dormPhone) {
          this.phones.push(this.dormPhone);
          this.dormPhone = '';
        }
      },
      submitForm() {
        // Handle form submission
        console.log('Form submitted:', {
          dormName: this.dormName,
          dormAddress: this.dormAddress,
          dormEmail: this.dormEmail,
          startDate: this.startDate,
          endDate: this.endDate,
          phones: this.phones,
        });
      },
      initMap() {
        // Initialize the map using Leaflet
        const map = L.map('map').setView([13.7563, 100.5018], 13); // Centered on Bangkok
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
        L.marker([13.7563, 100.5018]).addTo(map)
          .bindPopup('Your Dorm Location')
          .openPopup();
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
  .form-group {
    margin-bottom: 15px;
  }
  .map {
    height: 300px;
    width: 100%;
    margin-top: 10px;
  }
  button {
    background-color: #003765;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>