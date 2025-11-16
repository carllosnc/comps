import {
  Fragment,
  type ReactElement,
  type ReactNode,
  useState
} from 'react'

import { motion } from 'framer-motion'

type TabProps = {
  children: ReactNode
}

export function Tab({ children }: TabProps) {
  return <Fragment>{children}</Fragment>
}

type TabsProps = {
  children: ReactElement[]
  labels: string[]
}

const styles = {
  tabs: `
    flex
    flex-col
    gap-[20px]
  `,
  tabs__header: `
    flex
    border-b-[2px]
    border-neutral-200
  `,
  tabs__button: `
    w-full
    relative
  `,
  tabs__button__item: `
    w-full
    cursor-pointer
    p-3
    text-center
    text-neutral
    transition-all
    hover:bg-neutral-100
  `,
  tabs__button__line: `
    h-[2px]
    absolute
    -bottom-[2px]
    bg-black
    w-full
  `
}

export function Tabs({ labels, children }: TabsProps) {
  const [currentTab, setCurrentTab] = useState<number>(0)

  return (
    <section data-testid="tabs" className={styles.tabs}>
      <header data-testid="tabs-header" className={styles.tabs__header}>
        {labels.map((item, index) => {
          return (
            <div
              data-testid="tabs-button"
              className={styles.tabs__button}
              key={`${item}${index}`}
            >
              <button
                data-testid="tabs-item"
                onClick={() => setCurrentTab(index)}
                className={styles.tabs__button__item}
              >
                {item}
              </button>

              {index === currentTab && (
                <motion.div
                  data-testid="tabs-line"
                  layoutId="tab"
                  className={styles.tabs__button__line}
                />
              )}
            </div>
          )
        })}
      </header>

      {children.map((tab, index) => {
        if (index === currentTab) {
          return <div key={index}> {tab} </div>
        }
      })}
    </section>
  )
}