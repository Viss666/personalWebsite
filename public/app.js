let app = Vue.createApp({
  data: function () {
    return {
      test: "Hello, world",
    };
  },
  methods: {},
  created: function () {
    console.log("Hello, world");
  },
}).mount("#app");
