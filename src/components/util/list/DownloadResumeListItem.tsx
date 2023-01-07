import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import MyResume from "../documents/bmccausland-resume-for-site.pdf";
import { FiDownload } from "react-icons/fi";

const RESUME_NAME = "bree-mccausland-resume.pdf";

export const DownloadResumeListItem: React.FC = () => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.download = RESUME_NAME;
    link.href = MyResume;
    link.click();
  };

  return (
    <ListItem>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FiDownload />
        </ListItemIcon>
        <ListItemText primary="Download Resume" />
      </ListItemButton>
    </ListItem>
  );
}
