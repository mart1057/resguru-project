<template>
    <div class="flex mt-[10px] justify-between tt">
        <div class="w-[55%]">
            <UserPlan :dashboard="dahboard" />
            <PayMent/>
            <Notification/>
        </div>
        <div class="w-[44%]">
            <Expenses/>
            <Meters :data="dahboard"/>
            <News/>
        </div>
    </div>
</template>
<script>
import UserPlan from '@/views/dashboard/components/UserPlan'
import PayMent from '@/views/dashboard/components/PayMent'
import Notification from '@/views/dashboard/components/Notification'
import Expenses from '@/views/dashboard/components/Expenses'
import Meters from '@/views/dashboard/components/Meters'
import News from '@/views/dashboard/components/News'
export default {
    components: { UserPlan,PayMent, Notification,Expenses,Meters,News    },
    data() {
        return {
            dahboard: [],
        }

    },
    created() {
        this.$store.state.main = true
        const loading = this.$vs.loading({
            opacity: 1,
        })
        setTimeout(() => {
            loading.close()
        }, 1000)
    },
    mounted() {
        this.getDashboard();
    },
    methods:{
        getDashboard(){
            fetch(`https://api.resguru.app/api/getdashboard?buildingid=${this.$store.state.building}&month=10&year=2023`)
            .then(response => response.json())
                .then((resp) => {
                    this.dahboard = resp.room.roomData  
                    console.log("Return from getRoom()", this.dahboard);
            })
        }
    }


}
</script>
<style>
</style>