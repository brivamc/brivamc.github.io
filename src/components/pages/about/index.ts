import { Page } from "../../../types/pages";
import { About } from "./about";

export const aboutPage: Page = {
  props: [
    {
      component: About,
      route: "/about",
      title: "About Me"
    }
  ]
}
