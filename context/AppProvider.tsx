import { FC, ReactNode, useEffect, useState } from "react"
import { AppContext } from "./AppContext"
import { Character, CharacterListResponse, Info } from "@/interface";
import { rickApi } from "@/api";

interface Props{
    children:ReactNode,
}

export const AppProvider:FC<Props>  = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState<Info>();
    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState('/character?page=1');

    const updatePage = (path:string)=>{
        setPage(path)
    }
    const getData = async()=>{
        try {
            const {data} = await rickApi.get<CharacterListResponse>(page);
            const characters = data.results;
            const info = data.info;

            return {characters,info}    

        } catch (error) {
            return null
        }
    }

    const getCharacthers = async()=>{
        setLoading(false)
        const resp = await getData();

        if(resp){
            const { characters, info} =resp;
            setCharacters(characters);
            setInfo(info);
            setLoading(true)
        }
    }

    useEffect(() => {
        getCharacthers();
    }, [page])
    

    return (
        <AppContext.Provider value={{
            isLoaded:loading,
            characters,
            info,
            updatePage
        }}>
            {children}
        </AppContext.Provider>
    )

}