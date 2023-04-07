import ProjectCard from "components/ProjectCard";

import { styles } from "./style.css";

function SocialProjectView() {
  return (
    <div class={styles.container}>
      <ProjectCard
        title="Social Network"
        githubLink="https://gitlab.com/lcyWay/social-network"
        description="Task manager with authorization and activity tracking"
        stack="Next.js, Typescript, styled-components, Socket.io, i18n, Prettier, Eslint"
        imageSrc="/images/social.png"
      />
    </div>
  );
}

export default SocialProjectView;
