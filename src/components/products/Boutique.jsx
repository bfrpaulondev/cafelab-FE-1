import React from "react";
import SidebarWithHeader from "../shared/SideBar.jsx";
import OurPicks from "./OurPicks.jsx";
import {Stack} from "@chakra-ui/react";
import ProductList from "./ProductList.jsx";

export default function Boutique() {
    return (
        <SidebarWithHeader>

            <Stack backgroundColor={"#81938c"}>
                <ProductList>
                </ProductList>
                <Stack align={"center"} mx={10} p={10}>
                    <OurPicks>
                    </OurPicks>
                </Stack>
            </Stack>
        </SidebarWithHeader>
    );
}