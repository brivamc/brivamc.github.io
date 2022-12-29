export const aboutText = 
`
Hi! My name is Bree, and I enjoy creating and building websites and web applications. I was first interested in programming in 2013 when my friends and I would create small games and programs for fun. That, coupled with my interest in editing custom CSS and HTML themes on MySpace, Tumblr, and IMVU, eventually evolved into developing websites and applications on the web. Since I was six years old, I've been intrigued by computers, and my passion for them has only grown stronger.

Recently, I've had the privilege of working at an RV trip planning service, a website and IT company, and a cybersecurity start-up. Now, I'm seeking new challenges and exploring new opportunities in my career!

Lately I've been working with TypeScript and the React library, and I've been having a lot of fun with it! As a matter of fact, this website was built with React!
`;

export const aboutTechnologiesText = "Here are some other technologies that I've been working with recently:";

export interface TechnologyStack {
  name: string;
  link: string;
}

export const myTechnologies: TechnologyStack[] = [
  {name: "JavaScript (ES6+)", link: "https://www.javascript.com/"},
  {name: "Typescript", link: "https://www.typescriptlang.org/"},
  {name: "React", link: "https://reactjs.org/"},
  {name: "Node", link: "https://nodejs.org/en/"},
  {name: "Yarn", link: "https://yarnpkg.com/"},
  {name: "npm", link: "https://www.npmjs.com/"},
  {name: "Git", link: "https://git-scm.com/"},
  {name: "Go", link: "https://go.dev/"},
  {name: "PostgreSQL", link: "https://www.postgresql.org/"},
  {name: "GraphQL", link: "https://graphql.org/"}  
];
