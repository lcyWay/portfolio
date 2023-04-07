import { createSignal } from "solid-js";

import { useIntersectionObserver } from "hooks/useIntersectionObserver";

import { styles } from "./style.css";

const SKILLS = [
  { title: "JavaScript", imageUrl: "/icons/js.png" },
  { title: "TypeScript", imageUrl: "/icons/ts.png" },
  { title: "HTML5", imageUrl: "/icons/html.png" },
  { title: "CSS3", imageUrl: "/icons/css.png" },
  { title: "Node.js", imageUrl: "/icons/node.png" },
  { title: "React", imageUrl: "/icons/react.png" },
  { title: "Next.js", imageUrl: "/icons/next.png" },
  { title: "Redux", imageUrl: "/icons/redux.png" },
  { title: "MobX", imageUrl: "/icons/mobx.png" },
  { title: "Docker", imageUrl: "/icons/docker.png" },
  { title: "PostgreSQL", imageUrl: "/icons/postgres.png" },
  { title: "Figma", imageUrl: "/icons/figma.png" },
];

function SkillsView() {
  const [containerRef, setContainerRef] = createSignal<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(containerRef);

  return (
    <div class={styles.container}>
      <img src="/images/mini-sphere-yellow.png" alt="sphere" class={styles.yellowSphere} />
      <img src="/images/mini-sphere-purple.png" alt="sphere" class={styles.purpleSphere} />
      <div ref={setContainerRef} class={isVisible() ? styles.contentAnimation : styles.content}>
        <div class={styles.title}>My Skills</div>
        <div class={styles.description}>
          The main area of expertise is <span class={styles.highlighted}>frontend</span> development (client side of the
          web).
        </div>
        <div class={styles.skillsContainer}>
          {SKILLS.map((skill) => (
            <div class={styles.skillBlock}>
              <img class={styles.skillImage} src={skill.imageUrl} alt="skill-icon" />
              <div>{skill.title}</div>
            </div>
          ))}
        </div>
        <div>
          And <span class={styles.highlighted}>more</span>.
        </div>
      </div>
    </div>
  );
}

export default SkillsView;
