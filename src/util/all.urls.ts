export interface JobURLs {
  rvLife: string;
  fineLine: string;
  hyperqube: string;
  lorisHands: string;
}

export interface MyURLs {
  linkedin: string;
  github: {
    profile: string;
    repo: string;
  },
  email: string;
}

export interface TechURLs {
  js: string;
  ts: string;
  react: string;
  node: string;
  yarn: string;
  npm: string;
  git: string;
  golang: string;
  postgresql: string;
  graphql: string;
}

export interface AllURLs {
  my: MyURLs,
  job: JobURLs,
  techStack: TechURLs
}

export const urls: AllURLs = {
  my: {
    linkedin: "https://www.linkedin.com/in/brivamc",
    github: {
      profile: "https://github.com/brivamc",
      repo: "https://github.com/brivamc?tab=repositories"
    },
    email: "brivamc@udel.edu"
  },
  job: {
    rvLife: "https://tripwizard.rvlife.com/",
    fineLine: "https://www.finelinewebsites.com/",
    hyperqube: "https://hyperqube.io/",
    lorisHands: "https://lorishands.org/"
  },
  techStack: {
    js: "https://www.javascript.com/",
    ts: "https://www.typescriptlang.org/",
    react: "https://reactjs.org/",
    node: "https://nodejs.org/en/",
    yarn: "https://yarnpkg.com/",
    npm: "https://www.npmjs.com/",
    git: "https://git-scm.com/",
    golang: "https://go.dev/",
    postgresql: "https://www.postgresql.org/",
    graphql: "https://graphql.org/"
  }
};
