import { Tab, Tabs } from "../components/tabs";

export function TabsExample(){
  return (
    <div className="p-[20px] flex flex-col gap-[30px]" id="button-example">
      <h3 className="text-neutral-800 font-bold text-[20px]">Tabs</h3>

      <div className="flex flex-wrap gap-[10px]">
        <Tabs labels={['Tab 0', 'Tab 1', 'Tab 2']}>
          <Tab>
            <p className="text-neutral-700">
              0 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas dicta nulla doloremque et. Explicabo culpa delectus
              tempore, incidunt minus quam quibusdam tempora assumenda
              consequuntur dolore dolorem ipsa atque rem necessitatibus!
            </p>
          </Tab>

          <Tab>
            <p className="text-neutral-700">
              1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas dicta nulla doloremque et. Explicabo culpa delectus
              tempore, incidunt minus quam quibusdam tempora assumenda
            </p>
          </Tab>

          <Tab>
            <p className="text-neutral-700">
              2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas dicta nulla doloremque et. Explicabo culpa delectus
              tempore, incidunt minus quam quibusdam tempora assumenda
              consequuntur dolore dolorem ipsa atque rem necessitatibus! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Voluptas dicta
              nulla doloremque et. Explicabo culpa delectus tempore, incidunt
              minus quam quibusdam tempora assumenda consequuntur dolore dolorem
              ipsa atque rem necessitatibus!
            </p>
          </Tab>
        </Tabs>
      </div>

      <div className="flex gap-[20px]">
        <a target="_blank" href="https://raw.githubusercontent.com/carllosnc/comps/refs/heads/master/src/components/tabs.tsx">
          Code
        </a>
        <a target="_blank" href="https://github.com/carllosnc/comps/blob/master/src/docs/tabs.md">
          Documentation
        </a>
      </div>
    </div>
  )
}