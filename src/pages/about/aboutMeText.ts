import { TechURLs, urls } from "../../util";


export const aboutTechnologiesText = "Here are some technologies that I've been working with recently:";

export interface TechnologyStack {
  name: string;
  url: string;
}

const techUrls: TechURLs = urls.techStack;

export const myTechnologies: TechnologyStack[] = [
  {name: "JavaScript (ES6+)", url: techUrls.js},
  {name: "Typescript", url: techUrls.ts},
  {name: "React", url: techUrls.react},
  {name: "Node", url: techUrls.node},
  {name: "Yarn", url: techUrls.yarn},
  {name: "npm", url: techUrls.npm},
  {name: "Git", url: techUrls.git},
  {name: "Go", url: techUrls.go},
  {name: "PostgreSQL", url: techUrls.postgresql},
  {name: "GraphQL", url: techUrls.graphql}  
];
