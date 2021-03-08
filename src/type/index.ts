export interface VueConfig {
  el: Element;
  data: PlainObject;
  // beforeCreate?: () => void;
  // created?: () => void;
  // mounted?: () => void;
  // methods?: object;
  // [propsName: string]: any;
}

export interface PlainObject {
  [key: string]: any;
}
