<template>
  <div id="app">
    <TreeSelect :orgTreeArr="orgTreeArr" :columns="columns" :peopleList="peopleList"></TreeSelect>
  </div>
</template>

<script>

import TreeSelect from "@/components/TreeSelect.vue";
import {getTreeSelect, peopleList} from "@/api/user";

export default {
  name: 'App',
  components: {TreeSelect},
  data() {
    return {
      orgTreeArr: [1, 2, 3],
      columns: [],
      show: false,
      dialogVisible: false,
      peopleList: []
    }
  },
  created() {
    getTreeSelect().then(res => {
      this.columns = res.data
    })

    peopleList().then(res => {
      this.peopleList = res.data

      console.log(this.peopleList)
    })
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  }
}
</script>

<style lang="scss" scoped>
.el-dialog__wrapper {
  z-index: 999999 !important;
}
</style>
