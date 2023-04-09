import { createSignal } from "solid-js";

import { useIntersectionObserver } from "hooks/useIntersectionObserver";

import GitHubIcon from "icons/GitHubIcon";
import WebIcon from "icons/WebIcon";
import StarIcon from "icons/StarIcon";
import StackIcon from "icons/StackIcon";

import { styles } from "./style.css";

interface ProjectCardInterface {
  title: string;
  githubLink?: string;
  webLink?: string;
  imageSrc: string;
  description: string;
  stack: string;
}

function ProjectCard({ description, imageSrc, stack, title, githubLink, webLink }: ProjectCardInterface) {
  const [containerRef, setContainerRef] = createSignal<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(containerRef);

  return (
    <div ref={setContainerRef} class={isVisible() ? styles.contentAnimation : styles.content}>
      <div class={styles.leftSideContainer}>
        <div class={styles.mediumSpaceContainer}>
          <div id="project-title" class={styles.title}>
            {title}
          </div>
          <div class={styles.smallSpaceContainer}>
            {githubLink && (
              <div class={styles.textWithIcon}>
                <GitHubIcon />
                <a href={githubLink} target="_blank">
                  {githubLink}
                </a>
              </div>
            )}
            {webLink && (
              <div class={styles.textWithIcon}>
                <WebIcon />
                <a href={webLink} target="_blank">
                  {webLink}
                </a>
              </div>
            )}
          </div>
        </div>
        <div class={styles.smallSpaceContainer}>
          <div id="project-section" class={styles.labelWithIcon}>
            <StarIcon />
            <span class={styles.highlighted}>Description</span>
          </div>
          <div>{description}</div>
        </div>
        <div class={styles.smallSpaceContainer}>
          <div id="project-section" class={styles.labelWithIcon}>
            <StackIcon />
            <span class={styles.highlighted}>Technologies</span>
          </div>
          <div>{stack}</div>
        </div>
      </div>
      <img src={imageSrc} class={styles.projectImage} alt="chairs-image" />
    </div>
  );
}

export default ProjectCard;
