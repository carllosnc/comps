import { motion } from 'framer-motion'
import { type ReactNode, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'

type ExpanderProps = {
  title: string
  children: ReactNode
}

const styles = {
  expander: `
    border
    border-neutral-300
    rounded-md
    overflow-hidden
    outline-offset-4
    outline-neutral-400
  `,
  expander__title: `
    font-bold
    text-neutral-800
    p-3
    text-sm
    cursor-pointer
    flex
    gap-2
    items-center
  `,
  expander__container: `
    overflow-hidden
  `,
  expander__content: `
    @apply
    overflow-hidden
    p-3
    pt-0
    text-neutral-600
  `,
  expander__arrow: `
    @apply
    text-base
    text-neutral-500
  `
}

export function Expander({ title, children }: ExpanderProps) {
  const [isOpen, setIsOpen] = useState<boolean>()

  const container = {
    normal: {
      opacity: 0,
      height: '0px',
    },
    expanded: {
      opacity: 1,
      height: 'auto',
    },
  }

  const arrow = {
    normal: {
      rotate: 0,
    },
    expanded: {
      rotate: 90,
    },
  }

  function toggle() {
    setIsOpen(s => !s)
  }

  function tabAction(e: KeyboardEvent) {
    if (e.code === 'Space' || e.code === 'Enter') {
      toggle()
    }

    if (e.code === 'Tab') {
      window.removeEventListener('keydown', tabAction)
    }
  }

  return (
    <article
      tabIndex={0}
      onFocus={() => {
        window.addEventListener('keydown', tabAction)
      }}
      onBlur={() => {
        window.removeEventListener('keydown', tabAction)
      }}
      data-testid="expander"
      className={styles.expander}
    >
      <h3
        data-testid="expander-title"
        className={styles.expander__title}
        onClick={toggle}
      >
        <motion.div
          data-testid="expander-arrow"
          variants={arrow}
          initial="normal"
          animate={isOpen ? 'expanded' : 'normal'}
        >
          <FiChevronRight className={styles.expander__arrow} />
        </motion.div>
        <span>{title}</span>
      </h3>

      <motion.div
        data-testid="expander-container"
        className={styles.expander__container}
        variants={container}
        initial="normal"
        animate={isOpen ? 'expanded' : 'normal'}
      >
        <div data-testid="expander-content" className={styles.expander__content}>
          {children}
        </div>
      </motion.div>
    </article>
  )
}