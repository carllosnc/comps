# Buttons

## Import
```tsx
import { Button } from '@/components'
```

## Dependencies
```shell
bun add react-icons
```

## Usage
```tsx
import { Button } from '@/components'
import { MdStar, MdHeadset } from 'react-icons/md'

function App() {
  return (
    <div>
      <div className="flex gap-4">
        <Button leftIcon={<MdStar />}>Button</Button>
        <Button rightIcon={<MdHeadset />}>Button</Button>
        <Button leftIcon={<MdStar />} rightIcon={<MdHeadset />}>
          Button
        </Button>
      </div>

      <div className="flex gap-4">
        <Button isLoading="Carregando...">Button</Button>
        <Button isLoading="Loading...">Button</Button>
      </div>
    </div>
  )
}
```

## Props
| name        | type                                                    | default     | description   |
| ----------- | ------------------------------------------------------- | ----------- | ------------- |
| `children`  | string                                                  | `undefined` | button label  |
| `isloading` | string                                                  | `false`     | loading mode  |
| `leftIcon`  | [ReactIcon](https://react-icons.github.io/react-icons/) | `undefined` | icon at left  |
| `rightIcon` | [ReactIcon](https://react-icons.github.io/react-icons/) | `undefined` | icon at right |
