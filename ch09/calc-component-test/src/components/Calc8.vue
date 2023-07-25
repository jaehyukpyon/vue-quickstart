<template>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    Y : <input type="text" v-model.number="y" /><br />
    <div>결과 : {{ result }}</div>

    email: <input type="text" v-model="obj.email">
    phone: <input type="text" v-model="obj.phone">
  </div>
</template>

<script>
import { ref, watchEffect, reactive } from 'vue'

export default {
  name: "Calc8",
  setup() {
    const x = ref(10);
    const y = ref(20);
    const result = ref(30);
    const obj = reactive({email: "jaehyuk", phone: "12345"})

    watchEffect(() => {
      result.value = x.value + y.value;
      console.log(`${x.value} + ${y.value} = ${result.value}`)
    })

    watchEffect(() => {
      console.log("실행...")
      console.log(`${obj.email}, ${obj.phone}`)
    })

    return { x, y, result, obj }
  }
}
</script>