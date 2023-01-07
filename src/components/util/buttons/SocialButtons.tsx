/** @jsxImportSource @emotion/react */
import { css, Grid, IconButton } from "@mui/material";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SocialIcon } from "../../../types/social.icon";
import { url } from "../text";

const socialButtons: SocialIcon[] = [
  {
    name: "Github",
    icon: FaGithub,
    url: url.my.github.profile
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    url: url.my.linkedin
  },
  {
    name: "Email",
    icon: FiMail,
    url: `mailto:${url.my.email}`
  }
];

const iconStyle = css({
  fontSize: "40px"
});

const buttonStyle = css({
  "&:hover": {
    background: "transparent"
  }
});

export const SocialButtons: React.FC<{
  size?: "large" | "medium" | "small";
  alignButtons?: "start" | "center" | "end";
}> = ({ size = "large", alignButtons = "end" }) => {
  return (
    <Grid container alignItems="center" justifyContent={alignButtons} spacing={2}>
      {socialButtons.map(({ name, icon: Icon, url }) =>
        <Grid item key={name}>
          <IconButton
            css={[buttonStyle, size === "large" && iconStyle]}
            color="primary"
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            size={size}
          >
            <Icon />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
}
