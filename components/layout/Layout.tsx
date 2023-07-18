import { FC, ReactNode } from "react";
import Head from "next/head";
import { NavBar } from "../ui/NavBar";
// import { Navbar } from "../ui";

interface Props{
    children:ReactNode,
    title?:string,
}

export const Layout:FC<Props> = ({children,title}) => {
    
  return (
    <>
        <Head>
            <title>{title || 'Rick and Morty'}</title>
            <meta name="author" content="Cristian Aguilar"/>
            <meta name="description" content="Informacion de Rick and Morty"/>
            <meta name="keywords" content="morty,rick,rickandmorty"/>
            {/* <meta property="og:image" content={`${origin}/img/pokedexBanner.webp`}/> */}
        </Head>
        <NavBar/>
        <main>
            {children}
        </main>
    </>
  )
}