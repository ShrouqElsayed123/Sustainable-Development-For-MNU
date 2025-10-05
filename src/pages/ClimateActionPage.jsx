import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { ClimateActionData, main, global } from './../components/data/ClimateActionData';

const tabsContent = {
    title: "Climate Action",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: ClimateActionData,
};
export default function ClimateActionPage() {
    return <Tabs data={tabsContent} />;
}
