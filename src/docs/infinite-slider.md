# InfiniteSlider

## Usage

```tsx
import { InfiniteSlider } from './infinite-slider'

function App() {
  return (
    <InfiniteSlider
      direction='right'
      gap="gap-[10px]"
      speed="fast">

      <div className="w-[200px] h-[100px] bg-neutral-200 flex justify-center items-center"/>
      <div className="w-[200px] h-[100px] bg-neutral-200 flex justify-center items-center" />
      <div className="w-[200px] h-[100px] bg-neutral-200 flex justify-center items-center"/>
      <div className="w-[200px] h-[100px] bg-neutral-200 flex justify-center items-center"/>
      <div className="w-[200px] h-[100px] bg-neutral-200 flex justify-center items-center" />
      <div className="w-[200px] h-[100px] bg-neutral-200 flex justify-center items-center">
      </div>
    </InfiniteSlider>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | **Required** | Content to be scrolled infinitely |
| `speed` | `"slow" \| "normal" \| "fast"` | `"normal"` | Animation speed |
| `direction` | `"left" \| "right"` | `"left"` | Scroll direction |
| `className` | `string` | `undefined` | Additional CSS classes for the container |
| `gap` | `string` | `"gap-8"` | Tailwind gap class for spacing between items |
| `pauseOnHover` | `boolean` | `true` | Whether to pause animation on hover |

## CSS Requirements

This component requires the following Tailwind CSS animations to be defined in your `global.css`:

```css
@layer utilities {
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-scroll {
    animation: scroll 30s linear infinite;
  }

  .animate-scroll:hover {
    animation-play-state: paused;
  }

  .animate-scroll-slow {
    animation: scroll 50s linear infinite;
  }

  .animate-scroll-slow:hover {
    animation-play-state: paused;
  }

  .animate-scroll-fast {
    animation: scroll 15s linear infinite;
  }

  .animate-scroll-fast:hover {
    animation-play-state: paused;
  }
}
```