import { motion } from 'framer-motion'
import { style } from 'motion/react-client'
import { useState } from 'react'

type CheckboxProps = {
  label: string
  isChecked: boolean
  toggle: () => void
}

type useCheckboxReturn = [
  boolean, () => void
]

export function useCheckbox(defaultValue: boolean = false): useCheckboxReturn {
  const [isChecked, setIsChecked] = useState<boolean>(defaultValue)

  function toggleCheck() {
    setIsChecked(s => !s)
  }

  return [isChecked, toggleCheck]
}

const styles = {
  checkbox:`
    flex
    gap-3
    text-sm
    items-center
    cursor-pointer
    outline-offset-4
    outline-neutral-400
  `,

  checkbox__square:`
    w-[22px]
    min-w-[24px]
    h-[24px]
    border
    flex
    justify-center
    items-center
    border-neutral-400
    bg-white
    hover:bg-neutral-200
  `,

  checkbox__checked:`
    w-[15px]
    h-[15px]
    bg-neutral-800
  `,

  checkbox__label:`
    text-neutral-700
  `,
}

export function Checkbox({ label, isChecked, toggle }: CheckboxProps) {
  const checked = {
    normal: {
      opacity: 0,
      scale: 0,
    },

    checked: {
      opacity: 1,
      scale: 1,
    },
  }

  const tabAction = function (e: KeyboardEvent) {
    if (e.code === 'Space' || e.code === 'Enter') {
      toggle()
    }

    if (e.code === 'Tab') {
      window.removeEventListener('keydown', tabAction)
    }
  }

  return (
    <motion.article
      data-testid="checkbox"
      onClick={toggle}
      className={styles.checkbox}
      onFocus={() => {
        window.addEventListener('keydown', tabAction)
      }}
      onBlur={() => {
        window.removeEventListener('keydown', tabAction)
      }}
      tabIndex={0}
    >
      <div data-testid="checkbox-square" className={styles.checkbox__square}>
        <motion.div
          data-testid="checkbox-checked"
          variants={checked}
          initial="normal"
          className={styles.checkbox__checked}
          animate={isChecked ? 'checked' : 'normal'}
        />
      </div>
      <div data-testid="checkbox-label" className={styles.checkbox__label}>
        {label}
      </div>
    </motion.article>
  )
}