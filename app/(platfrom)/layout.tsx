import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

const ClerkProviderComp = ({children} : {children : React.ReactNode})=>{
    return (
        <ClerkProvider>
            {children}
        </ClerkProvider>
    )
}

export default ClerkProviderComp ;