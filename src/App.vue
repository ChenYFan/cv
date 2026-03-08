<script setup>
import { onMounted, ref, provide } from 'vue'
import Crypter from './utils/crypter.js';
import Mark from './utils/mark.vue'
import CenterSection from './component/centerSection.vue'
import OpensourceProject from './component/opensourceProject.vue';
import CompetitionProject from './component/competitionProject.vue';

import MyCert from './markdown/myCert.md?raw'
import MyselfSummary from './markdown/myselfSummary.md?raw'
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

const searchParams = new URLSearchParams(window.location.search)
onMounted(() => {
  const key = searchParams.get('key')
  if (checkKey(key)) {
    for (const k in _$.VAR){
       _$.VAR[k][1] = crypter.decrypt(_$.VAR[k][1], key).replace(/\<\|\|\>/g, ' ')
       if(k.match(/_IMAGE$/)) _$.VAR[k][1] = "https://i.eurekac.cn/" + _$.VAR[k][1]
    }
    _$$.value = 1
    if (!Boolean(searchParams.get('nopingfang'))) document.documentElement.style.setProperty('--app-font-family', '"PingFang", sans-serif');
  }
})

provide('resumeContext', { _$, _$$ });

</script>

<template>
  <div class="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-blue-200 selection:text-blue-900">

    <header
      class="bg-white border-b border-gray-100 py-2 px-2 md:px-12 flex justify-between items-center sticky top-0 z-999  max-w-4xl text-center mx-auto text-center">
      <div class="text-base font-bold tracking-wide text-gray-800 w-full md:w-auto">
        CyanFalse's Resume
      </div>
      <div class="text-base text-gray-500 hidden md:block">
        Built with <img :src="VueIcon" class="w-5 h-5 inline-block mx-1 mb-1" alt="Vue.js" /> Vue.js
      </div>
    </header>

    <main class="max-w-4xl mx-auto bg-white shadow-sm md:my-2 p-6 pt-0 rounded-sm print:border-none print:shadow-none">

      <section class="flex flex-row items-start gap-8">
        <CenterSection />
      </section>

      <section class="mb-2 ">
        <h2 class="titleh">专业技能</h2>
        <ul class="list-disc list-outside ml-5 space-y-2 text-gray-700 leading-relaxed text-base">
          <li>擅长JavaScript及衍生框架Vue，熟练React、Next.js进行前端开发</li>
          <li>熟练NodeJS构建轻量后端服务，具备使用Serverless架构、容器和集群的经验。</li>
          <li>精通Vite、Rollup等构建工具的配置与插件开发，熟练Git/SVN，具有领导团队开发经验。</li>
          <li>熟悉Kotlin移动端开发，了解并掌握Python、Go在数据处理与云原生服务开发中的优势。</li>
          <li>熟练使用<b>AI工具</b>加速开发流程，同时也具备<b>完全脱离AI工具</b>独立开发的能力。</li>
        </ul>
      </section>

      <section>
        <h2 class="titleh">开源经历</h2>
        <OpensourceProject />
        <!-- <div class="print:break-before-page" /> -->
        <h2 class="titleh print:pt-3">项目经验</h2>
        <CompetitionProject />
        <h2 class="titleh print:pt-3">证书与荣誉</h2>
        <Mark :content="MyCert
          .replace(/SERVICE_OUTSOURCING_16_IMAGE/g, _$.VAR.SERVICE_OUTSOURCING_16_IMAGE[_$$])
          .replace(/COMPUTE_DESIGN_17_IMAGE/g, _$.VAR.COMPUTE_DESIGN_17_IMAGE[_$$])
          .replace(/COMPUTE_DESIGN_18_IMAGE/g, _$.VAR.COMPUTE_DESIGN_18_IMAGE[_$$])
          .replace(/CN_SERVICE_OUTSOURCING_11_IMAGE/g, _$.VAR.CN_SERVICE_OUTSOURCING_11_IMAGE[_$$])
          " class="text-gray-700 leading-relaxed text-sm" />
        <h2 class="titleh print:pt-3">自我总结</h2>
        <Mark :content="MyselfSummary" class="text-gray-700 leading-relaxed text-sm" />
      </section>
    </main>
  </div>
</template>



<style></style>