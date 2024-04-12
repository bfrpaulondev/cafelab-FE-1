import React from "react";
import {MdStar} from "react-icons/md";
import {HiOutlineArrowCircleRight} from "react-icons/hi";
import SidebarWithHeader from "../shared/SideBar.jsx";
import ProductCard from "./ProductCard.jsx";
import OurPicks from "./OurPicks.jsx";
import {Stack} from "@chakra-ui/react";
import ProductDetails from "./ProductDetails.jsx";

export default function Boutique() {
    return (
        <SidebarWithHeader>

            <Stack backgroundColor={"#81938c"} p={10}>
            <div>
                <div className="p-3 max-w-7xl m-auto">
                    <ProductDetails>
                    </ProductDetails>
                </div>
            </div>
            <Stack align={"center"} mx={10}>
                <OurPicks>
                </OurPicks>
            </Stack>
            </Stack>
        </SidebarWithHeader>
    );
}