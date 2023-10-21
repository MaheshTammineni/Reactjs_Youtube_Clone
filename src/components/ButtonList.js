import React from "react";
import Button from "./Button";
const ButtonList = () => {
    const list = ["All","Gaming","Songs","Live","Soccer","Cricket","News","Cooking"];
    return (
        <div className="flex">
            {list.map((res,index) => <Button key={index} name={res}/>)}
        </div>
    );
};

export default ButtonList;