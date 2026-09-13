import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Agentic AI Customer Support System',
        description: "Designed and developed an AI-powered customer support platform for intelligent ticket orchestration and context-aware responses. Implemented Retrieval-Augmented Generation (RAG) to retrieve relevant knowledge and generate context-aware responses. Developed FastAPI REST APIs and PostgreSQL-backed services for ticket lifecycle management and AI workflow integration. Integrated vector-based knowledge retrieval to improve the relevance of AI-generated responses. Implemented SLA tracking, ticket prioritization, analytics, and intelligent customer-support workflows. Containerized application services using Docker for consistent deployment and development.",
        tools: ['Python', 'FastAPI', 'PostgreSQL', 'RAG', 'Vector Database', 'Docker', 'React'],
        role: 'Software Engineer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'School ERP System',
        description: "Developing a comprehensive School ERP System designed to streamline and digitize essential school management operations. The system provides a modern React-based interface with a FastAPI backend and PostgreSQL database for secure and scalable data management, while integrating RAG (Retrieval-Augmented Generation) to enable intelligent, context-aware access to school information and improve the overall user experience.",
        tools: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'RAG'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 3,
        name: 'Automatic Time Table Generator',
        description: "Automated scheduling for 200+ classes in under 30 seconds, reducing manual effort by 70%. Built a responsive front-end and managed 1,000+ records with SQLite. Implemented a genetic algorithm to optimize scheduling, minimizing class conflicts by 95%.",
        tools: ['HTML', 'CSS', 'Javascript', 'SQLite', 'Django'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },