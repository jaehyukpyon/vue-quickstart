<template>
  <div style="boarder: solid 1px gray; padding: 5px;">
    이름: <input type="text" v-model="name">
    <button @click="$emit('nameChanged', { name })">이벤트 발신</button>
  </div>
</template>

<script>
export default {
  name: "InputName",
  //emits: ["nameChanged1"],
  emits: {
    nameChanged: (e) => {
      console.log(e);
      return e.name && typeof(e.name) === 'string' && e.name.trim().length >= 3 ? true : false;
    }
  },  
  data() {
    return {
      name: "",
    };
  },
  beforeCreate() {
    console.log("InputName.vue beforeCreate()");
  },
  created() {
    console.log("InputName.vue created()");
  },
  beforeMount() {
    console.log("InputName.vue beforeMount()");
  },
  mounted() {
    console.log("InputName.vue mounted()");
  },
  beforeUpdate() {
    console.log("InputName.vue beforeUpdate()");
  },
  updated() {
    console.log("InputName.vue updated()");
  },
}
</script>

<style scoped></style>