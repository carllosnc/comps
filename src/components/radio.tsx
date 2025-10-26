import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type useRadioReturn = [any, (value: any) => void]

export function useRadio(defaultValue: any = null): useRadioReturn {
  const [selected, setSelected] = useState<any>(defaultValue)

  function changeHandle(value: RadioValue) {
    setSelected((c: any) => value)
  }

  return [selected, changeHandle]
}

type RadioProps = {
  values: RadioValue[]
  onChange: (value: any) => void
}

const styles = {
  radio:`
    flex
    items-center
    gap-3
    outline-offset-4
    outline-neutral-400
  `,
  radio__group:`
    flex
    flex-col
    gap-4
    relative
  `,
  radio__check:`
    w-[24px]
    min-w-[24px]
    h-[24px]
    border
    border-neutral-400
    bg-white
    rounded-full
    flex
    justify-center
    items-center
    cursor-pointer
  `,
  radio__circle:`
    w-[15px]
    h-[15px]
    bg-neutral-800
    rounded-full
  `,
  radio__label:`
    text-neutral-700
  `
}

export function Radio({ values, onChange }: RadioProps) {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    onChange(values[selected].value)
  })

  function tabAction(index: number, item: { key: string; value: any }) {
    return function action(e: KeyboardEvent) {
      if (e.code === 'Space' || e.code === 'Enter') {
        setSelected(index)
        onChange(item.value)
      }

      if (e.code === 'Tab') {
        window.removeEventListener('keydown', action)
      }
    }
  }

  return (
    <div data-testid="radio-group" className={styles.radio__group}>
      {values.map((item, index) => {
        return (
          <div
            data-testid="radio"
            tabIndex={0}
            onClick={() => {
              setSelected(index)
              onChange(item.value)
            }}
            onFocus={() => {
              window.addEventListener('keydown', tabAction(index, item))
            }}
            key={item.value.length + index}
            className={styles.radio}
          >
            <div data-testid="radio-check" className={styles.radio__check}>
              {index === selected && (
                <motion.div
                  data-testid="radio-circle"
                  layoutId="radio"
                  className={styles.radio__circle}
                />
              )}
            </div>
            <span data-testid="radio-label" className={styles.radio__label}>
              {item.key}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export type RadioValue = { key: string; value: any }
