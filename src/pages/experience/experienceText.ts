export interface MyJobExperience {
  index: number;
  jobTitle: string;
  employer: string;
  startDate: Date;
  endDate?: Date;
  jobDetails: string[];
  link?: string;
}

export const myJobExperiences: MyJobExperience[] = [
  { index: 0,
    jobTitle: "Software Developer (Remote)",
    employer: "HyperQube",
    startDate: new Date(2020, 12),
    jobDetails: [
      "Collaborated as a team of 3 to architect and build a new iteration (v3) of a highly-interactable web-app from the ground up, developing new and refining old features",
      "Constructed the UI and UX of the v3 app as well as implement features for our API service",
      "Tested and fixed software bugs and optimized operation speed",
      "Extensively peer-reviewed code using Github's pull requests"
    ],
    link: "https://hyperqube.io/"
  },
  { index: 1,
    jobTitle: "Junior Developer (Remote)",
    employer: "FineLine Websites & IT Consulting",
    startDate: new Date(2020, 7),
    endDate: new Date(2020, 12),
    jobDetails: [
      "Collaborated as a team of 4 to develop and maintain over 100 websites ranging from high to low traffic using Content Management Systems such as WordPress, Magento, and Joomla",
      "Managed several databases and servers including migrating sites to different servers, launching deveopment sites to live versions, and archiving old sites",
      "Created custom templates and refined custom modules using PHP",
      "Communicated regularly with clients to implement any bug fixes or feature requests"
    ],
    link: "https://www.finelinewebsites.com/"
  },
  { index: 2,
    jobTitle: "Web Developer (Volunteer)",
    employer: "Lori's Hands",
    startDate: new Date(2019, 2),
    endDate: new Date(2019, 5),
    jobDetails: [
      "Collaborated as a team of 6 to create a dynamic spreadsheet of all volunteers in the organization",
      "Programmatically created a mega-spreadsheet to combine information from several Google forms into one centralized location",
      "Designed and implemented a web application using the mega-spreadsheet data to display volunteer information with optional filtering to view select data",
    ],
    link: "https://lorishands.org/"
  },
  { index: 3,
    jobTitle: "Web Developer (Remote)",
    employer: "Social Knowledge, LLC",
    startDate: new Date(2018, 5),
    endDate: new Date(2019, 10),
    jobDetails: [
      "Developed web applications for RV trip planning using Google's map API",
      "Planned and implemented new features using JavaScript to enhance the consumers' experience",
      "Regularly debugged and refined existing features of the web application"
    ],
    link: "https://tripwizard.rvlife.com/"
  },
];
