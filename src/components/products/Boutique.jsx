import React from "react";
import SidebarWithHeader from "../shared/SideBar.jsx";
import OurPicks from "./OurPicks.jsx";
import {Stack} from "@chakra-ui/react";
import ProductDetails from "./ProductDetails.jsx";

export default function Boutique() {
    return (
        <SidebarWithHeader>

            <Stack backgroundColor={"#81938c"}>
                <ProductDetails>
                </ProductDetails>
                <Stack align={"center"} mx={10} p={10}>
                    <OurPicks>
                    </OurPicks>
                </Stack>
            </Stack>
        </SidebarWithHeader>
    );
}