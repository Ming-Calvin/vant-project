<template>
  <div>
    <!--
      实质是：
      v-model 其实是 v-bind + @xx事件
      当@xx事件触发，调用 this.$emit

    -->
    <ModelExplain v-model="modelValue"></ModelExplain>

    <!--<van-checkbox-group v-model="localData" @change="orgChangeSelect">-->
    <!--  <div v-for="(item, index) in columns" :key="index">-->
    <!--    &lt;!&ndash;level1&ndash;&gt;-->
    <!--    <div class="level1">-->
    <!--      <div class="icon" v-if="iconShow(item)" @click="toggleShow(index)">-->
    <!--        <van-icon name="minus" size="10" v-if="item.isShow"></van-icon>-->
    <!--        <van-icon name="plus" size="10" v-else></van-icon>-->
    <!--      </div>-->
    <!--      <van-checkbox :name="item" icon-size="14px" shape="square"></van-checkbox>-->
    <!--      <div> {{ item.name }}</div>-->
    <!--    </div>-->

        <!--level2-->
        <!--<div class="level2">-->
        <!--  <TreeSelect :columns="item.children" :peopleList="peopleList" :orgTreeArr="orgTreeArr" v-show="item.isShow"></TreeSelect>-->

        <!--  <van-checkbox-group v-model="result">-->
        <!--    <van-checkbox-->
        <!--        v-for="(sItem, sIndex) in peopleList[item.id]"-->
        <!--        :key="sIndex"-->
        <!--        :name="sItem.value"-->
        <!--        shape="square"-->
        <!--    >-->
        <!--      <div> {{ sItem.name }}</div>-->
        <!--    </van-checkbox>-->
        <!--  </van-checkbox-group>-->
        <!--</div>-->
    <!--  </div>-->
    <!--</van-checkbox-group>-->
  </div>
</template>

<script>

import ModelExplain from "@/components/ModelExplain.vue";

export default {
  name: 'TreeSelect',
  components: {ModelExplain},
  data() {
    return {
      result: [],
      localData: this.orgTreeArr,
      modelValue: 0
    }
  },
  props: {
    orgTreeArr: { type: Array },
    columns: { type: Array },
    peopleList: { type: Object },
    treeValue: { type: Number }
  },
  methods: {
    // 图标展示
    iconShow(item) {
      if(item.children && item.children.length > 0) {
        return true
      }
      return false
    },
    toggleShow(index) {
      this.$set(this.columns, index, { ...this.columns[index], isShow: !this.columns[index].isShow })
    },
    orgChangeSelect(item) {
      this.$emit('update:orgTreeArr', item);
    },
    modelChange(val) {
      this.modelValue = val
    }
  },
  created() {
  }
}

</script>


<style lang="scss" scoped>
* {
  font-size: 20px;
}

.level1 {
  width: 100%;
  height: 20px;
  margin: 10px 0;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;

  .icon {
    margin-right: 10px;
    height: 28px;
  }
}

.level2 {
  padding: 0 0 0 30px;
}
</style>
