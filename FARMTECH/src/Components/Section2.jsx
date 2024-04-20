import Section2Feature from "./Section2Feature";
import React from "react";

const Section2 = () =>{
    return(
        <div className="bg-[#f1ddd9] h-[550px] p-[30px] flex flex-col gap-9">
            <div className="flex flex-col justify-center items-center gap-5">
                <h3 className="font-bold text-[15px]">Features</h3>
                <h2 className="font-bold text-[50px]">Key Features</h2>
            </div>
            <div className="flex pl-[27px]">
                <div className="flex flex-col gap-10">
                <Section2Feature title="Soil Moisture Level" description="Track and monitor the moisture levels in your soil in real-time"/>
                <Section2Feature title="Irrigation Schedules" description="Set and customize irrigation schedules based on soil moisture levels and weather forecasts"/>
                </div>
                <div className="flex flex-col gap-10">
                <Section2Feature title="Weather Forecast" description="Stay updated with accurate weather forecasts to plan your irrigation schedule"/>
                <Section2Feature title="Intutive Control" description="Easily interact with the system using user-friendly controls for efficient farming operations"/>
                </div>
            </div>
        </div>
    );
}

export default Section2;