<template>
  <div>
    {{ value }}

    <button @click="onClick"> click </button>
  </div>
</template>

<script>
export default {
  name: "ModelExplain",
  props: ['value'],
  methods: {
    onClick() {

      console.log(this.value, 'this.value')
      this.$emit('input', this.value + 1)
    }
  }
}

</script>


<style scoped lang="scss">

</style>