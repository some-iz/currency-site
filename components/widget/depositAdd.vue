<template>
    <div class="w-100">
        <label class="w-100 mb-3 font-weight-bold">
            مبلغ واریزی :
            <input class="input-form w-100 mt-1" type="text" />
        </label>
        <Btn class="mt-3 py-2 rounded font-weight-bold" width="full" size="small">
            اتصال به درگاه پرداخت
        </Btn>
    </div>
</template>

<script>
import Btn from './btn.vue';
export default {
    components: { Btn }
}
</script>

<style lang="scss" scoped>

</style>