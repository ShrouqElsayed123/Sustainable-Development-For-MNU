import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { tabsData, facultyImage, global } from "../components/tabsData"

const tabsContent = {
    title: "No Poverty",
    icon: HiOutlineBuildingLibrary,
    facultyImage: facultyImage,
    globalImage: global,
    tabsData: tabsData,
};

export default function NoPoverty() {
    return <Tabs data={tabsContent} />;
}
