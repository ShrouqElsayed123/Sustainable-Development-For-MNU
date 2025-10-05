import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { LifeBelowWaterData, main, global } from './../components/data/LifeBelowWaterData';

const tabsContent = {
    title: "Life Below Water",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: LifeBelowWaterData,
};
export default function LifeBelowWaterPage() {
    return <Tabs data={tabsContent} />;
}
