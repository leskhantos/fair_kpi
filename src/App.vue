<template>
  <a-layout style="height: 100vh;">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible theme="light">
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
          <a-menu-item key="1">
            <router-link to="/">
            <SettingOutlined />
          <span>Catalogue</span>
            </router-link>
          </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/watchlist">
          <HomeOutlined />
          <span>WatchList</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/my-favourites">
          <ProfileOutlined />
          <span>My Favourites</span>
          </router-link>
        </a-menu-item>
      </a-menu>
      <div class="toggle" @click="() => (collapsed = !collapsed)">
        <RightOutlined
            v-if="collapsed"
            class="trigger"
            style="color: rgba(0,0,0,0.45); margin-left: -15px;margin-top: 10px"
        />
        <LeftOutlined v-else class="trigger" style="color: rgba(0,0,0,0.45); margin-left: -15px;margin-top: 10px"/>
      </div>
  </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div style=" display:flex;height: inherit; align-items: center; justify-content: end; padding-right: 20px; ">
            <SearchOutlined style="fontSize: 20px; margin-right: 10px"/>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style="margin-right: 5px"/>
            <h1 style="margin-top: 10px; font-weight: 400">Joe Rogan Nicola Tesla</h1>
        </div>

      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 32px', padding: '24px', background: '#fff', minHeight: '280px', maxHeight: '720px' }"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  SettingOutlined,
  HomeOutlined,
  ProfileOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  RightOutlined,
  LeftOutlined,
  SearchOutlined
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    SettingOutlined,
    HomeOutlined,
    ProfileOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    RightOutlined,
    LeftOutlined,
    SearchOutlined
  },
  setup() {

    return {
      selectedKeys: ref<string[]>(['1']),
      collapsed: ref<boolean>(true),
    };
  },
});
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
.toggle{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 100%;
  cursor: pointer;
  border-bottom: 7px solid transparent;
  border-top: 7px solid transparent;
  border-left: 12px solid #fff;
  height: 50px;
}

</style>
