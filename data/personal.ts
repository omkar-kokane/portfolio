// ============================================================
// PERSONAL INFORMATION
// ============================================================
// Update this file to change your personal details across the site
// All fields are used in Hero, About, and Contact sections

export const personal = {
  // Basic Info
  name: "Omkar Kokane",
  firstName: "Omkar",
  lastName: "Kokane",
  
  // Professional Title - appears in Hero section
  title: "AI & ML Enthusiast",
  
  // Roles for typewriter effect - add/remove roles as needed
  roles: [
    "Full Stack AI Developer",
    "Machine Learning Engineer", 
    "Community Builder",
    "Open Source Contributor",
  ],
  
  // Short summary for Hero section
  tagline: "Transforming innovative ideas into impactful AI-driven solutions",
  
  // Longer bio for About section
  bio: `Motivated and technically driven AI & ML enthusiast seeking opportunities in Artificial Intelligence, 
Machine Learning, and Full Stack AI Development. Passionate about transforming innovative ideas 
into practical, impactful solutions through intelligent automation and full-stack systems. 
Skilled in project execution, leadership, and cross-functional collaboration with a strong 
record of delivering AI-driven outcomes.`,
  
  // Contact Details
  email: "kokaneo125@gmail.com",
  phone: "+91 7620671012",
  location: "Nashik, India",
  
  // Social Links - leave empty string to hide
  social: {
    github: "https://github.com/omkar-kokane",
    linkedin: "https://linkedin.com/in/omkar-kokane",
    twitter: "", // Add your Twitter URL
    instagram: "", // Add your Instagram URL
    youtube: "", // Add your YouTube URL
  },
  
  // Resume PDF link (place file in /public folder)
  resumeUrl: "/Omkar_Kokane_Resume.pdf",
  
  // Profile image (place in /public/images folder)
  profileImage: "/images/profile.jpg",
  
  // Education
  education: {
    degree: "B.E. in Artificial Intelligence & Data Science",
    institution: "MET BKC Institute of Engineering, Nashik",
    university: "Savitribai Phule Pune University",
    graduationYear: "2027",
    status: "Expected Graduation",
  },
};

export type Personal = typeof personal;
