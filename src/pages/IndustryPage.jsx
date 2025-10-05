import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { IndustryData, main, global } from './../components/data/IndustryData';

const tabsContent = {
    title: "Industry, Innovation, and Infrastructure",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: IndustryData,
};
export default function IndustryPage() {
    return <Tabs data={tabsContent} />;
}
