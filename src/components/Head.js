import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        console.log("hiiiiiiiiiiiiiiiiiiii")
       dispatch(toggleMenu());
    };
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1">
            <img className="h-10 cursor-pointer"  onClick={toggleMenuHandler} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&usqp=CAU" alt="icon-menu" />
            <img className="h-10 w-32 mx-2"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdB5idttrtpfZkhv3Dz20jvA14SXgOCOKQiBT6_tnEyagCBi91sEJMTU8X6eLxzb5dQ&usqp=CAU"  alt="youtube" />
        </div>
        <div className="col-span-10 px-10">
            <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
        </div>
        <div className="col-span-1">
            <img alt="user" className="h-10"  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
        </div>
        </div>
    )
}

export default Head;