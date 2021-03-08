import { Compiler } from "../Compiler";
import { VueConfig } from "../type";

export class Vue {
  data: VueConfig["data"];
  vm: Vue = this;
  el: Element;
  constructor(options: VueConfig) {
    this.data = options.data;
    this.el = options.el;
    new Compiler(this.el, this);
  }
}
