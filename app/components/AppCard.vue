<template>
  <div class="app-card" @click="openUrl">
    <img :src="app.fallbackIcon" class="icon" :alt="app.name" />
    <!-- <img :src="faviconUrl" class="icon" :alt="app.name" @error="onImgError" /> -->
    <div class="name">{{ app.name }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  app: {
    type: Object,
    required: true
  }
})

// // 使用 Google Favicon API 获取 favicon
// const faviconUrl = computed(() => {
//   // 提取域名部分
//   let domain = props.app.url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
//   return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
// })

// // 加载失败兜底 (此函数已不再直接用于图片src，且如果图片src始终是本地路径，则此函数可能不再被触发)
// function onImg(e) {
//   // 检查 app 对象是否有 fallbackIcon 属性
//   if (props.app.fallbackIcon) {
//     e.target.src = props.app.fallbackIcon; // 使用 apps.js 中定义的兜底图标
//   } else {
//     // 如果没有 fallbackIcon，则使用默认的 CDN 图片
//     e.target.src = "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/google-chrome.png";
//   }
// }

// 点击跳转
function openUrl() {
  window.open(props.app.url, '_blank');
}
</script>

<style scoped>
.app-card {
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
  cursor: pointer;
  border-radius: 12px;
  transition: background 0.13s, transform 0.12s;
  padding: 10px 0 6px 0;
}
.app-card:hover {
  background: #e6eef8;
  transform: translateY(-3px) scale(1.08);
}
.icon {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
  border-radius: 10px;
  object-fit: contain;
  background: #fff;
  border: 1px solid #f2f2f2;
}
.name {
  font-size: .97rem;
  text-align: center;
  color: #222;
  margin-top: 3px;
}
</style>
