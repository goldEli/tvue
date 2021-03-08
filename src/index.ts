// import { observer } from "./observer";
// import { Complier } from "./Complier";
// import { Wachter } from "./watcher";
import { Vue } from "./core";

const vue = new Vue({
  el: document.querySelector("#app") as Element,
  data: {
    inputValue: "123"
  }
});

// console.log(data);
setTimeout(() => {
  console.log("changeValue", vue.inputValue);
  vue.inputValue = "111";
}, 500);
