import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { SustainableCitiesData, main, global } from './../components/data/SustainableCitiesData';

const tabsContent = {
    title: "Sustainable Cities and Communities",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: SustainableCitiesData,
};
export default function SustainableCitiesPage() {
    return <Tabs data={tabsContent} />;

}
