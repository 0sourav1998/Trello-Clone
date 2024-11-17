import { Navbar } from "./_componnets/Navbar";

const MarketingLayout = ({children}:{children:React.ReactNode})=>{
    return (
        <div className="h-full">
            <Navbar/>
            {children}
        </div>
    )
}

export default MarketingLayout ;