import ProjectCard from "components/ProjectCard";

import { styles } from "./style.css";

function ShouldDoProjectView() {
  return (
    <div class={styles.container}>
      <img src="/images/mini-sphere-blue.png" alt="sphere" class={styles.blueSphere} />
      <ProjectCard
        title="What Should I Do?"
        githubLink="https://github.com/lcyWay/should-do-frontend"
        webLink="https://what-should-i-do.vercel.app"
        description="Task manager with authorization and activity tracking"
        stack="Node.js, Express, MongoDB, JWT, Socket.io, Next.js, styled-components, i18n, Prettier, Eslint"
        imageSrc="/images/should-do.png"
      />
    </div>
  );
}

export default ShouldDoProjectView;
