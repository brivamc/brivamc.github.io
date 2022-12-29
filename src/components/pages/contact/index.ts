import { Page } from "../../../types/pages";
import { ContactMe } from "./ContactMe";

export const contactPage: Page = {
  props: [
    {
      component: ContactMe,
      route: "/contact",
      title: "Contact Me"
    }
  ]
}
