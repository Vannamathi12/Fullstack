let initialValue=0
const counter = (state, action) => {
    switch (action.type) {
        case 'increment':
        return { count: state.count + 1 }
        case 'decrement':
        return { count: state.count - 1 }
        default:
        return state
    }
    }
    const Reducer = () => {
        return (
            <div>
                Reducer
            </div>
        )
    }
export default Reducer