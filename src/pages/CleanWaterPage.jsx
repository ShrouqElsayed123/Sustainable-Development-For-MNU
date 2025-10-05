import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { CleanWaterData, main, global } from './../components/data/CleanWaterData';

const tabsContent = {
    title: "Clean Water and Sanitation",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: CleanWaterData,
};
export default function CleanWaterPage() {
    return <Tabs data={tabsContent} />;
}
