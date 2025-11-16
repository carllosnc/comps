import { Button } from "../components/buttons";
import { Drawer, useDrawer } from "../components/drawer";

export function DrawerExample(){
  const [drawer1, openDrawer1, closeDrawer1] = useDrawer()

  return (
    <div className="p-[20px] flex flex-col gap-[30px]" id="drawer-example">
      <h3 className="text-neutral-800 font-bold text-[20px]">Drawer</h3>

      <div className="flex flex-wrap gap-[10px]">
        <Button onClick={openDrawer1}> Open Drawer</Button>

        <Drawer isOpen={drawer1} onClose={closeDrawer1}>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold"> Drawer example </h3>
            <p className="text-[14px] text-neutral-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
              ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum
              hic atque, ipsam nihil omnis. Aperiam vero explicabo eligendi
              inventore saepe maiores!
            </p>

            <p className="text-[14px] text-neutral-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
              ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum
              hic atque, ipsam nihil omnis. Aperiam vero explicabo eligendi
              inventore saepe maiores!
            </p>
          </div>
        </Drawer>
      </div>

      <div className="flex gap-[20px]">
        <a target="_blank" href="https://raw.githubusercontent.com/carllosnc/comps/refs/heads/master/src/components/drawer.tsx">
          Code
        </a>
        <a target="_blank" href="https://github.com/carllosnc/comps/blob/master/src/docs/drawer.md">
          Documentation
        </a>
      </div>
    </div>
  )
}