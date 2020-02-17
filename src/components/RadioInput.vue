<template id="radio-control-template">
  <span class="radio-control">
    <input
      class="input-bool"
      type="radio"
      tabindex="1"
      :name="name"
      :value="value"
      v-model="radioButtonValue"
    />
  </span>
</template>

<script>
console.clear();

Vue.component("RadioInput", {
  template: "#radio-control-template",
  model: {
    prop: "checked"
  },
  props: {
    name: String,
    value: String,
    tabindex: 1,
    checked: String
  },
  computed: {
    radioButtonValue: {
      get: function() {
        return this.checked;
      },
      set: function() {
        this.$emit("input", this.value);
      }
    }
  }
});

new Vue({
  data: {
    message_type: "message"
  }
});
</script>