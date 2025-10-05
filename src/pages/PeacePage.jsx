import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { PeaceData, main, global } from './../components/data/PeaceData';

const tabsContent = {
    title: "Peace, Justice, and Strong Institutions",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: PeaceData,
};
export default function PeacePage() {
    return <Tabs data={tabsContent} />;
}
