<template>
  <div class="step-head w-100 row m-0">
    <div v-for="(step , i) in steps" :key="i" 
      :class="[activeStep >= i ? 'active' : '','col-3 steper d-flex align-items-center justify-content-center']"
    >
      <div @click="stepSet(i)" class="d-flex flex-column">
        <b-icon :icon="step.icon"></b-icon>
        <span class="mt-1">
         {{step.title}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['steps'],
  data() {
    return {
      activeStep: 0
    }
  },
  methods:{
    stepSet(i){
      this.activeStep = i
    }
  }
}
</script>

<style lang="scss" scoped>
.step-head{
  height: 60px;
  .steper{
    position: relative;
    z-index: 0;
    svg{
      font-size: 40px;
      background: $steper-color;
      border-radius: 50%;
      padding: 10px;
      color: $black-500;
      cursor: pointer;
      transition: .25s ease-in;
    }
    span{
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      color: $black-550;
    }
  }
  .steper::before{
    position: absolute;
    right: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 3px;
    transform: translateY(-12px);
    background:$steper-color;
    z-index: -1;
    transition: .25s ease-in;
  }
  .steper.active svg , .steper.active::before{
    background: $primary-color;
    color: $white-full;
  }
}
</style>