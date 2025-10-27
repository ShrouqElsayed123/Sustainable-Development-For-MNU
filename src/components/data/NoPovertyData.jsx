// src/components/FacultyGoals/tabsData.js
import { FaBookOpen } from "react-icons/fa";

export const NoPovertyData = [
    {
        id: "1",
        label: "University Policy",
        icon: <FaBookOpen size={20} />,
        title: "As part of its commitment to the UN Sustainable Development Goals, the university adopts a comprehensive policy to promote health and well-being among students, staff, and the wider community through:",
        content: [
            { text: "We aim to be a leading faculty in education.", link: "" },
            { text: "Our programs support innovation.", link: "0" },
        ],
    },
    {
        id: "2",
        label: "Activities / Initiatives",
        title: "Activities and Initiatives Details",
        content: [
            {
                text: "Health Awareness Campaign 2024",
                pdf: "/mnu/pdfs/health-awareness.pdf",
            },
            {
                text: "Community Volunteering Program",
                pdf: "/mnu/pdfs/community-volunteering.pdf",
            },
            {
                text: "Sustainability Week Activities",
                pdf: "/mnu/pdfs/sustainability-week.pdf",
            },
        ],
    }, {
        id: "3",
        label: "Partnerships",
        icon: <FaBookOpen size={20} />,
        title: "Courses of Level 1",
        content: [
            { text: "We aim to be a leading faculty in education.", link: "" },
            { text: "Our programs support innovation.", link: "0" },
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
export const main = "/mnu/images/nopoverty.png";
export const global = "/mnu/images/global.PNG";
