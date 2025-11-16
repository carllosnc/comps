import { useEffect } from "react";
import { Radio, useRadio, type RadioValue } from "../components/radio";

export function RadioExample(){
  const [radioValue, changeHandle] = useRadio()

  const values: RadioValue[] = [
    {
      key: 'first item',
      value: 'value 1',
    },
    {
      key: 'second item',
      value: 'value 2',
    },
    {
      key: 'third item',
      value: 'value 3',
    },
  ]

  useEffect(() => {
    console.log(radioValue)
  })

  return (
    <div className="p-[20px] flex flex-col gap-[30px]" id="radio-example">
      <h3 className="text-neutral-800 font-bold text-[20px]"> Radio </h3>

      <div className="flex flex-col gap-4">
        <Radio values={values} onChange={changeHandle} />
        <p className="text-green-700">Selected: {radioValue}</p>
      </div>

      <div className="flex gap-[20px]">
        <a target="_blank" href="https://raw.githubusercontent.com/carllosnc/comps/refs/heads/master/src/components/radio.tsx">
          Code
        </a>
        <a target="_blank" href="https://github.com/carllosnc/comps/blob/master/src/docs/radio.md">
          Documentation
        </a>
      </div>
    </div>
  )
}