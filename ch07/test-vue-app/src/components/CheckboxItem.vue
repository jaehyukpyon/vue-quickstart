<template>
  <li>
    <input type="checkbox" :checked="idol.checked">{{idol.name}}
  </li>
</template>

<script>
  export default {
    name: "CheckboxItem",
    props: [
      'idol',
    ],
    data() {
      return {
        
      };
    },
    beforeCreate() {
      console.log("CheckboxItem.vue beforeCreate()");
    },
    created() {
      console.log("CheckboxItem.vue created()");
    },
    beforeMount() {
      console.log("CheckboxItem.vue beforeMount()");
    },
    mounted() {
      console.log("CheckboxItem.vue mounted()");
    },
    beforeUpdate() {
      console.log("CheckboxItem.vue beforeUpdate()");
    },
    updated() {
      console.log("CheckboxItem.vue updated()");
    },
  }
</script>

<style scoped></style>