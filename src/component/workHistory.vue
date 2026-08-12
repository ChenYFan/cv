<script setup>
import { inject } from 'vue'
import projectItem from './projectItem.vue';

import GithubIcon from '../assets/icon/github.svg'
import JavaScriptIcon from '../assets/icon/javascript.svg'
import VueIcon from '../assets/icon/vue.svg'
import ViteIcon from '../assets/icon/vite.svg'
import TailwindIcon from '../assets/icon/tailwind.svg'
import BoomingIcon from '../assets/icon/booming.svg'

import BoomingMarkdown from '../markdown/booming.md?raw'

const { _$, _$$ } = inject('resumeContext')
const projectList = [
    {
        "isOpenSource": true,
        "projectName": "不鸣科技",
        // "projectRepoHost": "boomingtech.com",
        // "projectRepoIcon": BoomingIcon,
        // "projectPath": "TeamBrain",
        "projectMaintainTag": "BoomingTech · AI全栈产品研发",
        "projectMaintainTime": "2026.3 - 至今",
        "projectTechStack": { },
        "projectDescription": BoomingMarkdown
    }
]
</script>

<template>
    <div>
        <projectItem v-for="(item, index) in projectList" :key="index" v-bind="item" />
    </div>
</template>