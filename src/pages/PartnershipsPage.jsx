import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { PartnershipsData, main, global } from './../components/data/PartnershipsData';

const tabsContent = {
    title: "Partnerships for the Goals",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: PartnershipsData,
};
export default function PartnershipsPage() {
    return <Tabs data={tabsContent} />;
}
