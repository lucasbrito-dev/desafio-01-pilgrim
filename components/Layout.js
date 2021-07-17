import Nav from './Nav'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
        <Nav />
            <div className="min-h-screen flex flex-col justify-start items-center h-screen" style={{padding: '0 0.5rem'}}>
                <main className="flex flex-col justify-start items-center text-xl" style={{padding: '5rem 0', flex: 1}}>
                <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
