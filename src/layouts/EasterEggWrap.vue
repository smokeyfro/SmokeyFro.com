<template>
	<div><slot /></div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
	components: {
        Logo
	},
	methods: {
      start() {
        this.$confetti.start();
      },

      stop() {
        this.$confetti.stop();
      },

      love() {
        this.$confetti.update({
          particles: [
            {
              type: 'heart',
            },
            {
              type: 'circle',
            },
          ],
          defaultColors: [
            'red',
            'pink',
            '#ba0000'
          ],
        });
      }
    }
}
</script>