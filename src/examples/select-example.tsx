import { useState } from "react";
import { Select, type SelectItem } from "../components/select";

export function SelectExample(){
  const [selected, setSelected] = useState<number | string>(0)

  const items: SelectItem[] = [
    {
      name: 'first',
      value: 1,
    },

    {
      name: 'second',
      value: 2,
    },

    {
      name: 'third',
      value: 3,
    },
  ]

  return (
    <div className="p-[20px] flex flex-col gap-[30px]" id="select-example">
      <h3 className="text-neutral-800 font-bold text-[20px]">Select</h3>

      <div className="flex flex-col flex-wrap gap-[10px]">
        <Select
          label="Custom select label"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelected(event.currentTarget.value)
          }}
          placeholder="Custom select"
          items={items}
        />
        <span className="text-green-700 mt-[10px]"> Selected value: {selected} </span>
      </div>

      <div className="flex gap-[20px]">
        <a target="_blank" href="https://raw.githubusercontent.com/carllosnc/comps/refs/heads/master/src/components/select.tsx">
          Code
        </a>
        <a target="_blank" href="https://github.com/carllosnc/comps/blob/master/src/docs/select.md">
          Documentation
        </a>
      </div>
    </div>
  )
}