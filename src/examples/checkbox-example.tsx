import { useEffect } from "react";
import { Checkbox, useCheckbox } from "../components/checkbox";

export function CheckboxExample(){
  const [check1, togleCheck1] = useCheckbox()
  const [check2, togleCheck2] = useCheckbox()
  const [check3, togleCheck3] = useCheckbox()

  useEffect(() => {
    console.log('check1', check1)
    console.log('check2', check2)
    console.log('check3', check3)
  })

  return (
    <div className="p-[20px] flex flex-col gap-[30px]" id="checkbox-example">
      <h3 className="text-neutral-800 font-bold text-[20px]">Checkbox</h3>

      <div className="flex flex-wrap gap-[10px]">
        <div className="flex flex-col gap-4">
          <Checkbox label="Checkbox 1" isChecked={check1} toggle={togleCheck1} />
          <Checkbox label="Checkbox 2" isChecked={check2} toggle={togleCheck2} />
          <Checkbox label="Checkbox 3" isChecked={check3} toggle={togleCheck3} />
        </div>
      </div>

      <div className="flex gap-[20px]">
        <a target="_blank" href="https://raw.githubusercontent.com/carllosnc/comps/refs/heads/master/src/components/checkbox.tsx">
          Code
        </a>
        <a target="_blank" href="https://github.com/carllosnc/comps/blob/master/src/docs/checkbox.md">
          Documentation
        </a>
      </div>
    </div>
  )
}