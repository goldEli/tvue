import { Watcher } from "../Watcher";
export class Dep {
  static target: Watcher | null;
  list: Watcher[] = [];
  add(watcher: Watcher) {
    this.list.push(watcher);
  }
  notify() {
    this.list.forEach((watcher) => {
      watcher.update();
    });
  }
}
