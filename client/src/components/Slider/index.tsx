import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { moveSlideLeft, moveSlideRight } from '../../store/sliderSlice'
import styles from './Slider.module.scss'
import { RootState, AppDispatch } from '../../store'

const Slider: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const slideNumber = useSelector((state: RootState) => state.slider.slideNumber)
    const slides = useSelector((state: RootState) => state.slider.slides)

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(moveSlideLeft())
        }, 3000);
        return () => clearInterval(interval)
    }, [dispatch])

    return (
        <section className={styles.slider}>
            <div
                className={styles.slides}
                style={{
                    transform: `translateX(-${slideNumber * 100}%)`,
                    transition: 'transform 0.5s ease-in-out'
                }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className={styles.slide}>
                        <img src={slide} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <div className={styles.controls}>
                <button className={styles.button} onClick={() => dispatch(moveSlideRight())}>❮</button>
                <button className={styles.button} onClick={() => dispatch(moveSlideLeft())}>❯</button>
            </div>
        </section>
    )
}

export default Slider