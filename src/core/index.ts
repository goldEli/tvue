import { Compiler } from "../Compiler";
import { VueConfig } from "../type";

export class Vue {
  data: VueConfig["data"] = {};
  vm: Vue = this;
  el: Element;
  constructor(options: VueConfig) {
    this.data = options.data;
    this.el = options.el;
    this.handleProxy();
    new Compiler(this.el, this);
  }
  handleProxy() {
    Object.keys(this.data).forEach((key) => {
      const value = this.data[key];
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return value;
        },
        set() {}
      });
    });
  }
}
