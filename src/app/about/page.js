import react from "react";
import Nav from "../components/navbar";

/*
TODO:
- github
- linkedin
- handshake
- youtube
- contact info
*/

function About() {
    return (
        <div className="h-[100vh] w-[100vw] items-center text-center">
            <Nav />
            <h1 className="text-2xl">About page</h1>
        </div>
    )
}

export default About
