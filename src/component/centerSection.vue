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

    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-xl text-gray-600">
        <CenterItem label="GitHub" :value="'github.com/ChenYFan'" :isALink="true" linkUrl="https://github.com/ChenYFan"
            :iconPath="GithubIcon" />
        <CenterItem label="学校" :value="'浙江科技大学'" :isALink="true" :iconPath="SchoolIcon"
            linkUrl="https://www.zust.edu.cn" />

        <CenterItem label="学历" :value="'本科 (2026 届, 软件工程)'" :isALink="false" :iconPath="AcdemicIcon" />
        <CenterItem label="博客" :value="'blog.eurekac.cn'" :isALink="true" linkUrl="https://blog.eurekac.cn"
            :iconPath="BlogIcon" />
        <CenterItem label="邮箱" :value="'chenyf@cyfan.top'" :isALink="true" linkUrl="mailto:chenyf@cyfan.top"
            :icon-path="MailIcon" />
        <CenterItem label="联系方式" :value="_$.VAR.CYANFLASE_PHONENUMBER[_$$]" :isALink="false" :iconPath="phoneIcon" />
    </div>
</template>