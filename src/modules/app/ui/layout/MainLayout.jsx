import { Sidebar } from "../components"

export const MainLayout = ({children}) => {
    return (
        <div id="wrapper">
            {/*TODO: Sidebar*/}
            <Sidebar />
            
            <div id="content-wrapper" className="d-flex flex-column">
                {children}
            </div>
        </div>
    )
}
