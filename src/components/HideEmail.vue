<template>
    <span class="reverse">{{reversedEmail}}</span>
</template>

<script>
    export default {
        name: 'hide-email',
        props: [ 'email' ],
        computed: {
            reversedEmail(){
                return this.email.split("").reverse().join("")
            }
        }
    }
</script>

<style scoped>
    span.reverse {
        unicode-bidi: bidi-override;
        direction: rtl;
    }
</style>