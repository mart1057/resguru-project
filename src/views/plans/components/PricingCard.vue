<template>
  <div
    class="relative h-full overflow-hidden rounded-[28px] border bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-6"
    :class="plan.recommended ? 'border-[#187EE7] shadow-blue-100/80' : 'border-slate-200'"
  >
    <div
      v-if="plan.badge"
      class="absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold"
      :class="plan.recommended ? 'bg-[#E6F2FF] text-[#187EE7]' : 'bg-slate-100 text-slate-600'"
    >
      {{ plan.badge }}
    </div>

    <div class="flex h-full flex-col">
      <div>
        <div class="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {{ plan.category }}
        </div>
        <h3 class="mt-2 text-[26px] font-bold text-slate-900">{{ plan.name }}</h3>
        <p class="mt-2 min-h-[44px] text-[14px] leading-6 text-slate-500">
          {{ plan.description }}
        </p>
      </div>

      <div
        class="mt-5 rounded-[20px] px-4 py-4"
        :class="plan.recommended ? 'bg-[#003765] text-white' : 'bg-slate-50 text-slate-900'"
      >
        <div class="flex items-end gap-1">
          <span class="text-[34px] font-bold leading-none">{{ plan.price }}</span>
          <span class="pb-1 text-[13px]" :class="plan.recommended ? 'text-blue-100' : 'text-slate-500'">
            {{ plan.priceSuffix }}
          </span>
        </div>
        <div class="mt-2 text-[13px]" :class="plan.recommended ? 'text-blue-100' : 'text-slate-500'">
          {{ plan.billingNote }}
        </div>
      </div>

      <button
        type="button"
        class="mt-5 w-full rounded-[16px] px-4 py-3 text-[14px] font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-70"
        :class="plan.recommended ? 'bg-[#187EE7] text-white hover:bg-[#166fcb]' : 'bg-[#003765] text-white hover:bg-[#012a4d]'"
        :disabled="loading"
        @click="$emit('select', plan.priceId, plan.id)"
      >
        <span v-if="loading && processingId === plan.id">กำลังดำเนินการ...</span>
        <span v-else>{{ plan.cta }}</span>
      </button>

      <div class="mt-5 rounded-[18px] bg-slate-50 px-4 py-3 text-[13px] text-slate-600">
        เหมาะสำหรับ: <span class="font-medium text-slate-800">{{ plan.audience }}</span>
      </div>

      <div class="mt-5 flex-1">
        <div class="mb-3 text-[14px] font-semibold text-slate-900">ฟีเจอร์ที่รวมอยู่</div>
        <ul class="space-y-3">
          <li
            v-for="feature in plan.features"
            :key="`${plan.id}-${feature.label}`"
            class="flex items-start gap-3 rounded-[14px] border border-slate-100 bg-white px-3 py-2"
          >
            <span
              class="mt-[2px] flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold"
              :class="feature.enabled ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-500'"
            >
              {{ feature.enabled ? '✓' : '–' }}
            </span>
            <div class="min-w-0 flex-1">
              <div class="text-[13px] font-medium text-slate-800">{{ feature.label }}</div>
              <div v-if="feature.value" class="text-[12px] text-slate-500">
                {{ feature.value }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingCard',
  props: {
    plan: {
      type: Object,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    processingId: {
      type: String,
      default: null,
    },
  },
};
</script>
