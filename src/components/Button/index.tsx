import { JSXElement } from "solid-js/types";

import { styles } from "./style.css";

interface ButtonInterface {
  children: JSXElement;
}

function Button({ children }: ButtonInterface) {
  return <div class={styles.button}>{children}</div>;
}

export default Button;
