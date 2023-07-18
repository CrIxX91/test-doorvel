import { rickApi } from "@/api";
import { Character } from "@/interface";

export const getCharacterInfoByID = async(id:string)=> {
    try {
        const { data } = await rickApi.get<Character>(`/character/${id}`);
        delete data.episode;
        return data    
    } catch (error) {
        return null
    }
    
}