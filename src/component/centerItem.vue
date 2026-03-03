<script setup>
//从props变量中读取key、value、isALink、linkUrl、svg字段并渲染
const props = defineProps({
    label: String,
    value: String,
    isALink: Boolean,
    linkUrl: String,
    iconPath: String
})

</script>
<template>
    <div class="flex items-center gap-2">
        <img v-if="props.iconPath" :src="props.iconPath" class="w-4 h-4 text-gray-800" alt="icon" />
        <span class="font-semibold text-gray-800">{{ props.label }}:</span>
        <a v-if="props.isALink" :href="props.linkUrl" class="hover:text-blue-600 transition-colors">{{ props.value }}</a>
        <span v-else>{{ props.value }}</span>
    </div>
</template>