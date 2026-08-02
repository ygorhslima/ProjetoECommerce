import { BsMenuDown } from "react-icons/bs";

interface PropsButtonHamburger{
    onClick: () => void;
}
export default function ButtonHamburger({onClick}: PropsButtonHamburger) {
  return (
    <button onClick={onClick}>
      <BsMenuDown color="white" fontSize={20} />
    </button>
  );
}
