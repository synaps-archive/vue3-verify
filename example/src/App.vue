<template>
  <div id="app">
    <synaps-verify
      sessionId="f3243476-cec44c4a-5565ccd6-e7e9622d"
      :color="{ primary: '212b39', secondary: 'ffffff' }"
      lang="en"
      service="individual"
      @ready="print('ready')"
      @finish="print('finish')"
    />
  </div>
</template>

<script>
import SynapsVerify from "@synaps-io/vue3-verify";

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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
