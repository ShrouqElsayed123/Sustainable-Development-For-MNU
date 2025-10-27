// src/components/FacultyGoals/tabsData.js
import { FaBookOpen } from "react-icons/fa";

export const QualityEducationData = [
    {
        id: "1",
        label: "University Policy",
        icon: <FaBookOpen size={20} />,
        title: "The University is committed to providing inclusive, high-quality education by:",
        content: [
            { text: "Supporting research in early years and lifelong learning.", link: "" },
            { text: "Preparing graduates with teaching qualifications.", link: "" },
            { text: "Enabling first-generation students to access higher education.", link: "" },
            { text: "Integrating sustainability topics into curricula.", link: "" },
            { text: "Allocating funds for sustainability research.", link: "" },
            { text: "Organizing sustainability-related events and community services with student involvement.", link: "" },
            { text: "Establishing a unit to coordinate sustainability and monitor performance", link: "" },


        ],
    },
    {
        id: "2",
        label: "Activities / Initiatives",
        title: "Activities and Initiatives Details",
        content: [
            {
                text: "(2023-2024) University Activities and Initiatives to Promote Quality Education",
                pdf: "/mnu/pdfs/(2023-2024) University Activities and Initiatives to Promote Quality Education.pdf",
            },
            {
                text: "(2024–2025) University Activities and Initiatives to Promote Quality Education  ",
                pdf: "/mnu/pdfs/(2024–2025) University Activities and Initiatives to Promote Quality Education.pdf",
            },

        ],
    }, {
        id: "3",
        label: "Partnerships",
        icon: <FaBookOpen size={20} />,
        title: "",
        content: [
            { text: "Dar Al-Rahma Orphanage & Institutional Nursery (Shibin El-Kom) ", link: "" },
            { text: "National Authority for Quality Assurance and Accreditation of Education (NAQAAE) ", link: "" },
            { text: "Arab Youth & Environment Union (League of Arab States / Arab Ministers of Youth Council) ", link: "" },
            { text: "Egyptian Ministry of Youth and Sports ", link: "" },

        ],
    }, {
        id: "4",
        label: "Achievements",
        icon: <FaBookOpen size={20} />,
        title: "Courses of Level 1",
        content: [
            { text: "We aim to be a leading faculty in education.", link: "" },
            { text: "Our programs support innovation.", link: "0" },
        ],
    },
];

export const main = "/mnu/images/qualityeducation.png";
export const global = "/mnu/images/global.PNG";
