import { Button } from "@mui/material";
import React from "react";
import MyResume from "../../assets/documents/bmccausland-resume-for-site.pdf";

const RESUME_NAME = "bree-mccausland-resume.pdf";

export const DownloadResumeButton: React.FC = () => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.download = RESUME_NAME;
    link.href = MyResume;
    link.click();
  };

  return (
    <Button aria-label="download resume" onClick={handleClick} variant="contained">
      Resume
    </Button>
  );
}
