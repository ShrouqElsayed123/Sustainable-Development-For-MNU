
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Tabs from "../components/Tabs";

import { AffordableData, main, global } from "../components/data/AffordableData"

const tabsContent = {
    title: "Affordable and Clean Energy",
    icon: HiOutlineBuildingLibrary,
    main: main,
    globalImage: global,
    tabsData: AffordableData,
};



export default function AffordablePage() {
    return <Tabs data={tabsContent} />;

}
