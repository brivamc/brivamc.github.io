import { Page } from "../../../types/pages";
import { AboutMe } from "./AboutMe";

export const aboutPage: Page = {
  props: [
    {
      component: AboutMe,
      route: "/about",
      title: "About Me"
    }
  ]
}
