import { Accessor, createEffect, createSignal, on } from "solid-js";

import Button from "components/Button";

import GitHubIcon from "icons/GitHubIcon";
import GitLabIcon from "icons/GitLabIcon";
import TelegramIcon from "icons/TelegramIcon";
import GmailIcon from "icons/GmailIcon";
import DownIcon from "icons/DownIcon";

import { styles } from "./style.css";
import { VIEWS_COUNT } from "App";

interface BaseViewContentInterface {
  screenNumber: Accessor<number>;
  handleScreenChange: (value: number) => void;
  handleScrollDown: () => void;
}

function BaseViewContent({ handleScreenChange, screenNumber, handleScrollDown }: BaseViewContentInterface) {
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
          <Button>
            <GitHubIcon />
            GitHub
          </Button>
          <Button>
            <GitLabIcon />
            GitLab
          </Button>
          <Button>
            <TelegramIcon />
            lcyWay
          </Button>
          <div class={styles.hideOnMobile}>
            <Button>
              <GmailIcon />
              carepuw@gmail.com
            </Button>
          </div>
        </div>
      </div>
      <div class={styles.paginationContainer}>
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
        <div onClick={handleScrollDown} class={styles.paginationScrollDownContainer}>
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
            <div>Works</div>
            <div>Skills</div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default BaseViewContent;
