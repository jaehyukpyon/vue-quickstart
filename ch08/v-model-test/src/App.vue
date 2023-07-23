<template>
  <div>
    <InputName :name="searchName" @update:name="changeSearchName" :tname="testName" :obj="testObj" />
    <h3>검색어: {{ searchName }}</h3>
    <h3>App.vue testObj-email {{ testObj.email }}</h3>
  </div>
</template>

<script>
import InputName from './components/InputName.vue';

export default {
  name: 'App',
  components: {InputName},
  data() {
    return {
      searchName: "John",
      testName: "jaehyuk",
      testObj: {
        email: "gmail"
      }
    }
  },
  methods: {
    changeSearchName(name) {
      console.log(name);
      this.searchName = name;
    }
  }
}
</script>

<style scoped></style>