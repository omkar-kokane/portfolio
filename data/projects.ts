// ============================================================
// PROJECTS
// ============================================================
// Add/edit your projects here
// Each project will be displayed as a 3D card in the Projects section

export interface Project {
    id: number;
    title: string;
    shortDescription: string; // One-liner for card
    fullDescription: string; // Detailed description
    technologies: string[];
    category: "ai-ml" | "web" | "mobile" | "other";
    featured: boolean; // Featured projects appear first
    image?: string; // Place in /public/projects folder
    liveUrl?: string;
    githubUrl?: string;
    demoVideo?: string;
    highlights?: string[]; // Key achievements/features
}

export const projects: Project[] = [
    {
        id: 1,
        title: "OptiQ - Healthcare Management Platform",
        shortDescription: "Scalable healthcare system with ABDM-ready architecture",
        fullDescription: "Built a scalable healthcare system managing appointments, patient records, and real-time queues with ABDM-ready architecture.",
        technologies: ["Flutter", "Python", "Firebase"],
        category: "mobile",
        featured: true,
        highlights: [
            "Real-time appointment management",
            "Patient record tracking",
            "ABDM-ready architecture",
            "Queue management system",
        ],
    },
    {
        id: 2,
        title: "MOET - Smart Museum Welcome System",
        shortDescription: "AI-powered visitor recognition for museums",
        fullDescription: "Engineered an AI-powered visitor recognition system for museums, using YOLOv8 and OpenCV for gesture-based welcomes and tracking via wireless cameras. CUDA-enabled for optimized GPU performance.",
        technologies: ["Python", "YOLOv8", "OpenCV", "React", "CUDA"],
        category: "ai-ml",
        featured: true,
        highlights: [
            "YOLOv8 object detection",
            "Gesture-based interaction",
            "Wireless camera integration",
            "GPU-optimized with CUDA",
        ],
    },
    {
        id: 3,
        title: "Room Insights Finder",
        shortDescription: "Intelligent room monitoring with posture analytics",
        fullDescription: "Developed an intelligent monitoring solution that tracks room occupancy and human posture analytics. Designed for GPU acceleration and CCTV integration.",
        technologies: ["Python", "YOLOv8", "OpenCV", "React"],
        category: "ai-ml",
        featured: true,
        highlights: [
            "Room occupancy tracking",
            "Human posture analytics",
            "CCTV integration",
            "Real-time monitoring",
        ],
    },
    {
        id: 4,
        title: "MedAssist",
        shortDescription: "Decision-support tool for medical practitioners",
        fullDescription: "Designed a rule-based decision-support tool for medical practitioners to assist in patient diagnosis and record tracking.",
        technologies: ["React", "Python", "MySQL"],
        category: "web",
        featured: false,
        highlights: [
            "Rule-based diagnosis support",
            "Patient record tracking",
            "Medical practitioner dashboard",
        ],
    },
    {
        id: 5,
        title: "TalentPlus",
        shortDescription: "Employee performance evaluation platform",
        fullDescription: "Built a performance evaluation platform enabling HR departments and Managers to assess employee productivity based on peer reviews and data-driven rules.",
        technologies: ["React", "Python", "MySQL"],
        category: "web",
        featured: false,
        highlights: [
            "Peer review system",
            "Data-driven evaluation",
            "HR management dashboard",
            "Performance analytics",
        ],
    },
];

// Helper functions
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category: Project["category"]) =>
    projects.filter(p => p.category === category);
