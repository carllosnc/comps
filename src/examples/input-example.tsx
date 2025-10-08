import { Input } from "../components/input";
import { FiMail, FiUser } from "react-icons/fi";

export function InputExample(){
  return (
    <div className="p-[20px] flex flex-col gap-[30px]" id="input-example">
      <h3 className="text-neutral-800 font-bold text-[20px]">Inputs</h3>

      <div className="flex flex-col flex-wrap gap-[10px]">
        <Input placeholder="ex: John doe" type="text" />

        <Input label="Name" placeholder="ex: John Doe" type="text" />

        <Input
          value="Jonh Doe"
          readOnly
          label="Name"
          placeholder="ex: John Doe"
          type="text"
        />

        <Input
          value="Jonh Doe"
          readOnly
          label="Name"
          placeholder="ex: John Doe"
          type="text"
          icon={<FiUser />}
        />

        <Input
          value="Jonh Doe"
          readOnly
          label="Name"
          placeholder="ex: John Doe"
          type="text"
          success
          icon={<FiUser />}
        />

        <Input
          value="Jonh Doe"
          readOnly
          label="Name"
          placeholder="ex: John Doe"
          type="text"
          success
          description="Your username can be your email address, name, or nickname. Usernames can incorporate spaces,  numbers, and certain special characters such as periods (.), hyphens (-), apostrophes ('), underscores (_), and the @ sign."
          icon={<FiUser />}
        />

        <Input
          value="johndoegmail.com"
          readOnly
          label="Email"
          placeholder="ex: johndoe@gmail.com"
          type="email"
          error
          errorMessage="invalid email"
          icon={<FiMail />}
        />
      </div>

      <div className="flex gap-[20px]">
        <a target="_blank" href="https://raw.githubusercontent.com/carllosnc/comps/refs/heads/master/src/components/input.tsx">
          Code
        </a>
        <a target="_blank" href="https://github.com/carllosnc/comps/blob/master/src/docs/input.md">
          Documentation
        </a>
      </div>
    </div>
  )
}