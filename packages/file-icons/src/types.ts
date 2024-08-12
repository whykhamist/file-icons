export type ICatalog = Record<string, number>;

export type IOptions = {
  /**
   * Element tag to use for the paths
   * @default span
   */
  tag?: string;

  /**
   * Class prefix to use for the path's classname
   * (use only if you have custom css styling)
   * @default path
   */
  classPrefix?: string;
};
