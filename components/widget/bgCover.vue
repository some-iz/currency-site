<template>
  <div class="img-cover"></div>
</template>

<style lang="scss" scoped>
.img-cover{
    transform: skew(-50deg, 190deg) scale(1.5, 1.5);
    background: $gold-color;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: .09;
}
</style>