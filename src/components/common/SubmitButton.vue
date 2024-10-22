<script setup>
const props = defineProps({
  reviewText: {
    type: String
  },
});

const emit = defineEmits(['submit']);

const handleSubmit = () => {
  emit('submit', props.reviewText);
};

</script>

<template>
  <button
      :class="[
          'text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline',
          reviewText ? 'bg-blue-500 hover:bg-blue-700' : 'bg-blue-200'
        ]"
      type="submit"
      @click="handleSubmit"
  >
    提交
  </button>

</template>