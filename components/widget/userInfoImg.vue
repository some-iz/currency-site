<template>
  <div :class="`${width} img-info px-2 px-md-4 d-flex flex-column align-items-center justify-content-center`">
    <span
      class="status-info mt-4 mt-md-0 d-flex align-items-center justify-content-center font-weight-bold w-100 py-2 rounded px-2 nt-1">
      <b-icon v-if="status === 1" class="ml-1" icon="file-earmark-plus"></b-icon>
      {{title}}
    </span>
    <img draggable="false" loading="lazy" class="img-fluid" :src="imgSrc" :alt="imgAlt">
  </div>
</template>

<script>
export default {
    props: ['title' , 'imgSrc' , 'imgAlt' ,'status' , 'width']
}
</script>

<style lang="scss" scoped>
.img-info{
    img{
      max-width: 440px;
      width: 100%;
    }
    .status-info{
      background: $red-50;
      border: 2px solid $red-100;
      font-size: 14px;
      color: $black-600;
      svg{
        font-size: 20px;
      }
    }
}
</style>