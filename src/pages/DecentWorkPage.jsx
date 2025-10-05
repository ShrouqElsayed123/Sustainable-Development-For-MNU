import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { DecentWorkData, main, global } from './../components/data/DecentWorkData';

const tabsContent = {
    title: "Decent Work and Economic Growth",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: DecentWorkData,
};
export default function DecentWorkPage() {
    return <Tabs data={tabsContent} />;
}
