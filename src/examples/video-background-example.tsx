import { VideoBackground } from "../components/video-background";
import { TbSun } from "react-icons/tb";

export function VideoBackgroundExample(){
  return (
    <div className="p-[20px] flex flex-col gap-[30px]" id="video-backgorund-example">
      <h3 className="text-neutral-800 font-bold text-[20px]">Video background</h3>

      <div className="flex flex-wrap gap-[10px]">
        <VideoBackground video="https://videos.pexels.com/video-files/20315562/20315562-hd_1280_720_30fps.mp4">
          <div className="flex flex-col items-center gap-4 text-white text-center">
            <TbSun className="text-7xl animate-bounce" />
            <h1 className="text-4xl font-bold"> COMPS </h1>
          </div>
        </VideoBackground>
      </div>

      <div className="flex gap-[20px]">
        <a target="_blank" href="https://raw.githubusercontent.com/carllosnc/comps/refs/heads/master/src/components/video-background.tsx">
          Code
        </a>
        <a target="_blank" href="https://github.com/carllosnc/comps/blob/master/src/docs/video-background.md">
          Documentation
        </a>
      </div>
    </div>
  )
}