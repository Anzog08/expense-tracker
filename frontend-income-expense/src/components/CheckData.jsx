import { MdHomeFilled } from "react-icons/md";

export const CheckData = (props) => {
  const {
    iconColor = "#0166FF",
    icon = <MdHomeFilled size={22} color="#FFF" />,
    name = "Lending & Renting",
    time = "14:00",
    price = "- 1,000₮",
    ifIncome = false,
    primaryColor = "#EAB308",
    secondaryColor = "#666666",
    incomeColor = "#23E01F",
    expenseColor = "#F54949",
  } = props;

  return (
    <div className="w-full flex justify-between h-[55px] rounded-lg px-6 items-center bg-white py-3">
      <div className="flex items-center gap-3 h-fit">
        <input type="checkbox" className="checkbox w-[27px] h-[27px]" />
        <div
          style={{
            backgroundColor: iconColor,
          }}
          className="w-[40px] h-[40px] rounded-full flex justify-center items-center"
        >
          {icon}
        </div>
        <div className="ml-2 flex flex-col justify-between h-full">
          <p className={`text-${primaryColor} text-[16px]`}>{name}</p>
          <p className={`text-${secondaryColor} text-[14px]`}>{time}</p>
        </div>
      </div>
      <p
        style={{
          color: ifIncome ? primaryColor : expenseColor,
        }}
        className={`font-bold text-${
          !ifIncome ? incomeColor : expenseColor
        } text-[16px]`}
      >
        {price}
      </p>
    </div>
  );
};
