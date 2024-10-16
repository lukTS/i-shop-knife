import React from 'react'
import styles from './UIInput.module.scss'
import clsx from 'clsx'

interface UIInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const UIInput: React.FC <UIInputProps> = ({ className, ...props }) => {
  return (
    <input className={clsx(styles.uiInput, className)} {...props} />
  )
}

export default  UIInput