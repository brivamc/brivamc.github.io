import { Page } from "../../../types/pages";
import { MyExperience } from "./MyExperience";

export const experiencePage: Page = {
  props: [
    {
      component: MyExperience,
      tag: "experience",
      title: "My Experience"
    }
  ]
}
