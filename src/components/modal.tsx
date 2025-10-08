import { motion } from 'framer-motion'
import { type MouseEvent, type ReactNode, useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'

type ModalProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

type useModalReturn = [
  boolean,
  () => void,
  () => void
]

export function useModal(): useModalReturn {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function openModal() {
    setIsOpen(s => true)
  }

  function closeModal() {
    setIsOpen(s => false)
  }

  return [isOpen, openModal, closeModal]
}

const styles = {
  modal:`
    fixed
    top-0
    left-0
    w-full
    h-screen
    p-4
    flex
    flex-col
    justify-center
    items-center
    gap-4
    backdrop-blur
    bg-black/30
  `,

  modal__container:`
    max-w-[450px]
    w-full
    scroll-auto
    rounded-2xl
    relative
    overflow-hidden
    bg-white
  `,

  modal__content:`
    overflow-auto
    max-h-[500px]
    p-5

    [&::-webkit-scrollbar]:w-[5px]
    [&::-webkit-scrollbar-track]:bg-transparent
    [&::-webkit-scrollbar-thumb]:bg-neutral-300
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:transition-all
    [&::-webkit-scrollbar-thumb:hover]:bg-neutral-400
  `,

  modal__close: `
    w-[35px]
    h-[35px]
    p-1
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

export function Modal({ children, isOpen, onClose }: ModalProps) {
  const modal = {
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

  const content = {
    normal: {
      opacity: 0,
      y: '-50px',
    },
    expanded: {
      opacity: 1,
      y: '0px',
      transition: {
        delay: 0.08,
      },
    },
  }

  function stopPropagation(e: MouseEvent) {
    e.stopPropagation()
  }

  function closeModal(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', closeModal)

    return () => {
      window.removeEventListener('keydown', closeModal)
    }
  })

  return (
    <>
      <motion.section
        data-testid="modal"
        animate={isOpen ? 'expanded' : 'normal'}
        variants={modal}
        onClick={onClose}
        initial="normal"
        className={styles.modal}
      >
        <motion.div
          data-testid="modal-container"
          animate={isOpen ? 'expanded' : 'normal'}
          variants={content}
          initial="normal"
          onClick={stopPropagation}
          className={styles.modal__container}
        >
          <div data-testid="modal-content" className={styles.modal__content}>
            {children}
          </div>
        </motion.div>

        <FiX
          data-testid="modal-close"
          onClick={onClose}
          className={styles.modal__close}
        />
      </motion.section>
    </>
  )
}