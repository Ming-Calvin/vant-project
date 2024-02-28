<template>
  <div id="app">
    <TreeSelect :orgTreeArr.sync="orgTreeArr"
                :columns="columns"
                v-if="peopleList"
                :treeValue.sync="modelValue"
                :peopleList="peopleList">
    </TreeSelect>

    <!--<div @click="onClick"> click </div>-->

    <!--<ModelExplain v-model:modelValue></ModelExplain>-->

    <!--<ModelExplain :modelValue="modelValue" @modelChange="modelChange"></ModelExplain>-->
  </div>
</template>

<script>

import TreeSelect from "@/components/TreeSelect.vue";
import {getTreeSelect, peopleList} from "@/api/user";
import ModelExplain from "@/components/ModelExplain.vue";

export default {
  name: 'App',
  components: {ModelExplain, TreeSelect},
  data() {
    return {
      orgTreeArr: [],
      columns: [],
      peopleList: null,
      modelValue: 0
    }
  },
  created() {
    getTreeSelect().then(res => {
      this.columns = res.data
    })

    peopleList().then(res => {
      this.peopleList = res
    })
  },
  methods: {
    onClick() {
      console.log(this.orgTreeArr)
    },
    modelChange(val) {
      this.modelValue = val
    }
  }
}
</script>

<style lang="scss" scoped>
.el-dialog__wrapper {
  z-index: 999999 !important;
}
</style>
