<script setup>
import { inject } from 'vue'
import projectItem from './projectItem.vue';

import GithubIcon from '../assets/icon/github.svg'
import JavaScriptIcon from '../assets/icon/javascript.svg'
import VueIcon from '../assets/icon/vue.svg'
import ViteIcon from '../assets/icon/vite.svg'
import TailwindIcon from '../assets/icon/tailwind.svg'

import clientworkerDesc from '../markdown/clientworker.md?raw'
import hexohexoplusDesc from '../markdown/hexohexoplus.md?raw'

const { _$, _$$ } = inject('resumeContext')
const projectList = [
    {
        "isOpenSource": true,
        "projectName": "ClientWorker",
        "projectRepoHost": "github.com",
        "projectRepoIcon": GithubIcon,
        "projectPath": "ChenYFan/ClientWorker",
        "projectMaintainTag": "基于规则的前端路由 · 创建者",
        "projectMaintainTime": "278⭐ · 2021.06 - 至今",
        "projectTechStack": {
            "JavaScript": { "name": "JavaScript", "iconPath": JavaScriptIcon},
            "Vue.js": { "name": "Vue.js", "iconPath": VueIcon }
        },
        "projectDescription": clientworkerDesc
    },
    {
        "isOpenSource": true,
        "projectName": "HexoPlusPlus",
        "projectRepoHost": "github.com",
        "projectRepoIcon": GithubIcon,
        "projectPath": "HexoPlusPlus/HexoPlusPlus",
        "projectMaintainTag": "ServerLess编辑器的尝试 · 创建者",
        "projectMaintainTime": "570⭐ · 2021.01 - 2022.06",
        "projectTechStack": {
            "JavaScript": { "name": "JavaScript", "iconPath": JavaScriptIcon},
            "Vue.js": { "name": "Vue.js", "iconPath": VueIcon },
            "Vite.js": { "name": "Vite", "iconPath": ViteIcon },
            "Tailwind": { "name": "Tailwind", "iconPath": TailwindIcon }
        },
        "projectDescription": hexohexoplusDesc
    }
]
</script>

<template>
    <div>
        <projectItem v-for="(item, index) in projectList" :key="index" v-bind="item" />
    </div>
</template>