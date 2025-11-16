import { motion, type Variants } from 'framer-motion'
import { type MouseEvent, type ReactNode, useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'

type useDrawerReturn = [boolean, () => void, () => void]

export function useDrawer(): useDrawerReturn {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function openDrawer() {
    setIsOpen(s => true)
  }

  function closeDrawer() {
    setIsOpen(s => false)
  }

  return [isOpen, openDrawer, closeDrawer]
}

type DrawerProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

const styles = {
  drawer: `
    fixed
    top-0
    left-0
    w-full
    h-screen
    flex
    gap-4
    backdrop-blur
    bg-black/50
  `,
  drawer__container: `
    max-w-[300px]
    relative
    bg-white
  `,

  /* inside content  */

  drawer__content: `
    scroll-auto
    overflow-auto
    h-screen
    p-5
    pb-[100px]
    [&::-webkit-scrollbar]:w-[3px]
    [&::-webkit-scrollbar-track]:bg-transparent
    [&::-webkit-scrollbar-thumb]:bg-neutral-300
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:transition-all
    [&::-webkit-scrollbar-thumb:hover]:bg-neutral-400
  `,
  drawer__close: `
    w-[35px]
    h-[35px]
    min-w-[35px]
    p-1
    mr-4
    mt-4
    rounded-full
    flex
    justify-center
    items-center
    cursor-pointer
    bg-white
    text-neutral-400
    hover:text-red-500
  `
}

export function Drawer({ children, isOpen, onClose }: DrawerProps) {
  const Drawer = {
    normal: {
      opacity: 0,
      display: 'none',
      transition: {
        delay: 0.1,
      },
    },
    expanded: {
      opacity: 1,
      display: 'flex',
    },
  }

  const content: Variants = {
    normal: {
      opacity: 0,
      x: '-50px',
    },
    expanded: {
      opacity: 1,
      x: '0px',
      transition: {
        bounce: 0.3,
        type: "spring",
        duration: 0.3,
        delay: 0.08,
      },
    },
  }

  function stopPropagation(e: MouseEvent) {
    e.stopPropagation()
  }

  function closeDrawer(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', closeDrawer)

    return () => {
      window.removeEventListener('keydown', closeDrawer)
    }
  })

  return (
    <motion.section
      data-testid="drawer"
      animate={isOpen ? 'expanded' : 'normal'}
      variants={Drawer}
      onClick={onClose}
      initial="normal"
      className={styles.drawer}
    >
      <motion.div
        data-testid="drawer-container"
        animate={isOpen ? 'expanded' : 'normal'}
        variants={content}
        initial="normal"
        onClick={stopPropagation}
        className={styles.drawer__container}
      >
        <div data-testid="drawer-content" className={styles.drawer__content}>
          {children}
        </div>
      </motion.div>

      <FiX
        data-testid="drawer-close"
        onClick={onClose}
        className={styles.drawer__close}
      />
    </motion.section>
  )
}