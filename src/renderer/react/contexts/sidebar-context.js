import React, { createContext, useContext } from "react";

const SidebarContext = createContext();

export function useSidebarContext() {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebarContext must be used within a SidebarProvider");
    }
    return context;
};

export function SidebarProvider({ children }) {
    const [isOpened, setIsOpened] = React.useState(false);

    return (
        <SidebarContext.Provider value={{ isOpened, setIsOpened }}>
            {children}
        </SidebarContext.Provider>
    );
}