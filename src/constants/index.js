import projects1 from "../assets/Virtual.png";
import projects2 from "../assets/pixello.png";
import projects3 from "../assets/Nexcent.png";
import projects4 from "../assets/lung.png";
import projects5 from "../assets/buble.png";
import projects6 from "../assets/pass.png";
import projects7 from '../assets/code.png';
import projects8 from '../assets/tracker.png'
import SEO from '../assets/seo.png'
import Vaishnav from '../assets/vai.jpg'


export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Jatin, a creative frontend developer, crafting immersive and intuitive web experiences.",
  description:
    "I’m currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "VirtualR",
    tag: "Style",
    description: "Code editor for developers and programmers",
    image: projects1,
    link: "https://github.com/Jatin395/VirturalR-Langing-page",
    Livelink: "https://virtuaalr.netlify.app/"
  },
  {
    name: "Pixello",
    tag: "Style",
    description: "Web-based image editor",
    image: projects2,
    link: "https://github.com/Jatin395/Pixello",
    Livelink: "https://pixello.netlify.app/",
  },
  {
    name: "Nexent",
    tag: "Style",
    description: "Responsive Landing page",
    image: projects3,
    link: "https://github.com/Jatin395/Nexcent",
    Livelink: "https://reliable-elf-ecd577.netlify.app/"
  },
  {
    name: "Langunitas",
    tag: "Style",
    description:
      "A visually appealing and interactive bear website",
    image: projects4,
    link: "https://github.com/Jatin395/Lagunitas-website",
    Livelink: "https://jatin395.github.io/Lagunitas-website/"
  },
  {
    name: "Bubble Game",
    tag: "function",
    description: "Engaging bubble game using html css javascript",
    image: projects5,
    link: "https://github.com/Jatin395/Bubble-Game",
    Livelink: "https://jatin395.github.io/Bubble-Game/"
  },
  {
    name: "Password Generator",
    tag: "function",
    description: "Developed a customizable password generator",
    image: projects6,
    link: "https://github.com/Jatin395/Password-Generator",
    Livelink: "https://genratorpassword.netlify.app/"
  },
  {
    name: "Financial Management System",
    tag: "function",
    description: "Developed a Financial Management System",
    image: projects8,
    link: "https://github.com/Jatin395/SpendSence",
    Livelink: "https://spendsence.netlify.app/"
  },
  {
    name: "Secure Code Management Platform",
    tag: "function",
    description: "Developed a Secure Code Management Platform",
    image: projects7,
    link: "https://github.com/Jatin395/CodifyVault",
    Livelink: "https://codifyvault.netlify.app/"
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
    "I specialize in using technologies like React, Next.js, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const EXPERIENCES = [
  {
    Name: "Vaishnav technologies",
    title: "Frontend Developer",
    location: "Remote",
    yearRange: " Dec 2024 - Feb 2025",
    img: SEO,
    description: [
      "Leading the development of scalable frontend architecture for enterprise-level applications.",
      "Collaborating with cross-functional teams to deliver high-quality, user-centric solutions.",
      "Driving innovation through continuous improvements in performance and UI/UX design.",
    ],
  },
  {
    Name: "SEO Expert Agra",
    title: "Web Developer",
    location: "On Site",
    yearRange: "Oct 2024 - Nov 2024",
    img: Vaishnav,
    description: [
      "Leading the development of scalable frontend architecture for enterprise-level applications.",
      "Collaborating with cross-functional teams to deliver high-quality, user-centric solutions.",
      "Driving innovation through continuous improvements in performance and UI/UX design.",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "Frontend Engineer, Google",
    feedback:
      "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
  },
  {
    name: "Michael Anderson",
    title: "Product Manager, Facebook",
    feedback:
      "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",

  },
  {
    name: "David Lee",
    title: "Senior Developer, Microsoft",
    feedback:
      "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",

  },
  {
    name: "Laura Martinez",
    title: "CTO, Shopify",
    feedback:
      "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",

  },
  {
    name: "Chris Brown",
    title: "Co-founder, Stripe",
    feedback:
      "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "jatin7534sharma@gmail.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/yourprofile",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/yourprofile",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Jatin. All rights reserved.`,
};
