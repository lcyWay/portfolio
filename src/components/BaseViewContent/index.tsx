import { Accessor, createEffect, createSignal, on } from "solid-js";

import LinkButton from "components/LinkButton";

import GitHubIcon from "icons/GitHubIcon";
import GitLabIcon from "icons/GitLabIcon";
import TelegramIcon from "icons/TelegramIcon";
import GmailIcon from "icons/GmailIcon";
import DownIcon from "icons/DownIcon";

import { VIEWS_COUNT } from "App";

import { styles } from "./style.css";

interface BaseViewContentInterface {
  screenNumber: Accessor<number>;
  handleScreenChange: (value: number) => void;
  onScrollDownClick: () => void;
}

function BaseViewContent({ handleScreenChange, screenNumber, onScrollDownClick }: BaseViewContentInterface) {
  const [top, setTop] = createSignal(0);

  let paginationItem: HTMLDivElement | null = null;

  createEffect(
    on(screenNumber, () => {
      if (!paginationItem) return;
      setTop(paginationItem.offsetHeight * screenNumber());
    })
  );

  return (
    <>
      <div class={styles.infoContainer}>
        <div class={styles.infoContent}>
          <LinkButton href="https://github.com/lcyWay">
            <GitHubIcon />
            GitHub
          </LinkButton>
          <LinkButton href="https://gitlab.com/lcyWay">
            <GitLabIcon />
            GitLab
          </LinkButton>
          <LinkButton href="https://t.me/lowndmc">
            <TelegramIcon />
            lowndmc
          </LinkButton>
          <div class={styles.hideOnMobile}>
            <LinkButton href="mailto:carepuw@gmail.com">
              <GmailIcon />
              carepuw@gmail.com
            </LinkButton>
          </div>
        </div>
      </div>
      <div id="base-view-pagination-container" class={styles.paginationContainer}>
        <div class={styles.paginationScrollDownContainer} />
        <div class={styles.paginationContent}>
          <div>
            {new Array(VIEWS_COUNT).fill(1).map((_, index) => (
              <div
                ref={(el) => {
                  if (index !== 0) return;
                  paginationItem = el;
                }}
                class={styles.paginationItem}
                onClick={() => handleScreenChange(index)}
              >
                0{index + 1}
              </div>
            ))}
          </div>
          <div class={styles.paginationSelected} style={{ top: top() + "px" }} />
          <div class={styles.paginationBorder} />
        </div>
        <div onClick={onScrollDownClick} class={styles.paginationScrollDownContainer}>
          <DownIcon />
          Scroll Down
        </div>
      </div>
      <div class={styles.headerContainer}>
        <div class={styles.headerContent}>
          <div class={styles.headerTitleContainer}>
            <div class={styles.headerTitleLogo}>://_</div>
            Frontend Developer Portfolio
          </div>
          <nav class={styles.navContainer}>
            <div class={styles.navItem} onClick={() => handleScreenChange(1)}>
              Skills
            </div>
            <div class={styles.navItem} onClick={() => handleScreenChange(2)}>
              Works
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default BaseViewContent;
