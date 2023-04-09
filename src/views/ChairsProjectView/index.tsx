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
        description="This is a simple gaming chair store. But the project is written on a non-primitive stack and is also covered with unit and e2e tests. The production uses a free server, so the time before the first download of the assortment of chairs may be delayed."
        stack="Docker, Redis, PostgreSQL, Node.js, Express, Webpack, Typescript, React, MobX, Vanilla Extract, Loadable Components, Prettier, Eslint, Jest, Cypress, Husky, Lint-Staged"
        imageSrc="/images/chairs.png"
      />
    </div>
  );
}

export default ChairsProjectView;
