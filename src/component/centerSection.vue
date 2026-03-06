<script setup>
import { inject } from 'vue'
import CenterItem from './centerItem.vue'

import GithubIcon from '../assets/icon/github.svg'
import SchoolIcon from '../assets/icon/school.svg'
import MailIcon from '../assets/icon/mail.svg'
import AcdemicIcon from '../assets/icon/academic.svg'
import BlogIcon from '../assets/icon/blog.svg'
import phoneIcon from '../assets/icon/phone.svg'

const { _$, _$$ } = inject('resumeContext');


</script>

<template>
    <div class="flex-1 min-w-0 self-center">
        <div class="flex flex-row items-center mb-6">
            <h1 class="text-3xl font-bold tracking-widest mr-2 md:text-5xl md:mr-6 text-gray-800">{{ _$.VAR.CYANFALSE_REALNAME[_$$]}}</h1>

            <div class="flex flex-col text-sm text-gray-600 gap-1 border-l-2 border-gray-300 pl-4">
                <div>实习意向：前端开发 / 软件开发</div>
                <div>求职状态：随时入职</div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-base text-gray-600">
            <CenterItem label="GitHub" :value="'github.com/ChenYFan'" :isALink="true"
                linkUrl="https://github.com/ChenYFan" :iconPath="GithubIcon" />
            <CenterItem label="学校" :value="'浙江科技大学'" :isALink="true" :iconPath="SchoolIcon"
                linkUrl="https://www.zust.edu.cn" />
            <CenterItem label="学历" :value="'本科(27届, 软件工程)'" :isALink="false" :iconPath="AcdemicIcon" />
            <CenterItem label="博客" :value="'blog.eurekac.cn'" :isALink="true" linkUrl="https://blog.eurekac.cn"
                :iconPath="BlogIcon" />
            <CenterItem label="邮箱" :value="'chenyf@cyfan.top'" :isALink="true" linkUrl="mailto:chenyf@cyfan.top"
                :icon-path="MailIcon" />
            <CenterItem label="联系" :value="_$.VAR.CYANFALSE_PHONENUMBER[_$$]" :isALink="false"
                :iconPath="phoneIcon" />
        </div>
    </div>

    <div class="hidden md:inline-block md:w-1/4 shrink-0 mt-4">
        <div class="w-[80%] aspect-[3/4] bg-gray-100 rounded overflow-hidden border border-gray-200 shadow-sm">
            <img :src="_$.VAR.CYANFALSE_AVATAR[_$$]" alt="求职照" class="w-full h-full object-cover" />
        </div>
    </div>
</template>