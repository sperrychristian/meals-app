import { createContext, useState } from 'react';

// step 1: create the context 

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id)=> {},
    removeFavorite: (id) => {}
});

// step 2: provide the state 
export default function FavoritesContextProvider({children}) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([])

    function addFavorite(id) {
        setFavoriteMealIds((currentFavIds)=> [...currentFavIds, id]) // creates a new array and adds array onto id list
    }

    function removeFavorite(id) {
        setFavoriteMealIds((currentFavIds)=> currentFavIds.filter((mealId) => mealId !== id))
    }


    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}