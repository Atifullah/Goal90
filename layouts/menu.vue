<template>
  <div class="side-menu">
    <div>
      <row>
        <a-col class="">
          <img
            src="../assets/images/football90plus.png"
            alt="Italian Trulli"
            class="logo-class"
          />
        </a-col>
        <a-col class="">
          <!-- <a-input-search
            placeholder="input search text"
            style="
              width: 252px;
              height: 42px;
              color: #fff;
              background-color: black;
            "
            @search="onSearch"
            class="search-input"
          /> -->
        </a-col>
      </row>
    </div>

    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      class="side-manu-main"
    >
      <a-menu-item key="1">
        <a-icon type="home" />
        <span>Home</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="usergroup-add" />
        <span>Leader</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="box-plot" />
        <span>Ground</span>
      </a-menu-item>
      <a-menu-item key="4">
        <a-icon type="message" />
        <span>Chat</span>
      </a-menu-item>
      <a-menu-item key="5">
        <a-icon type="notification" />
        <span>Notification</span>
      </a-menu-item>
      <a-col class="line">
        <img src="../assets/images/Line.jpg" />
      </a-col>
      <a-menu-item key="6">
        <a-icon type="solution" />
        <span>followed team</span>
        <span>
          <a-icon type="right" class="ml-4" />
        </span>
      </a-menu-item>
      <a-menu-item key="7">
        <a-icon type="team" />
        <span>followed players</span>
        <span>
          <a-icon type="right" class="ml-3" />
        </span>
      </a-menu-item>
      <a-menu-item key="8">
        <a-icon type="box-plot" />
        <span>followed ground</span>
        <span>
          <a-icon type="right" class="ml-3" />
        </span>
      </a-menu-item>
      <a-col class="line">
        <img src="../assets/images/Line.jpg" />
      </a-col>
      <a-menu-item key="9">
        <a-icon type="setting" />
        <span>Settings</span>
      </a-menu-item>
      <a-menu-item key="10">
        <a-icon type="download" />
        <span>Download The App</span>
      </a-menu-item>
      <a-col class="buttons-class mt-4">
        <a-button-group :size="size" class="primery-button-class">
          <a-button type="primary" class="button1">
            <a-icon type="left" />Dark
          </a-button>
          <a-button type="primary" class="button1">
            Light<a-icon type="right" />
          </a-button>
        </a-button-group>
      </a-col>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    },
  },
}
</script>
<style scoped lang="scss">
@import '../assets/scss/global/home/menu.scss';
</style>
