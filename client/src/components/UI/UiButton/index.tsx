import React from 'react'
import styles from './UiButton.module.scss'
import clsx from 'clsx'

interface UIInputProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const UiButton: React.FC <UIInputProps> = ({className, children, ...props}) => {
  return (
    <button className={clsx(styles.uiButton, className)} {...props}>
      {children}
    </button>
  )
}

export default UiButton