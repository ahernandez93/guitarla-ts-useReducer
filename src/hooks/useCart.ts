import { useState, useEffect } from 'react'
import type {Guitar, CarItem } from '../types'

export const useCart = () => {

    const initialCart = () : CarItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [cart, setCart] = useState(initialCart)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return {
        cart
    }
}