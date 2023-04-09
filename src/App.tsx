import { createEffect, createSignal, on } from "solid-js";

import BaseViewContent from "components/BaseViewContent";
import ScrollHandler from "components/ScrollHandler";

import MainView from "views/MainView";
import SkillsView from "views/SkillsView";
import ShouldDoProjectView from "views/ShouldDoProjectView";
import ChairsProjectView from "views/ChairsProjectView";
import SocialProjectView from "views/SocialProjectView";

import { styles } from "global.css";

export const VIEWS_COUNT = 5;

function App() {
  let viewsContainer: HTMLDivElement | null = null;

  const [screenNumber, setScreenNumber] = createSignal(0);
  const [mainContainerClass, setMainContainerClass] = createSignal(styles.container);

  createEffect(() => {
    if (!navigator.userAgent.match(/(iPad|iPhone|iPod)/)) return;
    setMainContainerClass(styles.iosContainer);
  });

  createEffect(() => {
    window.addEventListener("resize", () => {
      if (!viewsContainer) return;
      viewsContainer.scroll({ top: document.body.offsetHeight * screenNumber() });
    });
  });

  createEffect(
    on(screenNumber, () => {
      if (!viewsContainer) return;
      const top = screenNumber() * document.body.offsetHeight;
      viewsContainer.scroll({ behavior: "smooth", top });
    })
  );

  const handleAppWheel = (event: WheelEvent) => {
    if (!viewsContainer) return;
    if (viewsContainer.scrollTop !== document.body.offsetHeight * screenNumber()) return;
    setScreenNumber(event.deltaY > 0 ? Math.min(VIEWS_COUNT - 1, screenNumber() + 1) : Math.max(0, screenNumber() - 1));
  };

  const onScrollDownClick = () => {
    if (screenNumber() === VIEWS_COUNT - 1) return;
    setScreenNumber(screenNumber() + 1);
  };

  const onScrollDown = () => {
    if (screenNumber() === VIEWS_COUNT - 1) return;
    setScreenNumber((value) => value + 1);
  };

  const onScrollUp = () => {
    if (screenNumber() === 0) return;
    setScreenNumber((value) => value - 1);
  };

  return (
    <ScrollHandler onScrollDown={onScrollDown} onScrollUp={onScrollUp} className={mainContainerClass}>
      <BaseViewContent
        handleScreenChange={setScreenNumber}
        onScrollDownClick={onScrollDownClick}
        screenNumber={screenNumber}
      />
      <div onWheel={handleAppWheel} ref={(el) => (viewsContainer = el)} class={styles.viewsScrollContainer}>
        <div class={styles.viewsContainer}>
          <MainView />
          <SkillsView />
          <ChairsProjectView />
          <ShouldDoProjectView />
          <SocialProjectView />
        </div>
      </div>
    </ScrollHandler>
  );
}

export default App;
