import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { NoPovertyData, main, global } from "../components/data/NoPovertyData"

const tabsContent = {
    title: "No Poverty",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: NoPovertyData,
};

export default function NoPovertyPage() {
    return <Tabs data={tabsContent} />;
}
