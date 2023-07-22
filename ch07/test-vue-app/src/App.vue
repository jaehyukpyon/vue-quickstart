<template>
  <div>
      <h2>K-POP?</h2>
      <hr>
      <ul>
        <!-- <CheckboxItem v-for="idol in idols" :key="idol.id" :name="idol.name" :checked="idol.checked" /> -->
        <!-- <checkbox-item v-for="idol in idols" :key="idol.id" v-bind="idol" /> -->
        <CheckboxItem v-for="idol in idols" :key="idol.id" :idol="idol" />
      </ul>
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
        ]
      };
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