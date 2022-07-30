<template>
    <b-sidebar :id="`sidebar-${id}`" class="toggler-sidebar" aria-labelledby="sidebar-no-header-title" no-header shadow>
        <template #default="{ hide }">
            <div class="p-3">
                <h4 class="border-bottom font-weight-bold pb-3 mb-3 d-flex align-items-center justify-content-between"
                    id="sidebar-no-header-title">
                    {{title}}
                    <Btn @click="hide" size="small" id="close" class="font-weight-bold">
                        <b-icon-x></b-icon-x>
                    </Btn>
                </h4>
                <slot></slot>
            </div>
        </template>
    </b-sidebar>
</template>

<script>
import Btn from './btn.vue';
export default {
    props: ['id', 'title'],
    components: { Btn }
}
</script>

<style lang="scss" scoped>

.toggler-sidebar {
    h4{
        font-size: 20px;
    }
    #close{
        width: 30px;
        display: flex;
        padding: 10px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        height: 30px;
        background: $black-20;
        box-shadow:  0 0 0 ;
        border: 2px solid $black-100;
        svg{
            font-size: 23px;
            color: $black-900
        }
    }
}
</style>