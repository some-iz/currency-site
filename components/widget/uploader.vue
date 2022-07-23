<template>
  <div :class="width">
    <label class="w-100 mb-3 font-weight-bold">
      {{label}} :
      <file-pond name="file" class="mt-1" ref="pond_img" :allowImagePreview="true" :instant-upload="false"
        label-idle="برای آپلود تصویر را اینجا انداخته یا انتخاب کنید" :allow-multiple="false"
        accepted-file-types="image/jpeg, image/png"
        @processfilestart="setLoading(true)"
        :server="{
            url: uploadUrl ,
            process:{onload:(response)=>imgUploadResponse(response)}
        }" :files="files" />
    </label>
    <Btn :loading="loading" @click="uploadImg()" class="mt-1 py-2 rounded font-weight-bold" width="full" size="small">
      {{btnTitle}}
    </Btn>
  </div>
</template>

<script>
import Btn from './btn.vue'
import vueFilePond from 'vue-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
);
export default {
    props: {
        width: {
            default: 'w-100',
            type: String
        },
        btnTitle: {
            default: 'ثبت و آپلود تصویر',
            type: String
        },
        label: {
            default: 'انتخاب تصویر',
            type: String
        },
        method: {
            type: String
        }
    },
    components: {
        FilePond,
        Btn,
    },
    data() {
        return {
            files: [],
            loading: false
        }
    },
    computed: {
        uploadUrl() {
            return `https://api.faraex.ir/${this.$store.state.userToken}/upload`
        },
    },
    methods:{
        uploadImg(){
            if (document.querySelectorAll('.filepond--action-process-item')[0]) {
                this.loading = true
                document.querySelectorAll('.filepond--action-process-item')[0].click()
            }
        },
        setLoading(status) {
            this.loading = status
        },
        async imgUploadResponse(data) {
            const result = JSON.parse(data);
            if (result["ok"] === "true") {
                let res = await this.$store.dispatch('upload/mainUploader', { method: this.method, imgToken: result['data'][0]["token"] })
                if (res['ok'] === 'true') {
                    this.$fire({
                        title: "موفق",
                        text: "تصویر شما با موفقیت آپلود گردید.",
                        type: "success",
                        timer: 10000
                    })
                }
                else {
                    this.$fire({
                        title: "فایل آپلود نشد.",
                        text: "مشکلی در آپلود فایل بوجود آمده است!",
                        type: "warning",
                        timer: 10000
                    })
                }
                this.$refs.pond_img.removeFile();
            }
            else {
                this.$refs.pond_img.removeFile();
                this.$fire({
                    title: "فایل آپلود نشد!",
                    text: result["msg"],
                    type: "warning",
                    timer: 10000
                })
            }
            this.loading = false

        },
    }
}
</script>

<style lang="scss" scoped>
div{
    label , div{
      font-size: 13px;
      color: $black-600;
    }
}
</style>