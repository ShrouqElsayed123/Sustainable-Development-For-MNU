import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { QualityEducationData, main, global } from './../components/data/QualityEducationData';

const tabsContent = {
    title: "Quality Education",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: QualityEducationData,
};
export default function QualityEducationPage() {
    return <Tabs data={tabsContent} />;
}
