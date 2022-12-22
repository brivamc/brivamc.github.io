import { Page } from "../../../types/pages";
import { Projects } from "./projects";

export const projectsPage: Page = {
  props: [
    {
      component: Projects,
      route: "/projects",
      title: "My Projects"
    }
  ]
}
