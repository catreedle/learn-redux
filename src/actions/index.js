export const increment = (x) => {
    return {
        type: 'INCREMENT',
        payload: x
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}