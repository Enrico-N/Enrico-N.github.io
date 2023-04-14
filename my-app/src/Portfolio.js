// About Section

const greeting = {
  intro: "Hello, I'm Enrico",
  name: "Enrico",
  title: "Software Developer",
};

//Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Enrico-N",
  linkedin: "https://www.linkedin.com/in/enrico-ng/",
  portfolio: "https://enrico-n.github.io/",
};

// Skill Icons
const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [],

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5 ",
    },
    {
      skillName: "CSS-3",
      fontAwesomeClassname: "fab fa-css3-alt ",
    },
    {
      skillName: "Javascript",
      fontAwesomeClassname: "fab fa-js ",
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react ",
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node ",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python ",
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java ",
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fa-brands fa-npm ",
    },
  ],
  display: true,
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Discuss a project or just want to say Hi? My Inbox is open",
  email_address: "ngenricok@gmail.com",
};

const isHireable = true;

export { greeting, socialMediaLinks, skillsSection, contactInfo, isHireable };
