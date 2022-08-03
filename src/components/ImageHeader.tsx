import coverImage from "../cover.jpg";
import React from "react";

const ImageHeader = () => {
    return (
        <div className={"-z-10"}>
            <img src={coverImage} alt={"Photo of CompSoc BBQ 2019 #3"} className={"h-48 w-full object-cover object-center"}/>
            <div className={"bg-orange-500 py-1"}></div>
        </div>
    )
}

export default ImageHeader;