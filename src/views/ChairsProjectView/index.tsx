import ProjectCard from "components/ProjectCard";

import { styles } from "./style.css";

function ChairsProjectView() {
  return (
    <div class={styles.container}>
      <img src="/images/mini-sphere-yellow.png" alt="sphere" class={styles.yellowSphere} />
      <ProjectCard
        title="Chairs Market"
        githubLink="https://github.com/lcyWay/chairs-market"
        webLink="https://chairs-market.vercel.app"
        description="Task manager with authorization and activity tracking"
        stack="Next.js, Typescript, styled-components, Socket.io, i18n, Prettier, Eslint"
        imageSrc="/images/chairs.png"
      />
    </div>
  );
}

export default ChairsProjectView;
