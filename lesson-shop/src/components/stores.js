import { create } from 'zustand'
// import {persist, createJSONStorage} from 'zustand/middleware'

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
        set({ cart: get().cart.filter(((el) => el.id !== id)) })} 
}))

// export const useCart = create(persist((set, get) => ({
//     cart: [],
//     addToCart: (item) => {
//         set({ cart: [...get().cart, { id: item.id, cartItem: item, quantity: 1 }] })
//     },
//     inCartIncrement: (id) => {
//         get().cart.find((item) => item.id === id).quantity++
//         return set({ cart: [...get().cart]})
//     },
//     inCartDecrement: (id) => {
//         get().cart.find((item) => item.id === id).quantity--
//         return set({ cart: [...get().cart] })
//     },
//     delFromCart: (id) => {
//         set({ cart: [get().cart.filter(((el) => el.id !== id))] })
//     console.log("delete:",get().cart.filter(((el) => el.id !== id)))} 
// })), {
//     name: "myLocalStorage",
//     storage: createJSONStorage(()=>localStorage) 
// })



export const useLike = create((set, get)=>({
    likes: [],
    addToLikes: (item) => {
        set({ likes: [...get().likes, { id: item.id, likedItem: item }] })
    },
    delFromLikes: (item) => {
        set({ likes: get().likes.filter(((el) => el.id !== item.id)) })
    }
        
}))

export const useFetch = create((set, get) => ({
    products: [],
    getAllProducts: ()=>fetch('https://dummyjson.com/products?limit=0')
.then(res => res.json()).then(item => set({ products: item.products })),
    getSearch: (inputValue)=> fetch(`https://dummyjson.com/products/search?q=${inputValue}&limit=0`)
    .then(res => res.json()).then(item => set({ products: item.products })),
    })
)

