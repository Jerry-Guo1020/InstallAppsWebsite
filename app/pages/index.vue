<template>
  <div class="layout-bg">
    <!-- 左侧渐变导航栏 -->
    <aside class="sidebar">
      <div class="logo-area">
        <img src="/1.jpg" alt="logo" class="logo-img" />
        <span class="logo-text">安装工具箱</span>
      </div>
      <ul class="nav-list">
        <li
          v-for="item in categories"
          :key="item"
          class="nav-item"
          :class="{ active: item === activeCategory }"
          @click="activeCategory = item"
        >
          <!-- 移除了图标显示 -->
          {{ item }}
        </li>
      </ul>
    </aside>

    <!-- 主体区 -->
    <div class="main-panel">
      <!-- 顶部区域 -->
      <header class="header-bar">
        <input class="search-bar" v-model="search" placeholder="搜索工具/网站" />
      </header>
      <!-- 内容区 -->
      <div class="content-area">
        <div v-if="filteredApps.length === 0" class="no-data">
          没有找到相关工具
        </div>
        <div class="apps-list">
          <AppCard
            v-for="app in filteredApps"
            :key="app.url"
            :app="app"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppCard from '~/components/AppCard.vue'
import { apps } from '~/data/apps.js'

// 自动收集所有分类（保持出现顺序），并在最前面添加“全部”
const categories = ['全部', ...Array.from(new Set(apps.map(a => a.category)))];

// 当前高亮分类，默认选中“全部”
const activeCategory = ref(categories[0])

// 搜索框内容
const search = ref('')

// 分类和搜索过滤
const filteredApps = computed(() =>
  apps.filter(app => {
    const matchesCategory = activeCategory.value === '全部' || app.category === activeCategory.value;
    const matchesSearch = !search.value || app.name.toLowerCase().includes(search.value.toLowerCase());
    return matchesCategory && matchesSearch;
  })
)
</script>

<style scoped>
@import url('//at.alicdn.com/t/c/font_4324367_85px5i6l9q.css');

.layout-bg {
  min-height: 100vh;
  display: flex;
  background: linear-gradient(120deg, #e6c7f7 0%, #bcf3f8 100%);
}

.sidebar {
  width: 210px;
  background: linear-gradient(120deg, #e1cfff 0%, #d6ebff 100%);
  padding: 36px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 18px #0001;
  overflow: hidden;
}
.logo-area {
  display: flex;
  align-items: center;
  margin-bottom: 36px;
}
.logo-img {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  margin-right: 10px;
  background: #fff;
  object-fit: cover;
}
.logo-text {
  font-weight: bold;
  font-size: 1.25rem;
  color: #8342e6;
  letter-spacing: 1px;
}
.nav-list {
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}
.nav-item {
  width: 100%;
  padding: 12px 34px;
  color: #6b6389;
  font-size: 1.08rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.13s;
  border-radius: 16px 0 0 16px;
  user-select: none;
}
.nav-item .iconfont {
  margin-right: 12px;
  font-size: 1.22rem;
}
.nav-item.active,
.nav-item:hover {
  background: #fff5;
  color: #8342e6;
  font-weight: bold;
}

.main-panel {
  flex: 1;
  padding: 0 0 0 0;
  display: flex;
  flex-direction: column;
}
.header-bar {
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 0 38px;
  background: rgba(255,255,255,0.35);
  box-shadow: 0 4px 18px #0001;
  margin-bottom: 26px;
}
.search-bar {
  width: 340px;
  border: none;
  border-radius: 24px;
  background: #fafafd;
  height: 36px;
  font-size: 1rem;
  padding: 0 20px;
  outline: none;
  box-shadow: 0 2px 7px #e1cfff22;
  
}
.user-area {
  display: flex;
  align-items: center;
}
.user-icon {
  font-size: 2rem;
  color: #7a4ff7;
  background: #fff;
  border-radius: 50%;
  padding: 6px;
  box-shadow: 0 2px 8px #b8f7ff2a;
  transition: box-shadow 0.18s;
}

.content-area {
  flex: 1;
  padding: 20px 32px 32px 32px;
  background: rgba(255,255,255,0.32);
  border-radius: 22px;
  margin: 0 22px 24px 24px;
  min-height: 650px;
  overflow: auto;
  box-shadow: 0 6px 40px #e3d6fd26;
}
.no-data {
  text-align: center;
  color: #9b8be1;
  font-size: 1.2rem;
  margin: 44px 0 16px 0;
  font-weight: bold;
}

.apps-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px 38px;
  justify-content: flex-start;
  padding-top: 10px;
}
</style>
