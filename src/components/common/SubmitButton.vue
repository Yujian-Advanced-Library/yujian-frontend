<script setup>
import {ref} from 'vue';

const inputValue = ref('');

const emit = defineEmits(['submit']);

const submitForm = () => {
  emit('submit', inputValue.value);
};
</script>

<template>
  <button
      :class="[
          'text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline',
          inputValue ? 'bg-blue-500 hover:bg-blue-700' : 'bg-blue-200'
        ]"
      type="submit"
      @click="submitForm"
  >
    提交
  </button>

</template>