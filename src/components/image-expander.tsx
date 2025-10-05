import { motion } from 'motion/react'
import React, { type ReactElement, useEffect, useState } from 'react'
import { FiMaximize2 } from 'react-icons/fi'

type ImageExpanderProps = {
  thumb: ReactElement
  full: ReactElement
}

const styles = {
  image_expander: `
    relative
    cursor-pointer
  `,

  image_expander__thumb: `
    flex
    w-full
  `,

  image_expander__reference: `
    absolute
    top-0
    w-full
    h-full
    transition-all
    opacity-0
    flex
    justify-center
    items-center
    bg-opacity-40
    hover:opacity-100
  `,

  image_expander__reference__icon: `
    text-white
    text-4xl
  `,

  image_expander__overlay: `
    bg-black/70
    p-3
    overflow-y-auto
    bg-opacity-50
    backdrop-blur-sm
    top-0
    fixed
    left-0
    w-full
    h-screen
    z-50

    [&::-webkit-scrollbar]:w-[5px]
    [&::-webkit-scrollbar-track]:bg-transparent
    [&::-webkit-scrollbar-thumb]:bg-transparent
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:transition-all
    [&::-webkit-scrollbar-thumb:hover]:bg-opacity-60
  `,

  image_expander__content: `
    min-h-screen
    flex
    items-center
    justify-center
    text-center
  `,

  image_expander__figure: `
    flex
    p-1
    bg-white
    shadow-lg
  `
};

export function ImageExpander({ thumb, full }: ImageExpanderProps) {
  const [open, setOpen] = useState<boolean>(false)

  function toggleExpander() {
    setOpen(c => !c)
  }

  function closeExpander() {
    setOpen(false)
  }

  function closeExpanderByKey(e: KeyboardEvent) {
    if (e.key === 'Escape' || e.key === 'Enter') {
      closeExpander()
    }
  }

  const expander = {
    normal: {
      opacity: 0,
      display: 'none',
      transition: {
        delay: 0.2,
      },
    },
    expanded: {
      opacity: 1,
      display: 'block',
    },
  }

  const figure = {
    normal: {
      opacity: 0,
      scale: 0.8,
    },
    expanded: {
      opacity: 1,
      scale: 1,
    },
  }

  useEffect(() => {
    window.addEventListener('keydown', closeExpanderByKey)

    return () => {
      window.removeEventListener('keydown', closeExpanderByKey)
    }
  })

  return (
    <div
      data-testid="image-expander"
      className={styles.image_expander}
      onClick={toggleExpander}
    >
      <figure className={styles.image_expander__thumb}>{thumb}</figure>

      <div
        data-testid="image-expander-reference"
        className={styles.image_expander__reference}
      >
        <FiMaximize2 className={styles.image_expander__reference__icon} />
      </div>

      <motion.div
        data-testid="image-expander-overlay"
        onClick={(event: React.MouseEvent) => {
          event.stopPropagation()
          closeExpander()
        }}
        variants={expander}
        transition={{ duration: 0.5 }}
        initial="normal"
        animate={open ? 'expanded' : 'normal'}
        className={styles.image_expander__overlay}
      >
        <motion.div
          data-testid="image-expander-content"
          variants={figure}
          transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
          initial="normal"
          animate={open ? 'expanded' : 'normal'}
          className={styles.image_expander__content}
        >
          <figure
            data-testid="image-expander-figure"
            className={styles.image_expander__figure}
          >
            {full}
          </figure>
        </motion.div>
      </motion.div>
    </div>
  )
}