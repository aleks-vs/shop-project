import {create} from 'zustand'

export const useCart = create((set, get) => ({
    cart: [],
    addToCart: (item) => {
        set({ cart: [...get().cart, { id: item.id, cartItem: item, quantity: 1 }] })
    },
    inCartIncrement: (id) => {
        get().cart.find((item) => item.id === id).quantity++
        return set({ cart: [...get().cart]})
    },
    inCartDecrement: (id) => {
        get().cart.find((item) => item.id === id).quantity--
        return set({ cart: [...get().cart] })
    },
    delFromCart: (id) => {
        set({ cart: [get().cart.filter(((el) => el.id !== id))] })} 
}))
export const useLike = create((set, get)=>({
    likes: [],
    addToLikes: (item) => {
        set({ likes: [...get().likes, { id: item.id, likedItem: item }] })
    },
    delFromLikes: (item) => {
        set({ likes: [get().likes.filter(((el) => el.id !== item.id))] })
    } 
        
}))

