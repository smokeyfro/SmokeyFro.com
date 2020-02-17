<template>
    <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        name="_replyto" 
        class="block w-full mt-1 form-input" 
    />
</template>
<script>
export default {
    props: {
        id: String,
        type: String,
        placeholder: String
    }
}
</script>