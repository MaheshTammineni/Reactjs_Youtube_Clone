import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
const MainContainer = () => {
    return (
        <div className="pl-8 col-span-11">
         {/* <div className="flex"> */}
            <ButtonList />
            <VideoContainer />
        </div>
    )
}

export default MainContainer;