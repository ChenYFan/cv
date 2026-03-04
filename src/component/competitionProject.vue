<script setup>
import { inject, watch, ref, onMounted } from 'vue'
import projectItem from './projectItem.vue';

import GiteeIcon from '../assets/icon/gitee.svg'
import JavaScriptIcon from '../assets/icon/javascript.svg'
import VueIcon from '../assets/icon/vue.svg'
import ViteIcon from '../assets/icon/vite.svg'
import TailwindIcon from '../assets/icon/tailwind.svg'
import JavaIcon from '../assets/icon/java.svg'
import SpringBootIcon from '../assets/icon/springboot.svg'
import PythonIcon from '../assets/icon/python.svg'
import LangChainIcon from '../assets/icon/langchain.svg'
import QwenIcon from '../assets/icon/qwen.svg'
import PytorchIcon from '../assets/icon/pytorch.svg'

import EvoIndustryDesc from '../markdown/evoindustry.md?raw'
import EduPivotDesc from '../markdown/edupivot.md?raw'
// import IdormDesc from '../markdown/idorm.md?raw'

const { _$, _$$ } = inject('resumeContext')

watch(_$$, (newVal) => { updateProjectData() })
onMounted(() => { updateProjectData() })

let projectList = ref([])

const updateProjectData = () => {

    projectList.value = [
        {
            "isOpenSource": false,
            "projectName": "EvoIndustry 璇玑智灵",
            "projectRepoHost": "gitee.com",
            "projectRepoIcon": GiteeIcon,
            "projectPath": "cyanfalse/evo-industry",
            "projectMaintainTag": "工业生产人机交互系统 · 项目领队",
            "projectMaintainTime": "2024.01 - 2025.06",
            "projectTechStack": {
                "JavaScript": { "name": "JavaScript", "iconPath": JavaScriptIcon },
                "Vue.js": { "name": "Vue.js", "iconPath": VueIcon },
                "Vite.js": { "name": "Vite", "iconPath": ViteIcon },
                "Tailwind": { "name": "Tailwind", "iconPath": TailwindIcon },
                "Java": { "name": "Java", "iconPath": JavaIcon },
                "SpringBoot": { "name": "SpringBoot", "iconPath": SpringBootIcon },
                "Python": { "name": "Python", "iconPath": PythonIcon },
                "LangChain": { "name": "LangChain", "iconPath": LangChainIcon },
                "Pytorch": { "name": "Pytorch", "iconPath": PytorchIcon },
                "Qwen": { "name": "Qwen", "iconPath": QwenIcon }

            },
            "projectDescription": EvoIndustryDesc.replace(/\<\|EVOINDUSTRY_IMAGE\|\>/g, _$.VAR.EVOINDUSTRY_IMAGE[_$$.value])
        },
        {
            "isOpenSource": false,
            "projectName": "EduPivot 智教天枢",
            "projectRepoHost": "gitee.com",
            "projectRepoIcon": GiteeIcon,
            "projectPath": "edupivot/backend",
            "projectMaintainTag": "AI驱动智能备课系统 · 项目领队",
            "projectMaintainTime": "2024.08 - 2025.11",
            "projectTechStack": {
                "JavaScript": { "name": "JavaScript", "iconPath": JavaScriptIcon },
                "Vue.js": { "name": "Vue.js", "iconPath": VueIcon },
                "Vite.js": { "name": "Vite", "iconPath": ViteIcon },
                "Tailwind": { "name": "Tailwind", "iconPath": TailwindIcon },
                "Python": { "name": "Python", "iconPath": PythonIcon },
                "LangChain": { "name": "LangChain", "iconPath": LangChainIcon },
                "Pytorch": { "name": "Pytorch", "iconPath": PytorchIcon },
                "Qwen": { "name": "Qwen", "iconPath": QwenIcon }

            },
            "projectDescription": EduPivotDesc
        }
        // {
        //     "isOpenSource": false,
        //     "projectName": "iDorm 锁安",
        //     "projectRepoHost": "gitee.com",
        //     "projectRepoIcon": GiteeIcon,
        //     "projectPath": "cyanfalse/idorm",
        //     "projectMaintainTag": "零样本无障碍门锁 · 核心维护者",
        //     "projectMaintainTime": "2023.05 - 至今",
        //     "projectTechStack": {
        //         "JavaScript": { "name": "JavaScript", "iconPath": JavaScriptIcon },
        //         "Vue.js": { "name": "Vue.js", "iconPath": VueIcon },
        //         "Vite.js": { "name": "Vite", "iconPath": ViteIcon },
        //         "Tailwind": { "name": "Tailwind", "iconPath": TailwindIcon },
        //         "Python": { "name": "Python", "iconPath": PythonIcon },
        //         "LangChain": { "name": "LangChain", "iconPath": LangChainIcon },
        //         "Pytorch": { "name": "Pytorch", "iconPath": PytorchIcon },
        //         "Qwen": { "name": "Qwen", "iconPath": QwenIcon }

        //     },
        //     "projectDescription": IdormDesc
        // }
    ]
}

</script>

<template>
    <div>
        <projectItem v-for="(item, index) in projectList" :key="index" v-bind="item" />
    </div>
</template>