<template>
  <div>
    <input type="text" :value="name" @input="$emit('update:name', $event.target.value)">
    <!-- <input type="text" v-model="tname"> -->
    <input type="text" :value="obj.email">
  </div>
</template>

<script>
export default {
  name: 'InputName',
  props: ['name', 'tname', 'obj'],
}
</script>

<style scoped></style>