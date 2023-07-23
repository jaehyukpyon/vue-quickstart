<template>
  <div>
    <InputName @nameChanged="nameChangedHandler" />
    <br/>
    <h3>App 데이터: {{ parentName }}</h3>
  </div>
</template>

<script>
  import InputName from './components/InputName.vue';

  export default {
    name: "App4",
    components: {
      InputName,
    },
    data() {
      return {
        parentName: "",
      };
    },
    methods: {
      nameChangedHandler(e) {
        this.parentName = e.name;
      }
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