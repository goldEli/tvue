import { Vue } from "../core";

export class Compiler {
  el: Element;
  vm: Vue;
  constructor(el: Element, vm: Vue) {
    this.el = el;
    this.vm = vm;
    this.init();
  }
  init() {
    Array.prototype.slice.call(this.el.childNodes).forEach((child) => {
      if (this.isTextElement(child)) {
        this.compileText(child);
        return;
      }
      if (this.isModelElement(child)) {
        this.compileModel(child);
        return;
      }
    });
  }
  isTextElement(el: Element) {
    return el.nodeType === 3;
  }
  isModelElement(el: Element) {
    return el.hasAttribute("v-model");
  }
  compileText(el: Element) {
    const content = el.nodeValue;
    if (!content) return;
    const reg = /\{\{(.*)\}\}/;
    content.match(reg);
    const name = RegExp.$1;
    this.updateText(el, this.vm[name]);
  }
  compileModel(el: Element) {
    const name = el.getAttribute("v-model");
    this.modelUpdater(el, this.vm[name]);
  }
  updateText(el: Element, value: string) {
    el.nodeValue = value;
  }
  modelUpdater(el: Element, value: string) {
    el.value = value;
  }
}
