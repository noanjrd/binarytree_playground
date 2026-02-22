const STORAGE_KEY = "binarytree_data"

export interface StoredData {
    inputText : string;
    traversalType : string
    searchTree : boolean
    tabOption : string
}

export const saveTreeToStorage = (data:StoredData) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    }
    catch (error)
    {
        console.error(error)
    }
}

export const loadTreeFromStorage =() : StoredData | null => {
    try {
        const data = localStorage.getItem(STORAGE_KEY)
        if (data)
            return JSON.parse(data)
        return null
    }
    catch (error)
    {
        console.error(error)
        return null
    }
}