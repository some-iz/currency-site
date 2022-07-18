<template>
    <div class="w-100 d-flex tab-bar font-weight-bold mb-2">
        <div @click="setActiveTab(i)" v-for="(tab , i) in tabItems" :key="i" :class="[activeTab === i ? 'active' : '' , 'w-100 d-flex justify-content-center align-items-center']">
            {{tab}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['tabItems'],
    data() {
        return {
            activeTab: 0,
        }
    },
    methods: {
        setActiveTab(i) {
            this.$emit('sendActiveTab',i)
            this.activeTab = i
        }
    }
}
</script>

<style lang="scss" scoped>
.tab-bar{
  height: 60px;
  background: $black-50;
  overflow: hidden;
  border-radius: 8px;
  >div{
    height: 100%;
    cursor: pointer;
    font-size: 13.5px;
    color: $black-600;
    border-radius: 8px;
    transition: .3s ease-in;
  }
  .active{
    background: $black-700;
    color: $white-full;
  }
}
</style>