import farmerPng from '../assets/farmer.png'
const Section3 = () =>{
    return(
        <div>
            <div className="h-[70px] flex justify-center items-center">
                <h1 className="font-bold text-[35px]">Frequently Asked Questions</h1>
            </div>
            
            <div className='flex'>
                <div className='w-[49%]'>
                    <img className='h-[580px]' src={farmerPng} />
                </div>

                <div className="bg-[#222684] text-[white] flex flex-col gap-10 p-[35px]">
                <div className="flex flex-col gap-5">
                    <h4 className="font-bold text-xl">What is soil moisture level monitoring?</h4>
                    <p>Soil moisture level monitoring is the process of measuring the amount of water present in the soil to help farmers determine when and how much to irrigate their crops.</p>
                </div>

                <div className="flex flex-col gap-5">
                    <h4 className="font-bold text-xl"> How does weather forecasting help in agriculture?</h4>
                    <p>Weather forecasting provides valuable information to farmers about upcoming weather conditions, allowing them to make informed decisions about planting, harvesting, and irrigation schedules.</p>
                </div>

                <div className="flex flex-col gap-5">
                    <h4 className="font-bold text-xl">Why is it important to monitor soil moisture levels?</h4>
                    <p>Monitoring soil moisture levels helps farmers optimize water usage, prevent overwatering or underwatering, and improve crop yield and quality.</p>
                </div>

                <div className="flex flex-col gap-5">
                    <h4 className="font-bold text-xl">What are the benefits of using an irrigation schedule?</h4>
                    <p>An irrigation schedule helps farmers efficiently manage water resources, reduce water wastage, and ensure that crops receive the right amount of water at the right time.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Section3;    