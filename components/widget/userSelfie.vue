<template>
    <div class="personal-info row mt-4 pt-2 pt-md-0 mt-md-5 px-0 px-md-2 px-lg-4">
        <uploader method="user_image_set_selfi" label="انتخاب تصویر سلفی" btnTitle="ثبت و آپلود تصویر سلفی" width="col-md-7"></uploader>
        <user-info-img width="col-md-5" :status="1" title="در انتظار ثبت ثبت تصویر سلفی..." imgSrc="/img/auth/selfie.png" imgAlt="selfie"></user-info-img>
    </div>
</template>

<script>
import Uploader from './uploader.vue';
import UserInfoImg from './userInfoImg.vue';
export default {
    layout: 'dashboard',
    components: {
        UserInfoImg,
        Uploader
    },
    props: [],
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
</style>