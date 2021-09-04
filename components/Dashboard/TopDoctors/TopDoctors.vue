<template>
  <div>
    <a-card class="top-dostors-list">
      <div>
        <a-list item-layout="horizontal" :data-source="data">
          <a-list-item
            slot="renderItem"
            slot-scope="item"
            class="top-doctors-list-items"
          >
            <a-list-item-meta description="MBBS">
              <span slot="title">
                {{ item.title }}
              </span>

              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </a-list-item-meta>
            <span>
              <a-tag color="cyan" class="top-doctors-status"> Avaliable </a-tag>
            </span>
          </a-list-item>
        </a-list>
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
  {
    title: 'Dr johnn Smith',
  },
  {
    title: 'Dr johnn Smith',
  },
  {
    title: 'Dr johnn Smith ',
  },
  {
    title: 'Dr johnn Smith',
  },
]
export default {
  name: 'TopDoctors',
  data() {
    return {
      data,
    }
  },
}
</script>
