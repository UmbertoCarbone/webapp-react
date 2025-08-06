import { createContext, useContext, useState } from "react";

const LoaderContext = createContext()


function LoaderProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <LoaderContext.Provider value={{
            isLoading,
            setIsLoading
        }}>
            {children}
        </LoaderContext.Provider>
    )
}

function useLoaderContext() {
    const context = useContext(LoaderContext)

    if (!context) throw new Error('You must use useLoaderContext inside the LoaderProvider')

        

    return context;
}


export { LoaderProvider, useLoaderContext }

