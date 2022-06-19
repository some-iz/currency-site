<template>
    <section @mousedown.self="setClicked()" :class="[isActive ? 'clicked' : '' , 'custom-modal d-flex align-items-center justify-content-center']">
        <div class="main-modal p-3">
            <div class="head d-flex align-items-center justify-content-between pb-2 pt-1">
                <h5 class="font-weight-bold">ورود / ثبت نام</h5>
                <b-icon-x></b-icon-x>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false,
                checker: 0
            }
        },
        methods:{
            setClicked() {
                if (this.checker === 0) {
                    this.isActive = true
                    this.checker = 1
                    setTimeout(() => {
                        this.isActive = false
                        this.checker = 0
                    }, 600)
                }
            }
        }
    }
</script>

<style lang="scss">
body{
    overflow-y: hidden;
}
.custom-modal{
    background: $black-350;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    z-index: 99119;
    .main-modal{
        width: 400px;
        height: 300px;
        background: $white-full;
        transition: .3s;
        border-radius: 20px;
        .head{
            border-bottom: 2px solid $black-150;
            color: $black-600;
            svg{
                cursor: pointer;
                font-size: 25px;
                color: $error-color;
            } 
        }
    }
}
.clicked .main-modal {
    animation: changeScale .5s;
}
@keyframes changeScale{
    0%{
        transform: scale(1);
    }
    25%{
        transform: scale(1.05);
    }
    50% {
        transform: scale(1);
    }
    75% {
        transform: scale(1.02);
    }
    100% {
        transform: scale(1);
    }
}
</style>