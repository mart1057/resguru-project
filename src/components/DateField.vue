<template>
  <!--
    Drop-in replacement for <input type="date">.
    v-model is a plain "YYYY-MM-DD" string (or "" when empty) - exactly the same
    contract as the native input - so the value sent to the backend is unchanged.
    The only difference is the on-screen format is ALWAYS dd/mm/yyyy, regardless
    of the viewer's OS/browser locale.
  -->
  <b-form-datepicker
    class="rg-datefield"
    :value="value || ''"
    :disabled="disabled"
    :required="required"
    :min="min || null"
    :max="max || null"
    :placeholder="placeholder"
    :state="state"
    locale="en-GB"
    :date-format-options="{ year: 'numeric', month: '2-digit', day: '2-digit' }"
    :start-weekday="1"
    today-button
    reset-button
    close-button
    label-today-button="วันนี้"
    label-reset-button="ล้าง"
    label-close-button="ปิด"
    label-today="วันนี้"
    label-no-date-selected="เลือกวันที่"
    label-help=""
    boundary="window"
    @input="$emit('input', $event || '')"
  />
</template>

<script>
export default {
  name: 'DateField',
  props: {
    value: { type: [String, Number], default: '' },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    min: { type: [String, Date], default: '' },
    max: { type: [String, Date], default: '' },
    placeholder: { type: String, default: 'วว/ดด/ปปปป' },
    state: { type: Boolean, default: null },
  },
};
</script>

<style>
/* Make the BootstrapVue datepicker read like the app's other inputs.
   Not scoped - b-form-datepicker renders its control outside this component's
   style scope. Namespaced under .rg-datefield so nothing else is affected. */
.rg-datefield.b-form-datepicker {
  background-color: #f3f7fa;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  min-height: 36px;
  height: auto;
  padding: 2px 6px;
  display: flex;
  align-items: center;
  font-family: 'Prompt';
  font-size: 13px;
}
.rg-datefield.b-form-datepicker .form-control,
.rg-datefield.b-form-datepicker label {
  border: 0;
  background: transparent;
  padding: 0 6px;
  font-size: 13px;
  height: auto;
  min-height: 0;
  color: #1a2733;
}
.rg-datefield.b-form-datepicker .btn {
  padding: 2px 6px;
  color: #003765;
}
.rg-datefield.b-form-datepicker.disabled,
.rg-datefield.b-form-datepicker:disabled {
  opacity: 0.6;
}
</style>
