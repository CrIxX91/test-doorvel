import { Character, Info } from "@/interface";
import { createContext } from "react";

interface ContextProps{
    isLoaded:boolean;
    characters:Character[];
    info: Info | undefined;
    updatePage: (path: string) => void;
}

export const AppContext = createContext<ContextProps>( {} as ContextProps);