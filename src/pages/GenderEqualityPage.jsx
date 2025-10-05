import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { GenderEqualityData, main, global } from './../components/data/GenderEqualityData';

const tabsContent = {
    title: "Gender Equality",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: GenderEqualityData,
};
export default function GenderEqualityPage() {
    return <Tabs data={tabsContent} />;
}
