<template>
    <samp @click="copySomething(text)">
        <b-icon-clipboard-plus> </b-icon-clipboard-plus>
    </samp>
</template>

<script>
export default {
    props: ['text' , 'id'],
    methods: {
        async copySomething(text) {
            try {
                await this.$copyText(text);
                this.$fire({
                    title: "عملیات موفق",
                    text: "متن انتخابی با موفقیت کپی شد...",
                    type: "success",
                    timer: 10000
                });
            }
            catch (e) {
                console.error(e);
            }
        },
    }
}
</script>

<style lang="scss" scoped>
samp {
    display: inline-block;
    font-size: 17px;
    overflow-wrap: anywhere;
    cursor: pointer;
    background: $primary_color;
    padding: 6px;
    width: 32px;
    height: 32px;
    border-radius: 10px;
    svg {
        transform: translateY(-2px);
    }
}
</style>