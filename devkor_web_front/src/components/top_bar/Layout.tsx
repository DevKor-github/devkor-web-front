import Header from "@/containers/Header"
const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
        </div>
    )
}
export default Layout