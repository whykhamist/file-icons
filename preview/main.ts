import "./style.css";
import "../src/css/index.scss";
import { catalog, setPaths } from "../src";

let icons = "<div class='content'>";
for (const name in catalog) {
  icons += '<div class="wrapper">';
  icons += `<span class="fi fi-${name}"></span>`;
  icons += `<div class="label">${name}</div>`;
  icons += "</div>";
}
icons += "</div>";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = icons;
setPaths();
