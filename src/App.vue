<script setup>
import { onMounted, ref, provide } from 'vue'
import Crypter from './utils/crypter.js';

import CenterSection from './component/centerSection.vue'
import OpensourceProject from './component/opensourceProject.vue';
import CompetitionProject from './component/competitionProject.vue';

import VueIcon from './assets/icon/vue.svg'

const _$ = __RESUME_DATA__;
const _$$ = ref(0)
const crypter = new Crypter(_$.SALT)

const checkKey = (key) => {
  if (!key) return false

  try {
    return crypter.decrypt(_$.VAR.TESTKEY[1], key) === "_"
  } catch (e) {
    console.error("Key decryption failed:", e)
    return false
  }
}


onMounted(() => {
  const key = (new URLSearchParams(window.location.search)).get('key')
  if (checkKey(key)) {
    for (const k in _$.VAR) _$.VAR[k][1] = crypter.decrypt(_$.VAR[k][1], key)
    _$$.value = 1
  }
})

provide('resumeContext', { _$, _$$ });

</script>

<template>
  <div class="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-blue-200 selection:text-blue-900">

    <header
      class="bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-10  max-w-4xl text-center mx-auto">
      <div class="text-xl font-bold tracking-wide text-gray-800">
        CyanFalse's Resume
      </div>
      <div class="text-lg text-gray-500">
        Built with <img :src="VueIcon" class="w-5 h-5 inline-block mx-1 mb-1" alt="Vue.js" /> Vue.js
      </div>
    </header>

    <main class="max-w-4xl mx-auto bg-white shadow-sm md:my-8 md:p-12 p-6 rounded-sm">

      <section class="mb-8">
        <h1 class="text-4xl font-bold text-center mb-8 tracking-widest text-gray-900">{{ _$.VAR.CYANFALSE_REALNAME[_$$]
        }}
          的 个人简历</h1>
        <CenterSection />
      </section>

      <section class="mb-10 text-lg">
        <h2 class="text-3xl font-bold mb-4 pb-2 border-b border-gray-200 text-gray-900">专业技能</h2>
        <ul class="list-disc list-outside ml-5 space-y-2 text-gray-700 leading-relaxed">
          <li>深入掌握 JavaScript 及其衍生框架 Vue，熟练运用 React、Next.js (Vue 3) 进行全栈/前端开发；精通 Tailwind CSS 及原子化 CSS 方案。</li>
          <li>熟练使用 Node.js 构建轻量后端服务；了解并掌握无服务器架构设计与部署，具备使用Docker、K8s等工具进行容器化和编排的经验。</li>
          <li>精通 Vite、Rollup、Webpack 等构建工具的配置与插件开发，完全了解Git/SVN工作流，具有领导团队开发和管理项目经验。</li>
          <li>熟悉 Java/Kotlin 移动端开发架构，具备跨端协作与 Native 原生能力调用经验；了解并掌握 Python 在自动化、AI及数据处理中的应用。了解 Go
            语言在高并发、云原生服务开发中的优势与应用场景。</li>
          <li>熟练使用<b>AI工具</b>加速开发流程，同时也具备<b>完全脱离AI工具</b>独立开发的能力。</li>
        </ul>
      </section>

      <section>
        <h2 class="text-3xl font-bold mb-6 pb-2 border-b border-gray-200 text-gray-900">竞赛项目与证书</h2>
        <CompetitionProject />

        <h2 class="text-3xl font-bold mb-6 pb-2 border-b border-gray-200 text-gray-900">开源项目</h2>
        <OpensourceProject />

      </section>
    </main>
  </div>
</template>



<style></style>