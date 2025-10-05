import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { ResponsibleConsumptionData, main, global } from './../components/data/ResponsibleConsumptionData';

const tabsContent = {
    title: "Responsible Consumption and Production",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: ResponsibleConsumptionData,
};
export default function ResponsibleConsumptionPage() {
    return <Tabs data={tabsContent} />;

}
