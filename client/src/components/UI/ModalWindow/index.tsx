import React from 'react'
import styles from './ModalWindow.module.scss'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ModalWindowProps } from '../../../types/Ui';


const ModalWindow: React.FC <ModalWindowProps> = ({ isOpen, onClose, children }) => {
  const rootClasses = [styles.containerModal];

  if (isOpen) {
    rootClasses.push(styles.active)
  }

  return (
    <div 
      onClick={onClose} // Закрыть модальное окно при клике вне его
      className={rootClasses.join(' ')}
    >
      <div 
        onClick={(e) => e.stopPropagation()} 
        className={styles.contentModal}
      >
        <div className={styles.closeButton} onClick={onClose}> 
          <IoIosCloseCircleOutline /> 
        </div> {/* Кнопка для закрытия */}
        {children}
        
      </div>
    </div>
  )
}

export default ModalWindow