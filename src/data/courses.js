export const courses = [
  {
    id: 1,
    name: "UI/UX Design",
    title: "UI/UX Design Masterclass",
    instructor: "Sarah Mitchell",
    duration: "12 weeks",
    rating: 4.9,
    students: 15420,
    price: "$299",
    category: "Designer",
    description: "Master the principles of user interface and user experience design. Learn industry-standard tools like Figma, create stunning portfolios, and land your first design job.",
    skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems"],
    lessons: 48,
    projects: 8
  },
  {
    id: 2,
    name: "React Development",
    title: "React Development Bootcamp",
    instructor: "Michael Chen",
    duration: "16 weeks",
    rating: 4.8,
    students: 12350,
    price: "$349",
    category: "Development",
    description: "Build modern web applications with React. Master hooks, state management, routing, and deploy production-ready apps that scale.",
    skills: ["React", "JavaScript", "Redux", "Next.js", "TypeScript"],
    lessons: 64,
    projects: 12
  },
  {
    id: 3,
    name: "Digital Marketing",
    title: "Digital Marketing Strategy",
    instructor: "Emily Rodriguez",
    duration: "10 weeks",
    rating: 4.7,
    students: 9870,
    price: "$249",
    category: "Marketing",
    description: "Learn data-driven marketing strategies. Master SEO, social media, content marketing, and paid advertising to grow businesses online.",
    skills: ["SEO", "Social Media", "Analytics", "Content Strategy", "PPC"],
    lessons: 40,
    projects: 6
  },
  {
    id: 4,
    name: "Product Management",
    title: "Product Management Fundamentals",
    instructor: "David Kumar",
    duration: "14 weeks",
    rating: 4.9,
    students: 8920,
    price: "$399",
    category: "Business",
    description: "Learn to build products people love. Master roadmapping, user research, agile methodologies, and cross-functional team leadership.",
    skills: ["Product Strategy", "User Stories", "Agile", "Data Analysis", "Roadmapping"],
    lessons: 56,
    projects: 10
  },
  {
    id: 5,
    name: "Full Stack Development",
    title: "Full Stack Web Development",
    instructor: "Alex Thompson",
    duration: "20 weeks",
    rating: 4.8,
    students: 11200,
    price: "$449",
    category: "Development",
    description: "Become a complete developer. Learn frontend and backend technologies, databases, APIs, and deploy full applications.",
    skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
    lessons: 80,
    projects: 15
  },
  {
    id: 6,
    name: "Brand Design",
    title: "Brand Identity Design",
    instructor: "Jessica Park",
    duration: "8 weeks",
    rating: 4.7,
    students: 6540,
    price: "$279",
    category: "Designer",
    description: "Create memorable brand identities. Master logo design, typography, color theory, and build comprehensive brand systems.",
    skills: ["Illustrator", "Brand Strategy", "Typography", "Color Theory", "Logo Design"],
    lessons: 32,
    projects: 5
  },
  {
    id: 7,
    name: "Data Analytics",
    title: "Data Analytics with Python",
    instructor: "Robert Singh",
    duration: "12 weeks",
    rating: 4.9,
    students: 10340,
    price: "$329",
    category: "Business",
    description: "Turn data into insights. Learn Python, SQL, data visualization, and statistical analysis to make data-driven decisions.",
    skills: ["Python", "SQL", "Pandas", "Matplotlib", "Statistics"],
    lessons: 48,
    projects: 9
  },
  {
    id: 8,
    name: "Content Marketing",
    title: "Content Marketing Mastery",
    instructor: "Lauren White",
    duration: "10 weeks",
    rating: 4.6,
    students: 7890,
    price: "$229",
    category: "Marketing",
    description: "Create content that converts. Master storytelling, SEO writing, content strategy, and distribution across all channels.",
    skills: ["SEO Writing", "Storytelling", "Content Strategy", "Analytics", "Copywriting"],
    lessons: 40,
    projects: 7
  }
];

export const instructors = [
  {
    id: 1,
    name: "Sarah Mitchell",
    expertise: "UI/UX Design",
    courses: 3,
    students: 15420,
    bio: "Former Lead Designer at Airbnb with 10+ years experience"
  },
  {
    id: 2,
    name: "Michael Chen",
    expertise: "Web Development",
    courses: 5,
    students: 23700,
    bio: "Senior Engineer at Meta, Open Source Contributor"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    expertise: "Digital Marketing",
    courses: 4,
    students: 18560,
    bio: "Marketing Director at Shopify, Growth Expert"
  },
  {
    id: 4,
    name: "David Kumar",
    expertise: "Product Management",
    courses: 3,
    students: 12340,
    bio: "VP of Product at Stripe, Ex-Google PM"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    profession: "UI Designer at Spotify",
    quote: "Educraft helped me transition from graphic design to UI/UX. The courses are practical and taught by people who actually work in the industry. I landed my dream job 3 months after completing the program.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    profession: "Full Stack Developer",
    quote: "The React bootcamp was incredible. The projects were challenging but rewarding, and the instructor support was outstanding. I'm now working as a developer at a startup I love.",
    rating: 5
  },
  {
    id: 3,
    name: "Marcus Johnson",
    profession: "Marketing Manager",
    quote: "Best investment I've made in my career. The digital marketing course gave me practical skills I use every single day. My campaigns are performing 3x better than before.",
    rating: 5
  },
  {
    id: 4,
    name: "Sofia Garcia",
    profession: "Product Manager at Amazon",
    quote: "Coming from engineering, I needed to learn the product side. This course gave me frameworks and tools I use daily. The case studies were especially valuable.",
    rating: 5
  }
];

export const learningPaths = [
  {
    id: 1,
    title: "Become a UI Designer",
    description: "Master design principles, tools, and workflows to create beautiful user interfaces",
    courses: 5,
    duration: "6 months",
    icon: "🎨"
  },
  {
    id: 2,
    title: "Become a Web Developer",
    description: "Build modern web applications from scratch using the latest technologies",
    courses: 8,
    duration: "8 months",
    icon: "💻"
  },
  {
    id: 3,
    title: "Become a Product Manager",
    description: "Lead product development and ship features that users love",
    courses: 6,
    duration: "7 months",
    icon: "🚀"
  }
];
