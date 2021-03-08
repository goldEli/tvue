import { Compiler } from "../Compiler";
import { PlainObject, VueConfig } from "../type";
import { Observer } from "./Observer";

export class Vue {
  data: VueConfig["data"] = {};
  vm: Vue = this;
  el: Element;
  constructor(options: VueConfig) {
    this.data = options.data;
    this.el = options.el;
    new Observer(this.data);
    this.handleProxy(this.data);
    new Compiler(this.el, this);
  }
  handleProxy(data: PlainObject) {
    Object.keys(data).forEach((key) => {
      let value = data[key];
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return data[key];
        },
        set(v) {
          data[key] = v;
        }
      });
    });
  }
}
