<template>
  <li>
    <input type="checkbox" v-model="idol.checked">{{idol.name}}
    <button @click="checkmethod">button</button>
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
    methods: {
      checkmethod() {
        console.log(this.idol.checked);
      }
    },
    beforeCreate() {
      console.log("CheckboxItem.vue beforeCreate()");
    },
    created() {
      console.log("CheckboxItem.vue created()");
      this.idol.checked = true;
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