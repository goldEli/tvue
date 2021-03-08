import { PlainObject } from "../../type";

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
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        console.log("get", key, value);

        return value;
      },
      set(v) {
        console.log("set", key, v);
        value = v;
      }
    });
  }
}
