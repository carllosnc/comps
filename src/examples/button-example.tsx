import { MdStar } from "react-icons/md";
import { Button } from "../components/buttons";

export function ButtonExample(){
  return (
    <div className="p-[20px] inline-flex flex-col gap-[20px]">
      <h3 className="text-neutral-800 font-bold text-[20px]">BUTTONS</h3>

      <div className="flex gap-[10px]">
        <Button> Hello world </Button>
        <Button isLoading> Loading </Button>
        <Button leftIcon={(<MdStar />)}>Button</Button>
        <Button rightIcon={(<MdStar />)}>Button</Button>
        <Button leftIcon={(<MdStar />)} rightIcon={(<MdStar />)}>Button</Button>
      </div>
    </div>
  )
}