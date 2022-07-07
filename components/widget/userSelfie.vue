<template>
    <div class="personal-info row mt-4 pt-2 pt-md-0 mt-md-5 px-0 px-md-2 px-lg-4">
        <div class="col-md-7">
            <label class="w-100 mb-3 font-weight-bold">
                انتخاب تصویر سلفی :
                <file-pond
                    name="file"
                    class="mt-1"
                    ref="pond_img"
                    :allowImagePreview="true"
                    :instant-upload="false"
                    label-idle="برای آپلود تصویر را اینجا انداخته یا انتخاب کنید"
                    :allow-multiple="false"
                    accepted-file-types="image/jpeg, image/png"
                    :server="{url:uploadUrl ,process:{onload:(response)=>imgUploadResponse(response)}}"
                    v-bind:files="files"/>
            </label>
            <Btn @click="uploadImg()" class="mt-1 py-2 rounded font-weight-bold" width="full" size="small">
                ثبت و آپلود تصویر سلفی
            </Btn>
        </div>
        <div class="img-info col-md-5 px-2 px-md-4 d-flex flex-column align-items-center justify-content-center">
            <span
                class="status-info mt-4 mt-md-0 d-flex align-items-center justify-content-center font-weight-bold w-100 py-2 rounded px-2 nt-1">
                <b-icon class="ml-1" icon="file-earmark-plus"></b-icon>
                در انتظار ثبت تصویر سلفی...
            </span>
            <img draggable="false" loading="lazy" class="img-fluid" src="/img/auth/selfie.png" alt="">
        </div>
    </div>
</template>

<script>
import vueFilePond from 'vue-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
);
import Btn from './btn.vue'
export default {
    layout: 'dashboard',
    components: {
        FilePond,
        Btn
    },
    props: [],
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
.personal-info{
  >div{
    label , div{
      font-size: 13px;
      color: $black-600;
    }
  }
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
}
</style>