import { Page } from "../../types/pages";
import { AboutPage } from "./about.page";

export const aboutPage: Page = {
  props: [
    {
      component: AboutPage,
      tag: "about",
      title: "About Me"
    }
  ]
};
