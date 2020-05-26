export default (state,action) => {
    switch(action.type) {

        case "DELETE_TX":
            return {
                ...state,
                transactions: state.transactions.filter(tx => tx.id !== action.payload)
            }

        case "ADD_TX":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}
