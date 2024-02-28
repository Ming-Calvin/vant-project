<template>
  <div>
    <van-checkbox-group v-model="orgTreeArr">
      <div v-for="(item, index) in columns" :key="index">
        <!--level1-->
        <div class="level1">
          <div class="icon" v-if="iconShow(item)" @click="toggleShow(index)">
            <van-icon name="minus" size="10" v-if="item.isShow"></van-icon>
            <van-icon name="plus" size="10" v-else></van-icon>
          </div>
          <van-checkbox :name="item" icon-size="14px" shape="square"></van-checkbox>
          <div> {{ item.name }}</div>
        </div>

        <!--level2-->
        <div class="level2">
          <TreeSelect :columns="item.children" :orgTreeArr="orgTreeArr" v-show="item.isShow"></TreeSelect>
          <van-checkbox-group v-model="result">
            <van-checkbox
                v-for="(sItem, sIndex) in peopleList[item.id]"
                :key="sIndex"
                :name="sItem.value"
                shape="square"
            >
              <div> {{ sItem.name }}</div>
            </van-checkbox>
          </van-checkbox-group>
        </div>
      </div>
    </van-checkbox-group>
  </div>
</template>

<script>
import {getTreeSelect} from "@/api/user";

export default {
  name: 'TreeSelect',
  data() {
    return {
      orgTreeArr: [1, 2, 3],
      result: [],
      peopleList: []
    }
  },
  props: {
    // orgTreeArr: { type: Array },
    columns: { type: Array }
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
</style>
