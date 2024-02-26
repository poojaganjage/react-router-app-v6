const About = (props) => {
    return(
        <>
            <h1 style={{backgroundColor: props.bgColor()}}>About Page</h1>
            {props.children}
        </>
    );
}
export default About;