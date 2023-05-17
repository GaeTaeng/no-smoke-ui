import React, { useState } from "react";

import SEOMetaTag from "../../SEOMetaTag";
import BullsAndCows from "./BullsAndCows/BullsAndCows";
import GamesMenu from "./GamesMenu";
import LandBuildings from "./LandBuilding.js/LandBuilding";
import Ladder from "./LodderGame/Ladder";
 


const MENU_LIST = [
    {txt : "LandBuildings", component : <LandBuildings  />}, 
    {txt : "숫자야구게임", component : <BullsAndCows  />}, 
    {txt : "사다리게임", component : <Ladder  />},  
]

export default function Games({ children }) { 
    const [idx_menu, setIdxMenu] = useState(0); 
    return (
        <div> 
        <SEOMetaTag title={"Games"} description={"게임공간"} imgsrc={"public/logo.png"} />
            {/* Playground Menu영역 Start */}
            <GamesMenu MENU_LIST={MENU_LIST} idx_menu={idx_menu} setIdxMenu={setIdxMenu}/>
            {/* Playground Menu영역 End */}

 
            <div className="contents">
                {MENU_LIST[idx_menu].component}
            </div> 

        </div>
    )
}