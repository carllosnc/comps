import { InfiniteSlider } from "../components/infinite-slider";

export function InfiniteSliderExample(){
  return (
    <div className="p-[20px] flex flex-col gap-[30px]" id="infinite-slider-example">
      <h3 className="text-neutral-800 font-bold text-[20px]">Infinite slider</h3>

      <div className="flex flex-wrap gap-[10px]">
        <InfiniteSlider
          direction='right'
          gap="gap-[10px]"
          speed="fast">

          <div className="w-[200px] h-[100px] bg-neutral-200 flex justify-center items-center"/>
          <div className="w-[200px] h-[100px] bg-neutral-200 flex justify-center items-center"/>
          <div className="w-[200px] h-[100px] bg-neutral-200 flex justify-center items-center"/>
          <div className="w-[200px] h-[100px] bg-neutral-200 flex justify-center items-center"/>
          <div className="w-[200px] h-[100px] bg-neutral-200 flex justify-center items-center"/>
          <div className="w-[200px] h-[100px] bg-neutral-200 flex justify-center items-center"/>
        </InfiniteSlider>
      </div>

      <div className="flex gap-[20px]">
        <a target="_blank" href="https://raw.githubusercontent.com/carllosnc/comps/refs/heads/master/src/components/infinite-slider.tsx">
          Code
        </a>
        <a target="_blank" href="https://github.com/carllosnc/comps/blob/master/src/docs/infinite-slider.md">
          Documentation
        </a>
      </div>
    </div>
  )
}