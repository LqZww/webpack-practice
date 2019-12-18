<template>
  <div>
    <h2 class="color">hello world</h2>
    <button>按钮呀</button>
    <h2>{{message}}</h2>
    <Button></Button>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "App",
  components: {
    Button
  },
  data() {
    return {
      message: "hello vue!!!"
    };
  }
};
</script>

<style scoped>
.color {
  color: orange;
}
</style>