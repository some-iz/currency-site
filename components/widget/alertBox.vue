<template>
    <div :class="`w-100 alert-box ${base}`">
        <div class="msg-alert-box d-flex align-items-stretch">
            <div class="icon-alert-box px-3">
                <b-icon :icon="icon" class="d-block h-100"></b-icon>
            </div>
            <div class="text-alert-box py-3 mr-2">
                <h5 class="font-weight-bold mb-1">
                    {{title}}
                </h5>
                <span>
                    {{msg}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        base: {
            default: 'success',
            type: String
        },
        icon: {
            default: 'check-circle-fill',
            type: String
        },
        title: {
            default: 'متن تست',
            type: String
        },
        msg: {
            default: 'در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان نگه داریم ',
            type: String
        },
    }
}
</script>

<style lang="scss" scoped>
.alert-box{
    border-radius: 5px;
    overflow: hidden;
    .msg-alert-box{
        .text-alert-box{
            span{
                font-size: 13px;
                font-weight: 500;
            }
        }
        .icon-alert-box{
            svg{
                font-size: 35px;
            }
        }
    }
}
.error{
    background: $red-50;
    .icon-alert-box{
        background: $error-color;
        color: $white-full;
    }
}
.disable{
    background: $black-50;
    .icon-alert-box{
        background: $black-900;
        color: $white-full;
    }
}
.success{
    background: $green-70;
    .icon-alert-box{
        background: $success-color;
        color: $white-full;
    }
}
</style>