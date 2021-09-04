<template>
  <div>
    <a-card class="menu-card">
      <h1>Menu</h1>
      <a-menu class="menu" mode="vertical">
        <a-menu-item key="1">
          <a-icon type="mail" />
          Navigation One
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="calendar" />
          Navigation Two
        </a-menu-item>
      </a-menu>
    </a-card>
  </div>
</template>
<script>
export default {
  name: 'Menu',
}
</script>
