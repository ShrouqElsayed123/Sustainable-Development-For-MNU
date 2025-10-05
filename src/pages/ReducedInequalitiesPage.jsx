import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { ReducedInequalitiesData, main, global } from './../components/data/ReducedInequalitiesData';

const tabsContent = {
    title: "Reduced Inequalities",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: ReducedInequalitiesData,
};
export default function ReducedInequalitiesPage() {
    return <Tabs data={tabsContent} />;
}

