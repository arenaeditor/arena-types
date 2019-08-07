interface ArenaObject {
  dom: HTMLElement; // 插件挂载点 DOM
  data: Object; // 插件数据
  utils: {
    /**
     * 解析文件名到绝对资源路径
     * @param filename
     */
    resolveLocalStatic(filename: String): String;
  };
}

interface IConditions {
  (context: any): boolean
}

declare class ArenaPluginDOM {
  /**
   * 插件 DOM 已经生成完毕可以加载时的回调
   */
  onMounted(): void;

  /**
   * 插件 DOM 即将销毁的回调
   */
  onDestroy(): void;

  $arena: ArenaObject;

  /**
   * 插件数据发生变更
   */
  propWillUpdate(): void;
}

declare class Item {
  /**
   * 面板控件元素
   * @param type 控件名称
   * @param name 数值绑定的键名
   * @param config 控件元素的显示配置
   * @param itemConfig 控件元素的配置
   * @param conditions 控件元素的显示隐藏条件
   */
  constructor(type: String, name: String, config?: Object, itemConfig?: Object, conditions?: IConditions)
}

declare class BasicGroup {
  constructor(type: string, name: string, bindName: string, conditions?: IConditions);

  /**
   * 添加布局或元素到组中
   * @param item
   */
  add(item: Item | Layout | [Item] | [Layout]): void;
}

declare class Group extends BasicGroup {
  /**
   * 基本折叠面板
   * @param displayName 面板显示名称
   * @param bindDataName 面板数据绑定名称。 如果您需要使用面板滑动的编辑面板，通过指定该名称即可在 data 中获取
   * @param conditions 面板显示隐藏条件函数
   */
  constructor(displayName: string, bindDataName?: string, conditions?: IConditions)
}

declare class TabBoxGroup extends BasicGroup {
  /**
   * 带有Tab页的折叠面板
   * @param displayName 面板显示名称
   * @param bindDataName 面板数据绑定名称
   * @param conditions 面板显示隐藏条件函数
   */
  constructor(displayName: string, bindDataName: string, conditions?: IConditions)
}

declare class EditorBoxGroup extends BasicGroup {
  /**
   * 带有编辑器的折叠面板
   * @param displayName 面板显示名称
   * @param bindDataName 面板数据绑定名称
   * @param conditions 面板显示隐藏条件函数
   */
  constructor(displayName: string, bindDataName: string, conditions?: IConditions)
}

declare class Layout {
  /**
   * 对 Item 进行 12 等分布局
   * @param item Item 对象
   * @param col 布局范围
   */
  add(item: Item | [[Item, Number]], col: Number): void;
}

export {
  ArenaPluginDOM,
  Group,
  TabBoxGroup,
  EditorBoxGroup,
  Item,
  Layout
}
