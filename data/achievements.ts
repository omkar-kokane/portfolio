// ============================================================
// ACHIEVEMENTS & CERTIFICATIONS
// ============================================================
// Add your achievements, awards, and certifications here

export interface Achievement {
    id: number;
    title: string;
    organization: string;
    date: string; // e.g., "2024" or "March 2024"
    type: "hackathon" | "award" | "certification" | "competition" | "other";
    description?: string;
    position?: string; // e.g., "1st Place", "Runner-up"
    link?: string;
    badge?: string; // Path to badge image in /public/badges
}

export const achievements: Achievement[] = [
    // Competitions & Hackathons
    {
        id: 1,
        title: "Smart India Hackathon 2024 & 2025",
        organization: "Government of India",
        date: "2024-2025",
        type: "hackathon",
        position: "Institute-level Finalist",
        description: "Selected as institute-level finalist for two consecutive years",
    },
    {
        id: 2,
        title: "Avishkar 2024",
        organization: "MET BKC Institute of Engineering",
        date: "2024",
        type: "competition",
        position: "1st Rank",
        description: "AI Idea Pitching Competition - Institute Level",
    },
    {
        id: 3,
        title: "Hackfusion MET 2025",
        organization: "MET BKC Institute of Engineering",
        date: "2025",
        type: "hackathon",
        position: "2nd Runner-up",
    },
    {
        id: 4,
        title: "Hacktoberfest 2024 & 2025",
        organization: "DigitalOcean",
        date: "2024-2025",
        type: "other",
        description: "Open-Source Contributor",
    },
    {
        id: 5,
        title: "Multiple Hackathon Participant",
        organization: "Various",
        date: "2024-2025",
        type: "hackathon",
        description: "Participated in 7+ hackathons including L'Oréal, Adobe, Google Agentic AI, Mastek DeepBlue",
    },
];

export const certifications: Achievement[] = [
    {
        id: 101,
        title: "Machine Learning",
        organization: "NPTEL - IIT Madras",
        date: "2024",
        type: "certification",
    },
    {
        id: 102,
        title: "Programming, Data Structures & Algorithms in Python",
        organization: "NPTEL - IIT Madras",
        date: "2024",
        type: "certification",
    },
    {
        id: 103,
        title: "Python, HTML, C++",
        organization: "IIT Bombay (Spoken Tutorial)",
        date: "2024",
        type: "certification",
    },
    {
        id: 104,
        title: "Cloud Virtual Internship",
        organization: "AICTE Approved",
        date: "2024",
        type: "certification",
        description: "Virtual internship program",
    },
    {
        id: 105,
        title: "Android Developer Virtual Internship",
        organization: "AICTE Approved",
        date: "2024",
        type: "certification",
        description: "Virtual internship program",
    },
];

// Helper functions
export const getAchievementsByType = (type: Achievement["type"]) =>
    achievements.filter(a => a.type === type);

export const getAllAchievementsAndCerts = () => [...achievements, ...certifications];
