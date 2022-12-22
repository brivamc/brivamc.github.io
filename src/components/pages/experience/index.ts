import { Page } from "../../../types/pages";
import { Experience } from "./experience";

export const experiencePage: Page = {
  props: [
    {
      component: Experience,
      route: "/experience",
      title: "My Experience"
    }
  ]
}
