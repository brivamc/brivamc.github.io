import { Page } from "../../types/pages";
import { ContactPage } from "./contact.page";

export const contactPage: Page = {
  props: [
    {
      component: ContactPage,
      tag: "contact",
      title: "Contact Me"
    }
  ]
};
