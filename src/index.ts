import "./css/index.scss";
import catalog from "./catalog.json";

type ICatalog = Record<string, number>;
type IOptions = {
  tag: "span";
};

const appendChildPath = (el: HTMLElement, pathCtr: number): void => {
  for (let i = 0; i < pathCtr; i++) {
    const path = document.createElement("span");
    path.classList.add("path" + (i + 1));
    el.appendChild(path);
  }
};

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
 * @returns {void}
 */
const setPaths = (src: string | HTMLElement = "fi"): void => {
  if (typeof src === "string") {
    const els = document.getElementsByClassName(src);
    for (let i = 0; i < els.length; i++) {
      const el = els[i] as HTMLElement;
      const icon = getIconName(el);
      const pathCtr = (catalog as ICatalog)[icon];
      appendChildPath(el, pathCtr);
    }
  } else {
    const icon = getIconName(src);
    const pathCtr = (catalog as ICatalog)[icon];
    appendChildPath(src, pathCtr);
  }
};

export { catalog, setPaths };
