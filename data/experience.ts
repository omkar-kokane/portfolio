// ============================================================
// WORK EXPERIENCE
// ============================================================
// Add/edit your work experiences here
// Each experience will appear in the Experience timeline section
// Order: Most recent first

export interface Experience {
    id: number;
    company: string;
    role: string;
    duration: string;
    startDate: string; // For sorting: "YYYY-MM" format
    endDate: string; // Use "Present" for current roles
    location?: string;
    type: "full-time" | "part-time" | "internship" | "volunteer" | "freelance";
    description: string[];
    technologies?: string[];
    companyUrl?: string;
    logo?: string; // Place logo in /public/logos folder
}

export const experiences: Experience[] = [
    {
        id: 1,
        company: "Google Developer Groups (GDG MET)",
        role: "Flutter Lead",
        duration: "September 2024 - September 2025",
        startDate: "2024-09",
        endDate: "2025-09",
        type: "volunteer",
        description: [
            "Conducted workshops on Flutter and Firebase integration for app development",
            "Mentored students in cross-platform development and open-source collaboration",
            "Represented GDG MET at multiple tech communities, fostering community partnerships",
        ],
        technologies: ["Flutter", "Firebase", "Dart", "Mobile Development"],
        companyUrl: "https://gdg.community.dev/",
    },
    {
        id: 2,
        company: "Ping Network / Hack2Skill",
        role: "Google Student Ambassador",
        duration: "August 2025 - Present",
        startDate: "2025-08",
        endDate: "Present",
        type: "volunteer",
        description: [
            "Organized Google Cloud AI Labs (National-level) with 500+ participants",
            "Led community initiatives for AI literacy and developer engagement",
            "Coordinated Google Gemini Fandom and cloud innovation workshops",
        ],
        technologies: ["Google Cloud", "AI/ML", "Community Building"],
    },
    {
        id: 3,
        company: "Om Intelligence",
        role: "AI/ML Intern",
        duration: "June 2025 - September 2025",
        startDate: "2025-06",
        endDate: "2025-09",
        location: "Nashik",
        type: "internship",
        description: [
            "Spearheaded the full-stack SDLC of AI projects, integrating Python, React, and advanced ML frameworks for rapid prototyping and deployment",
            "Explored, tested, and deployed emerging AI tools to enhance automation and product scalability",
            "Designed and delivered AI-readiness workshops for faculties, executives, and top-level CEOs across industries",
            "Contributed to automation and computer vision initiatives improving system intelligence",
        ],
        technologies: ["Python", "React", "Machine Learning", "Computer Vision", "Flask"],
        companyUrl: "https://omintelligence.com",
    },
];

// Helper function to get experiences sorted by date
export const getExperiencesSorted = () => {
    return [...experiences].sort((a, b) => {
        const dateA = a.endDate === "Present" ? "9999-99" : a.endDate;
        const dateB = b.endDate === "Present" ? "9999-99" : b.endDate;
        return dateB.localeCompare(dateA);
    });
};
