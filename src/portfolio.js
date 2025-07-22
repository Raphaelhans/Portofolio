/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Raphaelhans",
  title: "Hi, I'm Raphael",
  subTitle: emoji(
    "A passionate Full Stack Software Developer having an experience of building Web and Mobile applications with JavaScript / Laravel / React JS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ag_jjSDVzv8nejwyH51KFZ3J7HsmmL0E/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Raphaelhans",
  linkedin: "https://www.linkedin.com/in/raphael-hanley-10a18421a//",
  gmail: "rapha.hanley@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack developer and also a bit of machine learning",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React JS",
      fontAwesomeClassname: "fab fa-react"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "SQL-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Institut Sains dan Teknologi Terpadu Surabaya",
      logo: require("./assets/images/istts_warna.png"),
      subHeader: "Bachelor of Business Information System",
      duration: "August 2022 - Present",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "40%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Bangkit led by Google, Goto, and Traveloka ",
      company: "Google, Goto, and Traveloka",
      companylogo: require("./assets/images/bangkitImg.jpg"),
      imageAlt: "Bangkit Logo",
      date: "September 2024 – Desember 2024",
      desc: "",
      descBullets: [
        "Studying every course available on the Coursera website and completing every question at the end of each part of the course.",
        "Group project to create a chatbot that can answer questions about general health and mental health"
      ]
    },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Projects that I have worked on.",
  projects: [
    {
      image: require("./assets/images/moviemateImg.png"),
      projectName: "MovieMate",
      projectDesc: "This a website built using laravel for online movie ticket purchasing service",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/merryfeby/moviemate-app/tree/main/Aplin/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/lelanginajaImg.png"),
      projectName: "LelanginAja",
      projectDesc: "A kotlin-based application that functions for the auction of used goods",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/Raphaelhans/LelanginAja/tree/main/Project"
        }
      ]
    },
    {
      image: require("./assets/images/ceksehatImg.png"),
      projectName: "Cek Sehat",
      projectDesc: "An application created as the final project for Bangkit, I am in charge of machine learning for the general health chatbot model.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/Capstone-Bangkit-Healthcare-Chatbot"
        }
      ]
    },
    {
      image: require("./assets/images/brewnbiteImg.png"),
      projectName: "Brew N Bite",
      projectDesc: "Laravel-based coffee shop website.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/Raphaelhans/brewnbite"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Bangkit Machine Learning Cohort",
      subtitle:
        "Graduated from Bngkit machine learning path with an average score of 86.40 and predicate A",
      image: require("./assets/images/bangkitImg.jpg"),
      imageAlt: "Bangkit Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1M0PAEwMcYXhkTY9paLKqWJwbXdIcYp21/view?usp=sharing"
        },
        {
          name: "Final Transcript",
          url: "https://drive.google.com/file/d/1t42EAjnvrAMEdfj4qk0zReAccjc-UOJk/view?usp=sharing"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Keras Community Day Volunteer",
      subtitle:
        "Volunteer Equipment & Logistics Division.",
      image: require("./assets/images/kerasImg.png"),
      imageAlt: "Keras Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1eveMMnTV6sz0AZXgvqEMXyrNXfYkr6ex/view?usp=sharing"
        }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62 896-1681-4743",
  email_address: "rapha.hanley@gmail.com@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
