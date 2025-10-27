import { FaAward, FaBookOpen, FaHandshake, FaRunning } from "react-icons/fa";

export const AffordableData = [
    {
        id: "1",
        label: "University Policy",
        icon: <FaBookOpen size={20} />,
        title:
            "As part of its commitment to the UN Sustainable Development Goals, the university adopts a comprehensive policy to promote health and well-being among students, staff, and the wider community through:",
        content: [
            {
                text: "We aim to be a leading faculty in education.",
                link: "https://example.com/vision",
            },
            {
                text: "Our programs support innovation.",
                link: "https://example.com/innovation",
            },
        ],
    },
    {
        id: "2",
        label: "Activities / Initiatives",
        icon: <FaRunning size={20} />,
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
    },
    {
        id: "3",
        label: "Partnerships",
        icon: <FaHandshake size={20} />,
        title: "Courses of Level 1",
        content: [
            {
                text: "We aim to be a leading faculty in education.",
                link: "https://www.facebook.com/MenoufiaNU.Official/posts/pfbid0RC7kCE7LVKoh1k8JRmGFaeduYKA4Fczv3wZJsEWvdehvEqR4fBfR3YN7ydG6LvAQl?rdid=JkQbLJQZINmRyAWd#",
            },
            {
                text: "Our programs support innovation.",
                link: "https://example.com/innovation",
            },
        ],
    },
    {
        id: "4",
        label: "Achievements",
        icon: <FaAward size={20} />,
        title: "Courses of Level 1",
        content: [
            {
                text: "We aim to be a leading faculty in education.",
                link: "https://example.com/vision",
            },
            {
                text: "Our programs support innovation.",
                link: "",
            },
        ],
    },
];

export const main = "/mnu/images/affordable.png";
export const global = "/mnu/images/global.PNG";
