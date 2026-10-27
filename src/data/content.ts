/**
 * ALL WEBSITE CONTENT LIVES IN THIS FILE.
 * Edit text, links and dates here. You do not need to touch the components.
 */

export interface ImageSlotData {
  /** Path inside /public (e.g. "/images/profile.jpg"). Keep null to show the placeholder. */
  src: string | null;
  /** Describes the real photo once you add it. */
  alt: string;
  /** Label shown on the placeholder while src is null. */
  label: string;
  /** Letters shown in the portrait placeholder only. */
  initials?: string;
  /** CSS object-fit for the real photo. */
  objectFit: "cover" | "contain";
  /** CSS object-position for the real photo, e.g. "center top". */
  objectPosition: string;
}

export interface LinkCard {
  label: string;
  handle: string;
  href: string;
  description: string;
}

export interface Experience {
  role: string;
  organization?: string;
  period: string;
  summary: string;
  highlights?: string[];
}

export interface Achievement {
  title: string;
  context: string;
  period: string;
  image?: ImageSlotData;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const profile = {
  fullName: "Aude Mar Hyra V. Busaco",
  shortName: "Aude",
  initials: "AB",
  title: "Information Technology Student",
  level: "4th-year BSIT student",
  location: "Panabo City, Davao del Norte, Philippines",
  email: "audemarhyra@gmail.com",
  portrait: {
    // TODO: replace null with "/images/profile.jpg" after adding the file to public/images/
    src: "images/profile.jpg",
    alt: "Portrait of Aude Mar Hyra V. Busaco",
    label: "Portrait photo",
    initials: "AB",
    objectFit: "cover",
    objectPosition: "center top",
  } as ImageSlotData,
};

export const intro =
  "I am a hardworking and adaptable 4th-year BSIT student with experience in small business, customer service, basic accounting, and office work. As a mother and entrepreneur, I have developed strong time-management, communication, problem-solving, and business skills.";

// Written from the facts supplied. It is an aspiration, not a claim of advanced technical skill.
export const careerObjective =
  "I am a 4th-year Information Technology student looking for an opportunity to apply what I am learning alongside my small-business, customer service and administrative experience. I am adaptable, organized and eager to learn, and I hope to build my technical skills while contributing reliably to a team.";

export const aboutParagraphs = [
  "I am a 4th-year Bachelor of Science in Information Technology student and a proud mother of two boys. Being a mother has taught me responsibility, patience, and how to manage my time well, and I bring these qualities into everything I do.",
  "I am hardworking and outgoing and enjoy meeting and working with people. I have experience running a sari-sari store, selling kakanin, and working in warehouse and tindahan environments. These experiences strengthened my communication, organization, and customer service.",
];

export const basicInfo = [
  { label: "Full name", value: profile.fullName },
  { label: "Career title", value: profile.title },
  { label: "Current level", value: profile.level },
  { label: "Location", value: profile.location },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
];

export const education = [
  {
    title: "Bachelor of Science in Information Technology (BSIT)",
    school: "Davao del Norte State College",
    detail: "4th year, currently enrolled",
  },
  {
    title: "Alternative Learning System (ALS)",
    school: "Educational pathway",
    detail:
      "Continued my educational journey through the Alternative Learning System (ALS), following earlier studies at Stella Matutina Academy.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Business & Entrepreneurship",
    skills: ["Business & Entrepreneurship", "Selling & Marketing", "Basic Accounting"],
  },
  {
    title: "Communication & Service",
    skills: ["Persuasive Communication", "Customer Service"],
  },
  {
    title: "Office & Computer",
    skills: ["Basic Office Skills", "Basic Computer Skills", "Mathematics"],
  },
  {
    title: "Working Style",
    skills: ["Time Management", "Problem Solving"],
  },
];

export const strengths = [
  "Hardworking",
  "Responsible",
  "Outgoing",
  "Friendly",
  "Adaptable",
  "Business-minded",
  "Organized",
  "Willing to learn",
];

export const experience: Experience[] = [
  {
    role: "Kakanin Seller",
    organization: "Small-scale food business",
    period: "2025–2026",
    summary:
      "Sold homemade kakanin, communicated with customers, managed orders and sales, and practiced basic business and financial management.",
  },
  {
    role: "Small Business Owner",
    organization: "Sari-sari store",
    period: "2024–2025",
    summary:
      "Managed daily store activities, assisted customers, handled sales and basic accounting, and managed inventory and products.",
  },
  {
    role: "Student Assistant",
    organization: "Cash-for-Work Program (DSWD), Institute of Computing (IC)",
    period: "2024 · three months",
    summary: "Served as a student assistant through the DSWD Cash-for-Work Program at the Institute of Computing.",
  },
  {
    role: "Sales Clerk",
    period: "2018–2020",
    summary: "Two years of experience as a sales clerk, working in sales and customer service.",
  },
  {
    role: "Warehouse / Store Experience",
    period: "2017–2018",
    summary:
      "Assisted with daily operations in warehouse and tindahan environments, which strengthened my communication, organization, and customer service.",
  },
];

/** Text-only cards.*/
export const achievements: Achievement[] = [
  {
    title: "Dancer of the Year",
    context: "Elementary, Grades 1–6",
    period: "2007-2013",
  },
  {
    title: "Vocalist in a band",
    context: "Stella Matutina Academy",
    period: "2013–2014",
  },
  {
    title: "Dancer participant, Bytefest",
    context: "Davao del Norte State College",
    period: "2023",
        image: {
      src: "images/dance-bytefest.png",
      alt: "Photo from the bytefest dance performance, 2023",
      label: "Bytefest dance performance photo",
      objectFit: "cover",
      objectPosition: "center",
    },
  },
  {
    title: "NSTP Feeding Program",
    context: "Community activity",
    period: "May 2024",
    image: {
      src: "images/NSTP-feeding.JPG",
      alt: "Photo from the NSTP Feeding Program, May 2024",
      label: "NSTP Feeding Program photo",
      objectFit: "cover",
      objectPosition: "center",
    },
  },
];

export const project = {
  title: "Personal CV Website",
  status: "Finished project",
  image: {
    src: "/images/SS-personal-cv.png",
    alt: "Screenshot of the personal CV website project",
    label: "Personal CV Website photo",
    objectFit: "cover",
    objectPosition: "center top",
  } as ImageSlotData,
  description:
    "This personal CV website, built as a course assignment and published on GitHub.",
  builtWith: ["HTML", "JavaScript", "CSS"],
  repoUrl: "https://github.com/Aude0327/personal-cv",
};

export const links: LinkCard[] = [
  {
    label: "GitHub",
    handle: "Aude0327",
    href: "https://github.com/Aude0327",
    description: "My GitHub profile",
  },
  {
    label: "LinkedIn",
    handle: "Aude Mar Hyra Busaco",
    href: "https://www.linkedin.com/in/aude-mar-hyra-busaco-a55457447/",
    description: "My LinkedIn profile",
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "connect", label: "Connect" },
];
