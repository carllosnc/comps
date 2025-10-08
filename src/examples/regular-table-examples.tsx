import { RegularTable, type DataTable } from "../components/regular-table";
import { TbAlertTriangle, TbCheck } from "react-icons/tb";

export function RegularTableExample(){
  const data: DataTable<{
    name: string
    address: string
    'self phone': string | React.ReactElement
    status: string | React.ReactElement
  }> = [
    {
      name: 'Lysanne',
      address: '803 Madeline Inlet',
      'self phone': '782-675-4790 x013',
      status: (
        <span className="flex w-[120px] whitespace-nowrap gap-2 items-center py-1 px-3 bg-green-200 text-green-900 rounded-full">
          <TbCheck /> Complete
        </span>
      ),
    },

    {
      name: 'Margie',
      address: '892 Hollie View',
      'self phone': '593-687-5936 x7889',
      status: (
        <span className="flex w-[120px] whitespace-nowrap gap-2 items-center py-1 px-3 bg-red-200 text-red-900 rounded-full">
          <TbAlertTriangle /> Canceled
        </span>
      ),
    },

    {
      name: 'Barton',
      address: '75579 Satterfield Grove',
      'self phone': '590-531-8012',
      status: (
        <span className="flex w-[120px] whitespace-nowrap gap-2 items-center py-1 px-3 bg-green-200 text-green-900 rounded-full">
          <TbCheck /> Complete
        </span>
      ),
    },

    {
      name: 'Estevan',
      address: '75597 Langosh Course',
      'self phone': '604.355.0279',
      status: (
        <span className="flex w-[120px] whitespace-nowrap gap-2 items-center py-1 px-3 bg-red-200 text-red-900 rounded-full">
          <TbAlertTriangle /> Canceled
        </span>
      ),
    },
  ]

  return (
    <div className="p-[20px] flex flex-col gap-[30px]" id="button-example">
      <h3 className="text-neutral-800 font-bold text-[20px]">Regular table</h3>

      <div className="flex flex-wrap gap-[10px]">
        <RegularTable data={data} />
      </div>

      <div className="flex gap-[20px]">
        <a target="_blank" href="https://raw.githubusercontent.com/carllosnc/comps/refs/heads/master/src/components/regular-table.tsx">
          Code
        </a>
        <a target="_blank" href="https://github.com/carllosnc/comps/blob/master/src/docs/regular-table.md">
          Documentation
        </a>
      </div>
    </div>
  )
}