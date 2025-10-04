import { MdStar } from "react-icons/md";
import { Button } from "../components/buttons";

export function ButtonExample(){
  return (
    <div className="p-[20px] flex flex-col gap-[30px]">
      <h3 className="text-neutral-800 font-bold text-[20px]">Buttons</h3>

      <div className="flex flex-wrap gap-[10px]">
        <Button> Button </Button>
        <Button isLoading> Loading </Button>
        <Button leftIcon={(<MdStar />)}>Button</Button>
        <Button rightIcon={(<MdStar />)}>Button</Button>
        <Button leftIcon={(<MdStar />)} rightIcon={(<MdStar />)}>Button</Button>
      </div>

      <div className="flex gap-[20px]">
        <a target="_blank" href="https://raw.githubusercontent.com/carllosnc/comps/refs/heads/master/src/components/buttons.tsx">
          Code
        </a>
        <a target="_blank" href="https://github.com/carllosnc/comps/blob/master/src/docs/button.md">
          Documentation
        </a>
      </div>
    </div>
  )
}