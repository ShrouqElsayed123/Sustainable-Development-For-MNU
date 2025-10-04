import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { tabsData, facultyImage, global } from "../components/tabsData"
import Tabs from "../components/Tabs";

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
