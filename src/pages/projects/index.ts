import { Page } from "../../types/pages";
import { ProjectsPage } from "./projects.page";

export const projectsPage: Page = {
  props: [
    {
      component: ProjectsPage,
      tag: "projects",
      title: "My Projects"
    }
  ]
}
