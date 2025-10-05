import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { GoodHealthData, main, global } from './../components/data/GoodHealthData';

const tabsContent = {
    title: "Good Health and Well-being",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: GoodHealthData,
};

export default function GoodHealthPage() {
    return <Tabs data={tabsContent} />;
}
