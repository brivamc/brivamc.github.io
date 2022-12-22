import { Page } from "../../../types/pages";
import { Contact } from "./contact";

export const contactPage: Page = {
  props: [
    {
      component: Contact,
      route: "/contact",
      title: "Contact Me"
    }
  ]
}
