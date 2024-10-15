import react from "react";

//nextui
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@nextui-org/react";

function Nav() {
    return (
        <Navbar>
            <NavbarContent>
                <NavbarBrand className="text-2xl font-bold">Robert McCrary</NavbarBrand>
                <NavbarItem>
                    <Link className="text-white" href="/">Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" href="/projects">Projects</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" href="/about">About</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Nav
