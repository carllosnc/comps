import { Expander } from "../components/expander";

export function ExpanderExample(){
  return (
    <div className="p-[20px] flex flex-col gap-[30px]">
      <h3 className="text-neutral-800 font-bold text-[20px]">Expander</h3>

      <div className="flex flex-col gap-[10px]">
        <Expander title="First expander">
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni molestias quidem ex placeat? Mollitia minima exercitationem, voluptatum, voluptatibus voluptate quis facere doloremque perspiciatis tenetur autem deleniti, illo incidunt nam quaerat.</p>
        </Expander> w
        <Expander title="Second expander">
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni molestias quidem ex placeat? Mollitia minima exercitationem, voluptatum, voluptatibus voluptate quis facere doloremque perspiciatis tenetur autem deleniti, illo incidunt nam quaerat.</p>
        </Expander>
        <Expander title="Third expander">
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni molestias quidem ex placeat? Mollitia minima exercitationem, voluptatum, voluptatibus voluptate quis facere doloremque perspiciatis tenetur autem deleniti, illo incidunt nam quaerat.</p>
        </Expander>
      </div>

      <div className="flex gap-[20px]">
        <a target="_blank" href="https://raw.githubusercontent.com/carllosnc/comps/refs/heads/master/src/components/expander.tsx">
          Code
        </a>
        <a target="_blank" href="https://github.com/carllosnc/comps/blob/master/src/docs/expander.md">
          Documentation
        </a>
      </div>
    </div>
  )
}