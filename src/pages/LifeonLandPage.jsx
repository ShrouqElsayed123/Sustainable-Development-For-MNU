import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { LifeonLandData, main, global } from './../components/data/LifeonLandData';

const tabsContent = {
    title: "Life on Land",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: LifeonLandData,
};
export default function LifeonLandPage() {
    return <Tabs data={tabsContent} />;
}
