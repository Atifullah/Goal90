<template>
  <div>
    <a-card class="notefications">
      <a-row>
        <a-col :span="22">
          <h3>Notefication</h3>
        </a-col>
        <a-col :span="2">
          <a-icon type="small-dash" />
        </a-col>
      </a-row>
      <div>
        <a-list item-layout="horizontal" :data-source="data">
          <a-list-item
            slot="renderItem"
            slot-scope="item"
            class="notefications-list"
          >
            <a-list-item-meta description="09/4/2021">
              <span slot="title">
                {{ item.title }}
              </span>

              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </div>
      <div class="notefications-footer">
        <a-button type="primary"> view All </a-button>
      </div>
    </a-card>
  </div>
</template>
<script>
const data = [
  {
    title: 'Dr johnn Smith ',
  },
  {
    title: 'Dr johnn Smith',
  },
]
export default {
  name: 'Notefications',
  data() {
    return {
      data,
    }
  },
}
</script>
