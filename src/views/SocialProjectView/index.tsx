import ProjectCard from "components/ProjectCard";

import { styles } from "./style.css";

function SocialProjectView() {
  return (
    <div class={styles.container}>
      <ProjectCard
        title="Social Network"
        githubLink="https://gitlab.com/lcyWay/social-network"
        description="Just a social network. All components: modals, notifications, inputs, etc. - written without the use of third-party libraries."
        stack="Socket.io, Next.js, styled-components, i18n, reselect, JWT, dayjs, Prettier, Eslint"
        imageSrc="/images/social.png"
      />
    </div>
  );
}

export default SocialProjectView;
