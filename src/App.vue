<template>
  <div id="app">
    <synaps-verify
      sessionId="ddeb8f1d-fd15858a-0aabddcb-ed9763de"
      service="individual"
      @ready="print('ready')"
      @finish="print('finish')"
    />
  </div>
</template>

<script>
import SynapsVerify from "./components/SynapsVerify.js";

export default {
  name: "App",
  components: {
    SynapsVerify,
  },
  methods: {
    print(data) {
      console.log(data);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
