import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import GoalsBar from './GoalsBar'

export default function DashboardLayout() {
    return (
        <>

            <div className="flex h-screen bg-gray-100">

                <Sidebar />

                {/* Main Area */}
                <div className="flex-1 flex flex-col">
                    {/* Navbar */}


                    {/* Content */}
                    <main className="flex-1 p-6 pt-0 overflow-y-auto overflow-hidden bg-white m-5">
                        <GoalsBar />
                        <Outlet></Outlet>
                    </main>
                </div>
            </div>
        </>
    )
}