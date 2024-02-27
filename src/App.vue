<template>
  <div id="app">
    <TreeSelect :orgTreeArr="orgTreeArr" :columns="columns"></TreeSelect>
  </div>
</template>

<script>

import TreeSelect from "@/components/TreeSelect.vue";

export default {
  name: 'App',
  components: {TreeSelect},
  data() {
    return {
      orgTreeArr: [1, 2, 3],
      columns: [{
        id: 1,
        level: 1,
        name: '1xxx',
        isShow: false,
        children: [{
          id: 3,
          level: 2,
          name: '3xxx',
          isShow: false,
        }, {
          id: 4,
          level: 2,
          name: '4xxx',
          isShow: false,
        }]
      }, {
        id: 2,
        level: 1,
        name: '2xxx',
        isShow: false,
        children: [{
          id: 5,
          level: 2,
          name: '5xxx',
          isShow: false,
        }, {
          id: 6,
          level: 2,
          name: '6xxx',
          isShow: false,
        }]
      }]
    }
  }
}
</script>

<style>
</style>
