const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        /*case 'ADD_FAV':
            let copy1 = state.allCharacters
            copy1.push(payload)
            return {
                ...state,
                myFavorites: copy1,
                allCharacters: copy1
            }*/
        case 'ADD_FAV':
            return { ...state, myFavorites: payload, allCharacters: payload };

        /*case 'REMOVE_FAV':
            let copy2 = state.myFavorites.filter((char) => char.id !== Number(payload))
            return {
                ...state,
                myFavorites: copy2
            }*/

        case 'REMOVE_FAV':
            return { ...state, myFavorites: payload };

        case 'FILTER':
            let copy3 = state.allCharacters.filter((char) => {
               return char.gender === payload
            })

            return {
                ...state,
                myFavorites: copy3
            }
    
        case 'ORDER':
            let copy4 = state.allCharacters.sort((a,b) => {
                if (payload === 'A'){
                    return a.id - b.id
                }
                if (payload === 'D'){
                    return b.id - a.id
                }
                
            })
            return {
                ...state,
                myFavorites: copy4
            }

        default:
            return {
                ...state
            }
    }
}

export default rootReducer;