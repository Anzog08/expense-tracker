import Image from "next/image";
import { RecordNav } from "@/components/RecorcNav";
import { TiArrowSortedDown } from "react-icons/ti";
import { RecordCol } from "@/components/RecordCol";
import { CheckData } from "@/components/CheckData";
import { MdHomeFilled } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";
import { useContext } from "react";
import { RecordModalContext } from "@/components/Providers/RecordProvider";

import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleJump = async (e) => {
    router.push("/dashboard");
  };

  const { showModal, setShowModal } = useContext(RecordModalContext);

  const data = [
    {
      icon: <MdHomeFilled size={22} color="#FFF" />,
      name: "Lending & Renting",
      time: "14:00",
      price: "- 1,000₮",
      ifIncome: true,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "- 1,000₮",
      ifIncome: false,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "- 1,000₮",
      ifIncome: true,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "- 1,000₮",
      ifIncome: false,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "- 1,000₮",
      ifIncome: true,
    },
  ];
  const data2 = [
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "- 1,000₮",
      ifIncome: false,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "- 1,000₮",
      ifIncome: true,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "- 1,000₮",
      ifIncome: true,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "- 1,000₮",
      ifIncome: true,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "- 1,000₮",
      ifIncome: true,
    },
    {
      iconColor: "#F54949",
      icon: <PiForkKnifeFill size={22} color="#FFF" />,
      name: "Food & Drinks",
      time: "14:00",
      price: "- 1,000₮",
      ifIncome: true,
    },
  ];

  return (
    <div className="w-[1440px] h-fit flex flex-col items-center m-auto bg-slate-200">
      <div className="w-screen flex justify-between items-center px-[380px] py-5 bg-white mb-[25px]">
        <div className="flex items-center gap-7 ">
          <Image src="/headerlogo.png" alt="logo" width={40} height={40} />
          <button onClick={handleJump} className="heading-4  cursor-pointer">
            Dashboard
          </button>
          <p className="cursor-pointer font-bold">Records</p>
        </div>
        <div className="flex items-center gap-5">
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-sm h-[35px] text-[15px] rounded-full bg-[#0166FF] font-semibold text-white px-5"
          >
            + Record
          </button>
          <Image src="/Avatar.png" alt="avatar" width={40} height={40} />
        </div>
      </div>

      <div className="h-[1070px] w-screen flex justify-between px-[380px] gap-8">
        <div className="w-[25%] h-[1050px] bg-white  rounded-md p-3 flex flex-col gap-6">
          <RecordCol />
        </div>
        <div className="w-[80%] h-[1000px] mt-5 flex flex-col gap-3">
          <RecordNav />
          <div className="flex flex-col gap-7 px-[25px]">
            <div className=" bg-white rounded-lg flex items-center px-[25px] justify-between h-[50px]">
              <div className="flex items-center gap-4 ">
                <input type="checkbox" className="checkbox w-[27px] h-[27px]" />
                <p>Select All</p>
              </div>
              <p className="text-[#94A3B8] font-semibold">- 35,500₮</p>
            </div>
            <div className="flex flex-col gap-[16px] ">
              <h2 className="font-bold">Today</h2>
              {data.map((item, index) => (
                <CheckData
                  key={index}
                  icon={item.icon}
                  name={item.name}
                  time={item.time}
                  price={item.price}
                  ifIncome={item.ifIncome}
                  iconColor={item.iconColor}
                />
              ))}
            </div>
            <div className="flex flex-col gap-[16px]">
              <h2 className="font-bold">Yesterday</h2>
              {data2.map((item, index) => (
                <CheckData
                  key={index}
                  icon={item.icon}
                  name={item.name}
                  time={item.time}
                  price={item.price}
                  ifIncome={item.ifIncome}
                  iconColor={item.iconColor}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
