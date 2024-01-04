<template>
    <div id="payment" class="p-[20px] rounded-[22px] mt-[18px]">
        <div class="flex justify-between">
            <div class="flex">
                <div class="flex items-center">
                    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.5089 12.0627C23.2074 12.0627 22.9549 11.9609 22.7515 11.7575C22.5481 11.5541 22.4464 11.3017 22.4464 11.0002C22.4464 10.6987 22.5481 10.4462 22.7515 10.2428C22.9549 10.0394 23.2074 9.93772 23.5089 9.93772H26.5056C26.8071 9.93772 27.0596 10.0394 27.263 10.2428C27.4664 10.4462 27.5681 10.6987 27.5681 11.0002C27.5681 11.3017 27.4664 11.5541 27.263 11.7575C27.0596 11.9609 26.8071 12.0627 26.5056 12.0627H23.5089ZM23.2174 20.9659L20.8281 19.1705C20.5793 18.9889 20.4358 18.7569 20.3977 18.4745C20.3595 18.192 20.4313 17.9264 20.6129 17.6776C20.7945 17.4288 21.0265 17.2853 21.309 17.2472C21.5914 17.209 21.857 17.2807 22.1058 17.4623L24.4951 19.2577C24.7439 19.4393 24.8874 19.6714 24.9255 19.9538C24.9637 20.2362 24.8919 20.5018 24.7103 20.7506C24.5287 20.9995 24.2967 21.1429 24.0143 21.1811C23.7318 21.2192 23.4662 21.1475 23.2174 20.9659ZM22.0513 4.48352C21.8025 4.66514 21.5369 4.73688 21.2544 4.69875C20.972 4.66059 20.74 4.51711 20.5584 4.2683C20.3768 4.01948 20.305 3.75387 20.3432 3.47146C20.3813 3.18904 20.5248 2.95702 20.7736 2.77538L23.1629 0.980035C23.4117 0.798418 23.6773 0.726676 23.9598 0.764808C24.2422 0.80294 24.4742 0.946424 24.6558 1.19526C24.8374 1.44408 24.9092 1.70969 24.871 1.9921C24.8329 2.27451 24.6894 2.50653 24.4406 2.68815L22.0513 4.48352ZM4.4384 20.1812V14.6508H2.99447C2.28797 14.6508 1.68453 14.4006 1.18414 13.9002C0.683777 13.3999 0.433594 12.7964 0.433594 12.0899V9.91045C0.433594 9.20396 0.683777 8.60052 1.18414 8.10013C1.68453 7.59976 2.28797 7.34958 2.99447 7.34958H8.47041L12.8757 4.71515C13.3025 4.45906 13.7329 4.45679 14.167 4.70835C14.6011 4.9599 14.8181 5.32996 14.8181 5.81852V16.1819C14.8181 16.6704 14.6011 17.0405 14.167 17.292C13.7329 17.5436 13.3025 17.5413 12.8757 17.2852L8.47041 14.6508H6.56333V20.1812H4.4384ZM16.7797 15.4191V6.58129C17.3355 7.08439 17.7832 7.71826 18.1228 8.48288C18.4624 9.24752 18.6323 10.0866 18.6323 11.0002C18.6323 11.9137 18.4624 12.7529 18.1228 13.5175C17.7832 14.2821 17.3355 14.916 16.7797 15.4191ZM12.6932 14.6617V7.33864L9.05886 9.47454H2.99447C2.8855 9.47454 2.7856 9.51995 2.69477 9.61076C2.60396 9.70159 2.55856 9.80149 2.55856 9.91045V12.0899C2.55856 12.1989 2.60396 12.2988 2.69477 12.3896C2.7856 12.4804 2.8855 12.5258 2.99447 12.5258H9.05886L12.6932 14.6617Z"
                            fill="#003765" />
                    </svg>
                </div>
                <div class="text-[18px] font-bold flex items-center ml-[4px]">ข่าวสารประจำหอพัก</div>
            </div>
            <div class="flex justify-center items-center">
                <div class="flex justify-center items-center cursor-pointer" @click=" routerTo('/announcement')">ดูทั้งหมด</div>
            </div>
        </div>
        <!-- <div class="mt-[18px]">
            <div class="flex w-[100%]  items-center justify-between">
                <div class="flex justify-start items-center w-[80%]">
                    <input class="h-[40px] w-[100%] bg-[#F3F7FA] rounded-[12px]" placeholder="ค้นหา" v-model="search" type="input" @input="filterData"/>
                </div>
                <button class="cursor-pointer flex justify-center items-center bg-[#003765] pl-[16px] h-[38px] pr-[16px] pt-[11px] pb-[11px] rounded-[12px]  text-[white]">
                    ทั้งหมด</button>
            </div>
        </div> -->
        <div class="mt-[18px]" :class="data.length > 5? 'table-container':''" >
            <vs-table>
                <template #thead>
                    <vs-tr>
                        <vs-th v-if="data[0]?.building">
                            ชื่อหอพัก
                        </vs-th>
                        <vs-th>
                            เรื่อง
                        </vs-th>
                        <vs-th>
                            รายละเอียด
                        </vs-th>  
                        <vs-th>
                            วันที่
                        </vs-th>
                    </vs-tr>
                </template>
                <template #tbody>
                    <vs-tr :key="i" v-for="(tr, i) in data" :data="tr">
                        <vs-td v-if="tr.building ">
                            {{ tr.building.buildingName }}
                        </vs-td>
                        <vs-td>
                            {{ tr.topic }}
                        </vs-td>
                        <vs-td>
                            {{ tr.description}}
                        </vs-td> 
                        <vs-td>
                            {{ convertDateNoTime(tr.createdAt) }}
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </div>
    </div>
</template>
<script>
import { convertDateNoTime} from '@/components/hook/hook'
export default {
    props: {
        data: { type: Object },
    },
    data(props) {
        return {
            tab: 1,
            convertDateNoTime,
        }
    },
    methods:{
        routerTo(path) {
            this.$router.push({
                path: path,
            })
            
        },
    }
}
</script>
<style scoped>
#payment {
    background-color: rgb(255, 255, 255);
}
.table-container {
    height: 250px;
    /* Set a fixed height to enable scrolling */
    overflow-y: scroll;
    /* Enable vertical scrolling */
    padding: 10px;
    /* Optional: Add padding for spacing */
}

/* width */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #ffff;
    border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #E9EEF6;
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #E9EEF6;
}

</style>