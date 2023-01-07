export const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === 'ADD_ITEM') {
        const newItems = [...state.people, action.payload]
        return { ...state, people: newItems, isModalOpen: true, modalContent: 'item added' }
    }
    if (action.type === 'NO_VALUE') {
        return { ...state, isModalOpen: true, modalContent: "Please enter value" }
    }
    if (action.type === 'CLOSE_MODAL') {
        return { ...state, isModalOpen: false, modalContent: '' }
    }
    if (action.type === 'REMOVE_ITEM') {
        const newItems = state.people.filter(item => item.id !== action.payload)
        return { ...state, people: newItems, isModalOpen: true, modalContent: 'Item deleted' }
    }
    throw new Error('no matching action type')
}