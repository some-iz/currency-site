<template>
    <transition name="enter">
        <section v-if="showModal" @click.self="setClicked()" :class="[isActive ? 'clicked' : '' , 'custom-modal d-flex align-items-center justify-content-center']">
            <div class="main-modal mx-2 p-3">
                <div class="head mb-3 d-flex justify-content-between pb-1 pt-1">
                    <h5 class="font-weight-bold">
                        {{title}}
                    </h5>
                    <b-icon-x @click="$emit('closeModal' , false)"></b-icon-x>
                </div>
                <slot ></slot>
            </div>
        </section>
    </transition>
</template>

<script>
    export default {
        props: ['showModal' , 'title'],
        data() {
            return {
                isActive: false,
                checker: 0,
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

<style lang="scss" scoped>
.custom-modal{
    cursor: default;
    background: $black-350;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: fixed;
    z-index: 99119;
    .main-modal{
        min-width: 300px;
        background: $white-full;
        transition: .3s;
        border-radius: 20px;
        overflow: hidden;
        .head{
            border-bottom: 2px solid $black-150;
            color: $black-500;
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
.enter-enter-active {
  animation: enter-in 0.3s;
}
.enter-leave-active {
  animation: enter-in 0.3s reverse;
}
@keyframes enter-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>