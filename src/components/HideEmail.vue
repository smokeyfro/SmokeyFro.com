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