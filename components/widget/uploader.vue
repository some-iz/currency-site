<template>
  <div :class="width">
    <label class="w-100 mb-3 font-weight-bold">
      {{label}} :
      <file-pond name="file" class="mt-1" ref="pond_img" :allowImagePreview="true" :instant-upload="false"
        label-idle="برای آپلود تصویر را اینجا انداخته یا انتخاب کنید" :allow-multiple="false"
        accepted-file-types="image/jpeg, image/png"
        :server="{url:uploadUrl ,process:{onload:(response)=>imgUploadResponse(response)}}" v-bind:files="files" />
    </label>
    <Btn @click="uploadImg()" class="mt-1 py-2 rounded font-weight-bold" width="full" size="small">
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
    },
    components: {
        FilePond,
        Btn,
    },
    data() {
        return {
            files: []
        }
    },
    computed: {
        uploadUrl() {
            return `https://joorweb.ir/${this.$store.state.userToken}/upload?store_token=${this.$store.state.storePublicToken}`
        },
    },
    methods:{
        uploadImg(){
            if(document.querySelectorAll('.filepond--action-process-item')[0])
                document.querySelectorAll('.filepond--action-process-item')[0].click()
        }
    //     async imgUploadResponse(data) {
    //   const result = JSON.parse(data);
    //   if (result["ok"] === "true") {
    //     this.$store.commit('admin/files/addNewFileToList',result.data[0])
    //     this.$fire({
    //       title: "عملیات موفق",
    //       text: "فایل/فایلهای شما با موفقیت آپلود گردید...",
    //       type: "success",
    //       timer: 10000
    //     })
    //     this.$refs.pond_img.removeFile();
    //   }
    //   else{
    //     this.$refs.pond_img.removeFile();
    //     this.$fire({
    //       title: "فایل آپلود نشد!",
    //       text: result["msg"],
    //       type: "error",
    //       timer: 10000
    //     })
    //   }
    // },
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