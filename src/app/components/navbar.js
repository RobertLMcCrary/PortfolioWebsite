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
            </NavbarContent>
        </Navbar>
    )
}

export default Nav
