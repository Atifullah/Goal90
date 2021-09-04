<template>
  <div class="dashboard-layout">
    <a-layout>
      <a-layout-sider
        :style="{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }"
      >
        <div class="user-info">
          <img src="~/assets/images/default-user" alt="" srcset="" />
        </div>
        <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
          <a-menu-item key="1">
            <a-icon type="user" />
            <span class="nav-text">nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="video-camera" />
            <span class="nav-text">nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="upload" />
            <span class="nav-text">nav 3</span>
          </a-menu-item>
          <a-menu-item key="4">
            <a-icon type="bar-chart" />
            <span class="nav-text">nav 4</span>
          </a-menu-item>
          <a-menu-item key="5">
            <a-icon type="cloud-o" />
            <span class="nav-text">nav 5</span>
          </a-menu-item>
          <a-menu-item key="6">
            <a-icon type="appstore-o" />
            <span class="nav-text">nav 6</span>
          </a-menu-item>
          <a-menu-item key="7">
            <a-icon type="team" />
            <span class="nav-text">nav 7</span>
          </a-menu-item>
          <a-menu-item key="8">
            <a-icon type="shop" />
            <span class="nav-text">nav 8</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout :style="{ marginLeft: '200px' }">
        <a-layout-header :style="{ background: '#fff', padding: 0 }" />
        <a-layout-content
          :style="{ margin: '24px 16px 0', overflow: 'initial' }"
        >
          <Nuxt />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
export default {}
</script>
<style lang="sass">
@import '~/assets/scss/global/layout.scss'
</style>
