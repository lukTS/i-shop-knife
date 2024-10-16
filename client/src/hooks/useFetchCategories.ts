import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../store/categoriesSlice'
import { RootState, AppDispatch } from '../store'

export function useFetchCategories() {
    const dispatch: AppDispatch = useDispatch()
    const categories = useSelector((state: RootState) => state.categories.categories)
    const categoriesStatus = useSelector((state: RootState) => state.categories.status)

        useEffect(() => {
            if(categoriesStatus !== 'succeeded') dispatch(fetchCategories())
        }, [dispatch])


    // Флаг загрузки
    const isLoading = categoriesStatus === 'loading'
    
    // Флаг отсутствия категорий
    const noCategories = !categories || categories.length === 0

    return { categories, isLoading, noCategories }
}
