<script setup>
import { computed } from 'vue';
import { marked } from 'marked';

const props = defineProps({
  content: {
    type: String,
    default: ''
  }
});

const outputHtml = computed(() => {
  return marked.parse(props.content, {
    gfm: true,
    breaks: true
  });
});
</script>

<template>
  <div class="markdown-body" v-html="outputHtml"></div>
</template>
