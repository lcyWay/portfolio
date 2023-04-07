import { createEffect, createSignal, on } from "solid-js";

import BaseViewContent from "components/BaseViewContent";

import MainView from "views/MainView";
import SkillsView from "views/SkillsView";
import ShouldDoProjectView from "views/ShouldDoProjectView";
import ChairsProjectView from "views/ChairsProjectView";
import SocialProjectView from "views/SocialProjectView";

import { styles } from "global.css";

export const VIEWS_COUNT = 5;
export const SCROLL_ROOT_ID = "scroll_root_id";

function App() {
  let viewsContainer: HTMLDivElement | null = null;

  const [screenNumber, setScreenNumber] = createSignal(0);
  const [initialTouchPosition, setInitialTouchPosition] = createSignal<null | number>(null);

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

  const handleScrollDown = () => {
    if (screenNumber() === VIEWS_COUNT - 1) return;
    setScreenNumber(screenNumber() + 1);
  };

  const onAppTouch = (ev: TouchEvent) => {
    if (ev.changedTouches.length === 0) return;
    setInitialTouchPosition(ev.changedTouches[0].clientY);
  };

  const onAppTouchMove = (ev: TouchEvent) => {
    if (!viewsContainer) return;
    if (viewsContainer.scrollTop !== document.body.offsetHeight * screenNumber()) return;

    if (ev.changedTouches.length === 0) return;

    const initialPosition = initialTouchPosition();
    if (initialPosition === null) return;

    const difference = -(ev.changedTouches[0].clientY - initialPosition);
    if (Math.abs(difference) < 25) return;
    if (difference < 0 && screenNumber() === 0) return;
    if (difference > 0 && screenNumber() === VIEWS_COUNT - 1) return;
    setScreenNumber(screenNumber() + (difference > 0 ? 1 : -1));
  };

  const onAppTouchEnd = () => {
    setInitialTouchPosition(null);
  };

  return (
    <div ontouchstart={onAppTouch} ontouchmove={onAppTouchMove} ontouchend={onAppTouchEnd} class={styles.container}>
      <BaseViewContent
        handleScreenChange={setScreenNumber}
        handleScrollDown={handleScrollDown}
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
    </div>
  );
}

export default App;
