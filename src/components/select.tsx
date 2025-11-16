import { forwardRef } from 'react'
import { FiChevronDown } from 'react-icons/fi'

export type SelectItem = {
  name: string
  value: string | number
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  items: SelectItem[]
  placeholder?: string
  label?: string
}

const styles = {
  select: `
    flex
    flex-col
    gap-1
  `,
  select__label: `
    text-sm
    text-neutral-700
  `,
  select__content: `
    w-full
    flex
    items-center
    relative
  `,
  select__field: `
    w-full
    bg-transparent
    px-3
    py-2
    pr-6
    truncate
    rounded
    text-neutral-700
    border
    border-neutral-300
    outline-blue-500
    outline-offset-4
    appearance-none
  `,
  select__arrow:`
    absolute
    right-2
    text-neutral-600
  `,
  select__option: `
    truncate
  `
}

const Select = forwardRef(
  (
    { placeholder, items, label, ...props }: SelectProps,
    ref: React.Ref<HTMLSelectElement>,
  ) => {

    return (
      <div data-testid="select" className={styles.select}>
        <div data-testid="select-info">
          {label && (
            <p data-testid="select-label" className={styles.select__label}>
              {label}
            </p>
          )}
        </div>

        <div data-testid="select-content" className={styles.select__content}>
          <select
            {...props}
            className={styles.select__field}
            ref={ref}
          >
            {placeholder && (
              <option data-testid="select-placeholder" hidden value="">
                {placeholder}
              </option>
            )}

            {items.map((item: SelectItem, index: number) => {
              return (
                <option
                  data-testid="select-option"
                  key={index + item.name}
                  className={styles.select__option}
                  value={item.value}
                >
                  {item.name}
                </option>
              )
            })}
          </select>

          <FiChevronDown data-testid="select-arrow" className={styles.select__arrow} />
        </div>
      </div>
    )
  },
)

Select.displayName = 'Select'
export { Select }