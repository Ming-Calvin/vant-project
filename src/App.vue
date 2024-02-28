<template>
  <div id="app">
    <TreeSelect :orgTreeArr="orgTreeArr" :columns="columns"></TreeSelect>
  </div>
</template>

<script>

import TreeSelect from "@/components/TreeSelect.vue";
import {getTreeSelect} from "@/api/user";

export default {
  name: 'App',
  components: {TreeSelect},
  data() {
    return {
      orgTreeArr: [1, 2, 3],
      columns: [],
      show: false,
      dialogVisible: false,
    }
  },
  created() {
    getTreeSelect().then(res => {
      this.columns = res.data
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
