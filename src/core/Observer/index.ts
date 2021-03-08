import { PlainObject } from "../../type";
import { Dep } from "../Dep";

export class Observer {
  constructor(data: PlainObject) {
    this.walk(data);
  }

  walk(data: PlainObject) {
    if (typeof data === "object") {
      Object.keys(data).forEach((key) => {
        const value = data[key];
        this.defineReactive(data, key, value);
      });
    }
  }

  defineReactive(data: PlainObject, key: string, value: string) {
    this.walk(data[key]);
    const dep = new Dep();
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        console.log("get", Dep.target);

        Dep.target && dep.add(Dep.target);
        return value;
      },
      set(v) {
        console.log("set", key, v);
        value = v;
        dep.notify();
      }
    });
  }
}
