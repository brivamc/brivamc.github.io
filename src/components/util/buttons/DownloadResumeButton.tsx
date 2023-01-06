import { Button } from "@mui/material";
import React from "react";
import MyResume from "../documents/bmccausland-resume-for-site.pdf";

const RESUME_NAME = "bree-mccausland-resume.pdf";

export const DownloadResumeButton: React.FC = () => {
  const handleButtonClick = () => {
    const link = document.createElement("a");
    link.download = RESUME_NAME;
    link.href = MyResume;
    link.click();
  };

  return (
    <Button onClick={handleButtonClick} variant="contained">
      Resume
    </Button>
  );
}
