import { type ReactNode } from 'react'

type VideoBackgroundProps = {
  video: string
  children?: ReactNode
  className?: string
}

const styles = {
  video_background:`
    relative
    flex
    justify-center
    items-center
    w-full
    h-[600px]
    overflow-hidden
    bg-black
  `,
  video_background_media:`
    absolute
    z-0
    w-auto
    saturate-150
    min-w-full
    min-h-full
    max-w-none
    mix-blend-normal
  `,
  video_background_content:`
    p-4
    z-0
    justify-center
    items-center
    flex
    flex-col
    bg-black/20
    backdrop-blur-xs
    w-full
    h-full
  `
}

export function VideoBackground({ children, video }: VideoBackgroundProps) {
  return (
    <section data-testid="video-background" className={styles.video_background}>
      <video
        data-testid="video-background-media"
        className={styles.video_background_media}
        autoPlay
        muted
        loop
        id="myVideo"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div
        data-testid="video-background-content"
        className={styles.video_background_content}
      >
        {children}
      </div>
    </section>
  )
}