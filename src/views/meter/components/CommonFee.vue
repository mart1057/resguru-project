<template>
    <div class="mt-[14px] bg-[white] rounded-[12px] p-[24px]">
        <div class="font-bold text-[18px]">อาคาร A ชั้น 1</div>
        <div class="mt-[14px]">
            <vs-table>
                <template #thead>
                    <vs-tr>
                        <vs-th>
                            เลขห้อง
                        </vs-th>
                        <vs-th>
                            สถานะห้อง
                        </vs-th>
                        <vs-th>
                            ชื่อผู้เช่า
                        </vs-th>
                        <vs-th>
                            ค่าส่วนกลาง
                        </vs-th>
                    </vs-tr>
                </template>
                <template #tbody>
                    <vs-tr :key="i" v-for="(tr, i) in users" :data="tr">
                        <vs-td>
                            {{ tr.id }}
                        </vs-td>
                        <vs-td>
                            <div class="flex justify-start items-center">
                                <div class="pl-[12px] pr-[12px] pb-[4px] pt-[4px] rounded-[12px] text-center"
                                    :class="tr.status == 'มีผู้เช่า' ? 'text-[#1DC56A] bg-[#D8FAD5]' : 'text-[#8396A6] bg-[#DEEAF5]'">
                                    {{ tr.status }}</div>
                            </div>

                        </vs-td>
                        <vs-td>
                            {{ tr.name }}
                        </vs-td>
                        <vs-td>
                            {{ tr.unit }}
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            users: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000"
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000"
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000"
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000"
                },
                {
                    "id": 5,
                    "name": "Chelsey Dietrich",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000"
                },
                {
                    "id": 6,
                    "name": "Mrs. Dennis Schulist",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000"
                },
                {
                    "id": 7,
                    "name": "Kurtis Weissnat",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000"
                },
                {
                    "id": 8,
                    "name": "",
                    "status": "ห้องว่าง",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": ""
                },
                {
                    "id": 9,
                    "name": "Glenna Reichert",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000"
                },
                {
                    "id": 10,
                    "name": "Clementina DuBuque",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000"
                }
            ]
        }
    },
    created() {
        const loading = this.$vs.loading({})
        setTimeout(() => {
            loading.close()
        }, 1000)
    },
}
</script>