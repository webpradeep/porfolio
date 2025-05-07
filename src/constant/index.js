import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    chetu,
    beganto,
    isynbus,
    treebay,
    expostandzone,
    moviewale,
    domicile,
    sarkaripublic,
    nike,
    youtube,
    synapse,
    studio,
    intents
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Front End Developer",
        icon: web,
    },
    {
        title: "UI Developer",
        icon: mobile,
    },
    {
        title: "ReactJS Developer",
        icon: backend,
    },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    // {
    //     name: "Node JS",
    //     icon: nodejs,
    // },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Synpase India",
        icon: synapse,
        iconBg: "#fff",
        date: "Nov 2023 - Present",
        points: [
            "Optimized website speed and performance through code refactoring, image optimization, and asynchronous loading techniques, achieving significant improvements in 2x load times.",
            "Implemented performance optimizations and responsive design, reducing bounce rates by 30% and improving mobile traffic conversions for eCommerce clients",
            "Developed and implemented a utility product for developers, including features like a work counter, text styling  options, color generator, and slug generator",
        ],
    },
    {
        title: "Software Engineer (Front End)",
        company_name: "Chetu India Pvt. Ltd.",
        icon: chetu,
        iconBg: "#fff",
        date: "May 2022 - Dec  2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "High scale react app of News Portal and development dynamic and moderns feature like category, latest News, etc.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Designer / Developer",
        company_name: "Isynbus Technologies",
        icon: isynbus,
        iconBg: "#E6DEDD",
        date: "March 2021 - April 2022",
        points: [
            "Mockup Design and developed production the Dental Website with 99% successful rate with booking system.",
            "Design and Development the E-commerce Dashboard with the login system, order system and responsive",
            "Development E-commerce with all feature like login,register, cart and Server side render in React JS.",
            "Design and Development the E-Learning website with Multiple question and video lecturer producer",
        ],
    },
    {
        title: "UI Developer",
        company_name: "Beganto Software",
        icon: beganto,
        iconBg: "#fdfdfd",
        date: "Dec 2019 - Dec 2020",
        points: [
            "Successfully Mockup design and development IVF web booking system, alert and send email functionality.",
            "Developed the Real estate with flat book, login system, register system and Dashboard with modern feature to create high-quality products.",
            "Enhance the Fashion website, Design product Banner, developed Cart and Payment system in E-CommerceImplementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Web Desinger/Developer",
        company_name: "Treebay Techhnologies",
        icon: treebay,
        iconBg: "#E6DEDD",
        date: "Oct 2018 - Dec 2019",
        points: [
            "Design the Educational Website with Login system, Student, Teacher and Management and banner Design",
            "Design and Development the Travel Website with Login, search functionality, and inegrate google map etc.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Expo Stand Zone",
        description:
            "Web-based platform that is Exhibtion Stand builder website with using technology HTML, CSS and JS",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: expostandzone,
        source_code_link: "https://www.expostandzone.com/",
    },
    {
        name: "Studio ",
        description:
            "Effortless Word Count, Intelligent Insights – Your AI-Powered Writing Assistant",
        tags: [
            {
                name: "NextJS",
                color: "blue-text-gradient",
            },
            {
                name: "ReactJs",
                color: "green-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "pink-text-gradient",
            },
        ],
        image: studio,
        source_code_link: "https://studiocr.vercel.app/",
    },
    {
        name: "Try Intents",
        description:
            "Accelerate your business with smart solutions.Harness cutting-edge technology and expert-driven strategies to fuel growth, streamline operations, and stay ahead of the competition.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "rapidapi",
                color: "green-text-gradient",
            },
            {
                name: "TailwindCss",
                color: "pink-text-gradient",
            },
        ],
        image: intents,
        source_code_link: "https://tryintents.com/",
    },
    {
        name: "MovieWale",
        description:
            "Web application that is provide movie information, trading movie , latest movie .",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: moviewale,
        source_code_link: "https://moviewale.vercel.app/",
    },
    {
        name: "Domicile Ready",
        description:
            "This is service provider website, different type of services like cleaning, plumbing etc",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: domicile,
        source_code_link: "https://domicileready.com/",
    },
    {
        name: "Sarkari Public",
        description:
            "A platform that allows users to get information of code and computer languages.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Wordpress",
                color: "pink-text-gradient",
            },
        ],
        image: sarkaripublic,
        source_code_link: "https://www.sarkaripublic.com/",
    },

];
const customWebsites = [
    {
        name: "Whistle",
        url: "https://whistle.in/"
    },
    {
        name: "CME 4 Life",
        url: "https://cme4life.com/"
    },
    {
        name: "Listolet",
        url: "https://www.listolet.com/en"
    },
    {
        name: "The Furniture Gallery",
        url: "https://thefurnituregallery.com.au/"
    },
    {
        name: "Kothari International",
        url: "https://kotharischool.edu.in/"
    },
    {
        name: "Dental Elements",
        url: "https://www.dentalelements.com/"
    },
    {
        name: "Devon Community",
        url: "https://devoncf.com/"
    },
    {
        name: "MU-Wills",
        url: "https://www.mu-wills.com/"
    },
    {
        name: "In-Homecare",
        url: "https://in-homecare.co.uk/"
    },
    {
        name: "Berkshirecf",
        url: "https://www.berkshirecf.org/"
    },
    {
        name: "delraywindycitypizza",
        url: "https://www.delraywindycitypizza.com/"
    },
    {
        name: "MU Equity Release",
        url: "https://muequityrelease.co.uk/"
    },
    {
        name: "MU Mortgages",
        url: "https://www.mu-mortgages.com/"
    },
    {
        name: "Neil Adams Photography",
        url: "https://neiladamsphotography.com/"
    },

]
export { services, technologies, experiences, testimonials, projects, customWebsites };