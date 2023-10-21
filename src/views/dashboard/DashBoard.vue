<template>
    <div class="flex mt-[10px]">
        <div class="w-[55%]">
            <UserPlan />
        </div>
        <div class="w-[45%]">

        </div>

    </div>
</template>
<script>
import UserPlan from '@/views/dashboard/components/UserPlan'
export default {
    components: { UserPlan },
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