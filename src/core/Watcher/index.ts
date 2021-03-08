import { Vue } from "../index";
import { Dep } from "../Dep";
export class Watcher {
  cb: (value: string) => void;
  key: string;
  vm: Vue;
  value: string;
  constructor(vm: Vue, key: string, cb: (value: string) => void) {
    this.cb = cb;
    this.key = key;
    this.vm = vm;
    this.value = this.get();
  }
  update() {
    this.cb(this.vm[this.key]);
  }
  get() {
    console.log("watcher", this.key);

    Dep.target = this;
    const value = this.vm[this.key];
    Dep.target = null;
    return value;
  }
}
