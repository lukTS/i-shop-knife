export interface ModalWindowProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export interface SearchBarProps {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>
}