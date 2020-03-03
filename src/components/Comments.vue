<template>
    <div class="just-comments sf" data-apikey="51dd864a-782f-48a3-96d3-5b4f015ab62f" data-defaultuserpicurl="/favicon.png"></div>
</template>

<script>
    export default {
        metaInfo() {
            return {
                script: [
                    { src: "https://just-comments.com/w2.js", async: true, defer: true, type: "text/javascript" }
                ]
            };
        }
    };
</script>

<style src="../css/comments.css"></style>