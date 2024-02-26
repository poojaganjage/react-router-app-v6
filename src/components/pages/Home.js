import About from "./About";
import Contact from "./Contact";
const Home = () => {
    let str = "Welcome to React Router Application";

    return(
        <>
            <h1>Home Page {str}</h1>
            <About bgColor={() => {
                return "red";
            }}>
                {((str) => <h2>{str}</h2>)("Pooja")}
            </About>
            <div>
                {
                    (() => {
                        return <h1>{"It is a Rounting Library!"}</h1>
                    })()
                }
            </div>
            <Contact name="Pooja" />
        </>
    );
}
export default Home;