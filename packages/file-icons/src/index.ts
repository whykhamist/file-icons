import "./css/index.scss";
import maps from "./catalog.json";

type ICatalog = Record<string, number>;
type IOptions = {
  tag?: "span";
  classPrefix?: string;
};

const catalog: ICatalog = maps;

/**
 * Append child paths to the provided element
 * @param el The element to append child paths to
 * @param pathCtr  The number of paths to append
 * @param tag The element tag to use for the paths (default: span)
 * @param classPrefix  The class prefix to use for the paths (default: path)
 */
const appendChildPath = (
  el: HTMLElement,
  pathCtr: number,
  tag: string = "span",
  classPrefix: string = "path"
): void => {
  for (let i = 0; i < pathCtr; i++) {
    const path = document.createElement(tag);
    path.classList.add(classPrefix + (i + 1));
    el.appendChild(path);
  }
};
/**
 * Clear child paths from the provided element
 * @param el The element to clear child paths from
 */
const clearChildPaths = (el: HTMLElement): void => {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

/**
 * Get the icon name from the provided element
 * @param {HTMLElement} el The element to get the icon name from
 * @param {string} fallback The fallback icon name to use if the icon is not found
 * @returns {string} The icon name
 */
const getIconName = (el: HTMLElement, fallback: string = "blank"): string => {
  const icon =
    el.classList.value
      .split(" ")
      .find((c) => c.replace("fi-", "") in catalog)
      ?.replace("fi-", "") ?? fallback;
  return icon;
};

/**
 * Append path elements to the provided element or all elements with the provided class name
 * @param {string | HTMLElement} src source element to append child paths. If a string is provided, all elements with the class name will be appended.
 * @param {IOptions} [options] (optional) options to pass to the appendChildPath function
 * @returns {void}
 */
const setPaths = (
  src: string | HTMLElement = "fi",
  options: IOptions = { tag: "span", classPrefix: "path" }
): void => {
  let els: HTMLElement[] = [];
  if (typeof src === "string") {
    els = Array.from(document.getElementsByClassName(src)) as HTMLElement[];
  } else {
    els = [src];
  }

  for (let i = 0; i < els.length; i++) {
    const el = els[i] as HTMLElement;
    clearChildPaths(el);
    const icon = getIconName(el);
    const pathCtr = (catalog as ICatalog)[icon];
    appendChildPath(el, pathCtr, options.tag, options.classPrefix);
  }
};

export { catalog, setPaths, appendChildPath, clearChildPaths };
