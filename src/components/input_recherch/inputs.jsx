
import Datepicker from "react-tailwindcss-datepicker";
import React, {useRef, useState} from "react";
import { RiParentFill } from "react-icons/ri";
import { FiMinusCircle,FiPlusCircle } from "react-icons/fi";




import {
    Menu,
    MenuHandler,
    Button,
    MenuList,
    MenuItem,
    Input, menu,

} from "@material-tailwind/react";

export default function Inputs(){










    const [counterpr, setCounterpr] = useState(0);
    const [counterprchld, setCounterprchld] = useState(0);

    //increase counter
    const increase = () => {
        setCounterpr(count => count + 1);
    };

    //decrease counter
    const decrease = () => {
        if (counterpr > 0) {
            setCounterpr(count => count - 1);
        }

    };
    const increasechld = () => {
        setCounterprchld(count => count + 1);
    };

    //decrease counter
    const decreasechld = () => {
        if (counterprchld > 0) {
            setCounterprchld(count => count - 1);
        }

    };


    const [value, setValue] = useState({
        startDate: null,
        endDate: null,

    });
    console.log(value.startDate)
    const date1 =new Date(value.startDate)
    const date2 =new Date(value.endDate)
    const  oneday= 24 * 60 * 60 * 1000;
  const date11= Math.round(Math.abs((date1-date2)/oneday))
    console.log(date11)

   const datt=date1.getUTCDate()
    console.log(date1-date2)



    const handleValueChange = (newValue) => {

        setValue(newValue);


}

    const [isactiv,setIsactiv]= useState(false)



    return (
        <div className=" md:flex-col flex justify-around font_home   rounded-md w-[80%] mx-auto p-7 bg-gradient-to-r from-[#7F32CD] to-amber-700 shadow-md shadow-black -mt-16  ">
            <div>
        <Datepicker
inputId="id"

            inputClassName=" md:w-[100%] w-[312px] text-centre rounded-md focus:ring-0 font-normal bg-byd p-5 text-black shadow-black shadow-sm "
            toggleClassName="absolute rounded-r-lg  right-0 h-full px-3 text-gray-900 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
            separator={"/"}
            value={value}
asSingle={false}

useRange={false}

showFooter={true}

onChange={handleValueChange}
            minDate={new Date()}
        />

            </div>
            <div>

                <div className="flex bg-byd w-[312px]  md:w-auto md:my-2.5 rounded-2xl justify-center items-center relative p-5 cursor-pointer shadow-black shadow-sm" onClick={e => {


                    setIsactiv(!isactiv)
                }}>
                    <span className="absolute left-0 ml-4 text-xl"><RiParentFill/></span>

                        <div className="flex   items-center space-x-2 text-center font-semibold">
                            <span className="capitalize ">{counterpr} parent ,</span>
                            <span className="capitalize">{counterprchld} Child</span>
                        </div>

                </div>


                {isactiv &&(
                    <div
                        className="z-10 absolute bg-byd md:h-full md:w-full md:left-0 md:top-0 h-[200px] w-[312px] mt-2.5 rounded-2xl p-4 shadow-black shadow-sm    ">
                        <div className="flex mt-2 justify-between">
                            <div>

                                <p className="mr-10 capitalize font-semibold text-xl mt-1">Adults</p>
                                <span className="text-[11px]">Ages 18 or above
</span>
                            </div>
                            <div className="flex items-start justify-end">
                                <span className="text-xl mt-1.5 color_primary cursor-pointer"
                                      onClick={decrease}><FiMinusCircle/></span>
                                <span className="text-xl text-black mt-1 px-2.5">{counterpr}</span>
                                <span className="text-xl mt-1.5 color_primary cursor-pointer"
                                      onClick={increase}><FiPlusCircle/></span>
                            </div>

                        </div>
                        <div className="flex mt-2 justify-between">
                            <div>

                                <p className="mr-10 capitalize font-semibold text-xl mt-1">Child</p>
                                <span className="text-[11px]">Ages 0-17
</span>
                            </div>
                            <div className="flex items-start justify-end">
                                <span className="text-xl mt-1.5 color_primary cursor-pointer"
                                      onClick={decreasechld}><FiMinusCircle/></span>
                                <span className="text-xl text-black mt-1 px-2.5">{counterprchld}</span>
                                <span className="text-xl mt-1.5 color_primary cursor-pointer"
                                      onClick={increasechld}><FiPlusCircle/></span>
                            </div>

                        </div>


                        <button className="md:block hidden md:uppercase md:mt-32 md:ml-[35%] md:p-5 md:border-2 md:rounded-full md:text-amber-50 md:bg-gradient-to-r md:from-indigo-500 md:via-purple-500 md:to-pink-500 md:w-32  " onClick={e => {
                            setIsactiv(false)
                        }}>apply
                        </button>

                    </div>

                )}


            </div>
            <Button className="text-amber-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5  ">Search</Button>
        </div>
    );


}