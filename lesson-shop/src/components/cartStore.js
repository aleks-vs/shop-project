import {create} from 'zustand'

const useCart = create((set) => ({
    cart: [],
    addToCart: () => [...state.cart, { id: item.id, cartItem: item, quantity: 1 }],
    inCartItem: cart.find((item) => item.id === id),
    quantity: inCartItem.quantity,
 inCartIncrement: () => set((state) => ({ quantity: state.quantity + 1 })),
 inCartDecrement: () => set((state) => ({ quantity: state.quantity - 1 })),
 delFromCart: () => state.cart.filter(((el)=> el.id !== inCartItem.id))
}))

export default useCart;