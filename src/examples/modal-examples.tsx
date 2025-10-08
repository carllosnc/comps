import { MdStar } from "react-icons/md";
import { Button } from "../components/buttons";
import { Modal, useModal } from "../components/modal";

export function ModalExample(){
  const [modal1, openModal1, closeModal1] = useModal()

  return (
    <div className="p-[20px] flex flex-col gap-[30px]" id="modal-example">
      <h3 className="text-neutral-800 font-bold text-[20px]">Modal</h3>

      <div className="flex flex-wrap gap-[10px]">
        <Modal isOpen={modal1} onClose={closeModal1}>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold"> Modal example </h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
              ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum
              hic atque, ipsam nihil omnis. Aperiam vero explicabo eligendi
              inventore saepe maiores!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
              ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum
              hic atque, ipsam nihil omnis. Aperiam vero explicabo eligendi
              inventore saepe maiores!
            </p>
          </div>
        </Modal>

        <Button onClick={openModal1}> Open Modal </Button>
      </div>

      <div className="flex gap-[20px]">
        <a target="_blank" href="https://raw.githubusercontent.com/carllosnc/comps/refs/heads/master/src/components/modal.tsx">
          Code
        </a>
        <a target="_blank" href="https://github.com/carllosnc/comps/blob/master/src/docs/modal.md">
          Documentation
        </a>
      </div>
    </div>
  )
}