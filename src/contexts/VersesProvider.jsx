import { createContext, useEffect, useReducer } from "react";
import { FETCHING_VERSES_START, FETCHING_VERSES_SUCCESS } from "../states/action-types/ActionTypes";
import { initialVersesState, VersesReducer } from "../states/reducers/VersesReducer";
import { useSurahId } from "../hooks/useSurahId";
import { getVersesByVersesInfo } from "../utilities/getVersesByVersesInfo";

export const VersesContext = createContext();

// eslint-disable-next-line react/prop-types
const VersesProvider = ({ children }) => {

    const [state, dispatch] = useReducer(VersesReducer, initialVersesState)

    const surahId = useSurahId();

    useEffect(() => {
        dispatch({ type: FETCHING_VERSES_START })

        fetch(`https://api.quran.com/api/v4/verses/by_chapter/${surahId}`)
            .then(res => res.json())
            .then(data => {
                const verses = getVersesByVersesInfo(data.verses, 'indopak')
                dispatch({ type: FETCHING_VERSES_SUCCESS, payload: { verses: verses } })
            })
    }, [surahId])

    return (
        <VersesContext.Provider value={state}>
            {children}
        </VersesContext.Provider>
    );
};

export default VersesProvider;