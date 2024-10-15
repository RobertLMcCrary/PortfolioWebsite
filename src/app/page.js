"use client";

import {
    Button,
    Link,
    Card,
    CardHeader,
    CardFooter,
    Spacer,
} from "@nextui-org/react";

// components
import Nav from "./components/navbar";

function Home() {
    return (
        <div className="h-[100vh] w-[100vw] item-center text-center">
            <Nav />
            <h1 className="text-2xl">Home Page</h1>
        </div>
    )
}

export default Home