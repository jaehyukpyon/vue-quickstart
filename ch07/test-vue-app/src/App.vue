<template>
  <div>
      <h2>K-POP?</h2>
      <hr>
      <ul>
        
      </ul>
      <hr>
  </div>
</template>

<script>
  import CheckboxItem from './components/CheckboxItem.vue';

  export default {
    name: "App",
    components: {
      CheckboxItem,
    },
    data() {
      return {
        idols: [
          { id: 1, name: "BTS", checked: true },
          { id: 2, name: "Black Pink", checked: false },
          { id: 3, name: "EXO", checked: false },
          { id: 4, name: "ITZY", checked: false },
        ],
      };
    },
    methods: {
      
    },
    beforeCreate() {
      console.log("App.vue beforeCreate()");
    },
    created() {
      console.log("App.vue created()");
    },
    beforeMount() {
      console.log("App.vue beforeMount()");
    },
    mounted() {
      console.log("App.vue mounted()");
    },
    beforeUpdate() {
      console.log("App.vue beforeUpdate()");
    },
    updated() {
      console.log("App.vue updated()");
    },
  }
</script>

<style scoped>

</style>