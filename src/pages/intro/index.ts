import { Page } from "../../types/pages";
import { IntroPage } from "./intro.page";

export const introPage: Page = {
  props: [
    {
      component: IntroPage,
      tag: "main"
    }
  ]
};
