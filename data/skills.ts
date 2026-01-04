// ============================================================
// SKILLS
// ============================================================
// Organize your skills by category
// proficiency: 1-100 (used for animated skill bars)

export interface Skill {
    name: string;
    proficiency: number; // 1-100 percentage
    icon?: string; // Icon name or path
}

export interface SkillCategory {
    title: string;
    icon: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Core Technologies",
        icon: "🧠",
        skills: [
            { name: "Python", proficiency: 90 },
            { name: "Machine Learning", proficiency: 85 },
            { name: "Deep Learning", proficiency: 80 },
            { name: "Computer Vision", proficiency: 85 },
            { name: "Data Structures & Algorithms", proficiency: 80 },
            { name: "DBMS", proficiency: 75 },
        ],
    },
    {
        title: "Development",
        icon: "💻",
        skills: [
            { name: "React", proficiency: 85 },
            { name: "Flutter", proficiency: 80 },
            { name: "Flask", proficiency: 75 },
            { name: "Firebase", proficiency: 85 },
            { name: "MySQL", proficiency: 80 },
            { name: "MongoDB", proficiency: 70 },
            { name: "NoSQL", proficiency: 75 },
        ],
    },
    {
        title: "AI/ML Tools",
        icon: "🤖",
        skills: [
            { name: "YOLOv8", proficiency: 85 },
            { name: "OpenCV", proficiency: 85 },
            { name: "TensorFlow", proficiency: 75 },
            { name: "PyTorch", proficiency: 70 },
        ],
    },
    {
        title: "Cloud & DevOps",
        icon: "☁️",
        skills: [
            { name: "Google Cloud Platform", proficiency: 75 },
            { name: "GitHub", proficiency: 90 },
            { name: "Docker", proficiency: 65 },
            { name: "CI/CD", proficiency: 70 },
        ],
    },
    {
        title: "Soft Skills",
        icon: "🎯",
        skills: [
            { name: "Leadership", proficiency: 90 },
            { name: "Strategic Thinking", proficiency: 85 },
            { name: "Team Collaboration", proficiency: 90 },
            { name: "Public Speaking", proficiency: 85 },
        ],
    },
];

// Languages
export const languages = [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Native" },
    { name: "Marathi", level: "Native" },
];

// Get all skills as flat array
export const getAllSkills = () =>
    skillCategories.flatMap(cat => cat.skills);

// Get top N skills by proficiency
export const getTopSkills = (n: number = 6) =>
    getAllSkills()
        .sort((a, b) => b.proficiency - a.proficiency)
        .slice(0, n);
