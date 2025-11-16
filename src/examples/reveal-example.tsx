import { Reveal } from "../components/reveal";

export function RevealExample(){
  return (
    <div className="p-[20px] flex flex-col gap-[30px]" id="button-example">
      <h3 className="text-neutral-800 font-bold text-[20px]">Reveal</h3>

      <div className="flex flex-col flex-wrap gap-[10px]">
        <Reveal type="DOWN" delay={0.1}>
          <div className="w-full h-[70px] bg-neutral-200" />
        </Reveal>

        <Reveal type="LEFT" delay={0.2}>
          <div className="w-full h-[70px] bg-neutral-200" />
        </Reveal>

        <Reveal type="LEFT" delay={0.3}>
          <div className="w-full h-[70px] bg-neutral-200" />
        </Reveal>

        <Reveal type="ROTATE" delay={0.4}>
          <div className="w-full h-[70px] bg-neutral-200" />
        </Reveal>

        <Reveal type="SCALE" delay={0.5}>
          <div className="w-full h-[70px] bg-neutral-200" />
        </Reveal>

        <Reveal type="UP" delay={0.6}>
          <div className="w-full h-[70px] bg-neutral-200" />
        </Reveal>
      </div>

      <div className="flex gap-[20px]">
        <a target="_blank" href="https://raw.githubusercontent.com/carllosnc/comps/refs/heads/master/src/components/reveal.tsx">
          Code
        </a>
        <a target="_blank" href="https://github.com/carllosnc/comps/blob/master/src/docs/reveal.md">
          Documentation
        </a>
      </div>
    </div>
  )
}