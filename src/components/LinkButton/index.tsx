import { JSXElement } from "solid-js/types";

import { styles } from "./style.css";

interface ButtonInterface {
  children: JSXElement;
  href: string;
}

function Button({ children, href }: ButtonInterface) {
  return (
    <div class={styles.button}>
      <a href={href} target="_blank">
        {children}
      </a>
    </div>
  );
}

export default Button;
