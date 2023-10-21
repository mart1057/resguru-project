<template>
    <div class="flex mt-[10px]">
        <div class="w-[55%]">
            <UserPlan />
            <PayMent/>
        </div>
        <div class="w-[45%]">

        </div>

    </div>
</template>
<script>
import UserPlan from '@/views/dashboard/components/UserPlan'
import PayMent from '@/views/dashboard/components/PayMent'
export default {
    components: { UserPlan,PayMent  },
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