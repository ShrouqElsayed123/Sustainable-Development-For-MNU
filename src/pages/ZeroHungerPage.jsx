
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { ZeroHungerData, main, global } from "../components/data/ZeroHungerData";

const tabsContent = {
    title: "Zero Hunger",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: ZeroHungerData,
};




export default function ZeroHungerPage() {
    return <Tabs data={tabsContent} />;

}
