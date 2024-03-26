import { createSignal } from "solid-js";

import LinkButton from "components/LinkButton";

import PdfIcon from "icons/PdfIcon";

import { useIntersectionObserver } from "hooks/useIntersectionObserver";

import { styles } from "./style.css";

function MainView() {
  const [containerRef, setContainerRef] = createSignal<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(containerRef);

  return (
    <div class={styles.container}>
      <div class={styles.headerContainer}>
        <img class={styles.sphereMainImage} src="/images/sphere-main.png" alt="shpere-main" />
        <div ref={setContainerRef} class={isVisible() ? styles.headerContentAnimation : styles.headerContent}>
          <img class={styles.sphereRedImage} src="/images/mini-sphere-red.png" alt="shpere" />
          <img class={styles.sphereYellowImage} src="/images/mini-sphere-yellow.png" alt="shpere" />
          <div>Hello.</div>
          <div>
            I'm <span class={styles.highlighted}>Andrey Scherbakov</span>,
          </div>
          <div>Frontend Developer.</div>
          <div class={styles.resumeContainer}>
            <LinkButton href="/resume.pdf">
              <PdfIcon />
              My Resume
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainView;
