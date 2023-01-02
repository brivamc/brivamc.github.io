import { Page } from "../../../types/pages";
import { MyProjects } from "./MyProjects";

export const projectsPage: Page = {
  props: [
    {
      component: MyProjects,
      tag: "projects",
      title: "My Projects"
    }
  ]
}
