import { type ReactElement, forwardRef } from 'react'
import { type IconType } from 'react-icons'
import { FiCheck } from 'react-icons/fi'

interface InputProps extends React.ComponentProps<'input'> {
  label?: string
  error?: boolean
  errorMessage?: string
  success?: boolean
  icon?: ReactElement<IconType>
  description?: string
}

const styles = {
  input: `
    flex
    flex-col
    gap-1
  `,

  input__info:`
    flex
    gap-1
  `,

  input__content:`
    flex
    gap-3
    items-center
    relative
    border
    rounded
    py-2
    px-3
    bg-white
    focus-within:ring-2
    focus-within:ring-offset-2
    focus-within:ring-blue-500
    focus-within:ring-offset-white
    border-neutral-300
  `,

  input__content__error:`
    border-red-500
  `,

  input__label:`
    text-xs
    text-neutral-700
  `,

  input__icon:`
    [&+svg]:w-[18px]
    [&+svg]:h-[18px
    [&+svg]:text-neutral-500
  `,

  input__success:`
    [&+svg]:w-[18px]
    [&+svg]:h-[18px]
    [&+svg]:text-lime-700
  `,

  input__field:`
    outline-none
    w-full
    bg-white
    placeholder-neutral-500
    text-neutral-800
  `,

  input__error_message:`
    text-xs
    text-red-600
  `,

  input__description:`
    text-xs
    text-neutral-700
  `
}

const Input = forwardRef(
  (
    {
      label,
      error = false,
      errorMessage,
      icon,
      success,
      description,
      ...props
    }: InputProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const errorClass = error ? styles.input__content__error : ''

    return (
      <label data-testid="input" className={styles.input}>
        <div data-testid="input-info" className={styles.input__info}>
          {label && (
            <p data-testid="input-label" className={styles.input__label}>
              {label}
            </p>
          )}
          {errorMessage && (
            <p
              data-testid="input-error-message"
              className={styles.input__error_message}
            >
              - {errorMessage}
            </p>
          )}
        </div>

        <div
          data-testid="input-content"
          className={`${styles.input__content} ${errorClass}`}
        >
          {icon && (
            <span data-testid="input-icon" className={styles.input__icon}>
              {icon}
            </span>
          )}

          <input
            data-testid="input-field"
            className={styles.input__field}
            {...props}
            ref={ref}
          />

          {success && (
            <span data-testid="input-success" className={styles.input__success}>
              <FiCheck />
            </span>
          )}
        </div>

        {description && (
          <p data-testid="input-description" className={styles.input__description}>
            {description}
          </p>
        )}
      </label>
    )
  },
)

Input.displayName = 'Input'
export { Input }