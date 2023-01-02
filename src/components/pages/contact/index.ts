import { Page } from "../../../types/pages";
import { ContactMe } from "./ContactMe";

export const contactPage: Page = {
  props: [
    {
      component: ContactMe,
      tag: "contact",
      title: "Contact Me"
    }
  ]
}
