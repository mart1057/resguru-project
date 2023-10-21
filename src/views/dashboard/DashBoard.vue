<template>
    <div class="flex mt-[10px] justify-between">
        <div class="w-[55%]">
            <UserPlan />
            <PayMent/>
            <Notification/>
        </div>
        <div class="w-[44%]">
            <Expenses/>
            <Meters/>
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

        }

    },
    created() {
        const loading = this.$vs.loading({
            opacity: 1,
        })
        setTimeout(() => {
            loading.close()
        }, 1000)
    }


}
</script>
<style>


</style>