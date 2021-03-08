export class Watcher {
  update() {}
}

export class Dep {
  target: Watcher;
  list = [];
  add(watcher: Watcher) {
    this.list.push(watcher);
  }
  notify() {
    this.list.forEach((watcher) => {
      watcher.update();
    });
  }
}
