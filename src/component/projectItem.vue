<script setup>
import { inject } from 'vue'
import Mark from '../utils/mark.vue'
const { _$, _$$ } = inject('resumeContext')


const props = defineProps({
    isOpenSource: Boolean,
    projectName: String,
    projectRepoHost: String,
    projectRepoIcon: String,
    projectPath: String,
    projectMaintainTag: String,
    projectMaintainTime: String,
    projectTechStack: Object,
    projectDescription: String
})


</script>


<template>
    <div class="mb-8">
        <div class="flex justify-between items-center mb-1">

            <div class="flex items-center gap-3">
                <h3 class="text-2xl font-bold text-gray-800 leading-none">
                    {{ props.projectName }}
                </h3>

                <span
                    class="text-[16px] text-gray-700 bg-gray-300 px-2 py-0.5 rounded-full leading-none items-center mt-1.5 hidden sm:inline-flex">
                    {{ props.projectMaintainTag }}
                </span>
            </div>

            <span class="md:text-xl text-base font-medium text-gray-500 leading-none ">
                {{ props.projectMaintainTime }}
            </span>
        </div>

        <div class="flex justify-between items-center mb-3 pt-3 text-sm">
            <div class="flex gap-2 flex-wrap  max-w-7/12 min-w-4/12">
                <template v-for="(value, key) in props.projectTechStack" :key="key">
                    <span class="inline-flex items-center px-2 rounded font-mono text-[14px] text-gray-700 bg-gray-100">
                        <img v-if="value.iconPath" :src="value.iconPath" class="w-3 h-3 inline-block mr-1"
                            alt="tech stack icon" />
                        <span>{{ value.name }}</span>
                    </span>
                </template>

            </div>
            <div class="flex items-center gap-1">
                <img v-if="props.projectRepoIcon" :src="props.projectRepoIcon" class="w-4 h-4 text-gray-400"
                    alt="repo host icon" />
                <a :href="'https://' + props.projectRepoHost + '/' + props.projectPath"
                    class="text-gray-400 hover:text-blue-500 transition-colors">
                    {{ props.projectRepoHost + '/' + props.projectPath }}
                </a>
            </div>
        </div>
        <Mark :content="props.projectDescription" class="text-gray-700 leading-relaxed text-base" />
    </div>

</template>