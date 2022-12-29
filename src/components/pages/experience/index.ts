import { Page } from "../../../types/pages";
import { MyExperience } from "./MyExperience";

export const experiencePage: Page = {
  props: [
    {
      component: MyExperience,
      route: "/experience",
      title: "My Experience"
    }
  ]
}
