import React from "react";
import featureSvg from '../assets/feature.svg'

const Section2Features = (props) =>{
    return (
        <div className="flex p-[10px] w-[90%] gap-6 bg-[#e5d2ce]">
            <div>
                <img src={featureSvg}/>
            </div>
            <div className="h-[100px]">
                <div><h3 className="font-bold text-[23px]">{props.title}</h3></div>
                <div><p className="font-normal">{props.description}</p></div>
            </div>
        
        </div>

    )
};

export default Section2Features;    