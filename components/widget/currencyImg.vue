<template>
    <img :class="isSecondBg ? 'default' : ''" :src="imgSrc" loading="lazy" :alt="faName + ' ' + symbol ">
</template>

<script>
export default {
    props: ["imgSrc", "symbol", "faName", "isSecondBg"],
}
</script>

<style lang="scss" scoped>
img{
    border-radius: 36% 64% 58% 42% / 29% 32% 68% 71%;
    width: 30px;
    height: 30px;
    background: $primary-color;
    padding: 4px;
}
.default{
    background:$default-color;
}
</style>