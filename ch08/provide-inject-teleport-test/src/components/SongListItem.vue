<template>
  <li>
    <i :class="song.done ? icons.checked : icons.unchecked"></i>
    {{ song.title }}
    <button @click="method1">click1</button>
    <button @click="method2">click2</button>
    <div>{{ this.icons.test }}</div>
  </li>
</template>

<script>
export default {
  name: "SongListItem",
  inject: ["icons"],
  props: ["song"],
  methods: {
    method1() {
      this.song.done = !this.song.done;
    },
    method2() {
      this.icons.test = "world!"; // 여기서 이렇게 test의 값을 변경했어도, 위에서 {{this.icons.test}}에서는 감감 무소식,,, 즉 아무 반응이 없다...ㅠㅠ
    }
  }
}
</script>

<style scoped></style>