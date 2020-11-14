<template>
    <v-main>
        <!-- Banner Section -->
        <HomeBanner />

        <!-- Featured Auctions  Section-->
        <home-produt-sections :options="featuredAuctions"></home-produt-sections>

        <!-- How To Bid Section-->
        <HowToBid />
    </v-main>
</template>

<script>
import HomeBanner from "@/components/HomeBanner";
import HomeProdutSections from "@/components/HomeProdutSections";
import HowToBid from "@/components/HowToBid";
export default {
    name: "Home",

    components: {
        HomeBanner,
        HomeProdutSections,
        HowToBid,
    },
    data: () => ({
        featuredAuctions: {
            title: "Featured Auctions",
            url: "About",
            products: [
                {
                    id: 1,
                    title: "Nikon COOLPIX B500 Digital Camera (Black)",
                    category: "Electronics",
                    price: "TK 5000",
                    image: "product-1.jpg",
                    location: "Sekertack | Mohammadpur, Dhaka",
                    status: "Used",
                },
                {
                    id: 2,
                    title: "Nikon COOLPIX B500 Digital Camera (Black)",
                    category: "Electronics",
                    price: "TK 5000",
                    image: "product-2.jpg",
                    location: "Sekertack | Mohammadpur, Dhaka",
                    status: "New",
                },
                {
                    id: 3,
                    title: "Nikon COOLPIX B500 Digital Camera (Black)",
                    category: "Electronics",
                    price: "TK 5000",
                    image: "product-1.jpg",
                    location: "Sekertack | Mohammadpur, Dhaka",
                    status: "Lot",
                },
                {
                    id: 4,
                    title: "Nikon COOLPIX B500 Digital Camera (Black)",
                    category: "Electronics",
                    price: "TK 5000",
                    image: "product-2.jpg",
                    location: "Sekertack | Mohammadpur, Dhaka",
                    status: "Shop Woner",
                },
                {
                    id: 5,
                    title: "Nikon COOLPIX B500 Digital Camera (Black)",
                    category: "Electronics",
                    price: "TK 5000",
                    image: "product-2.jpg",
                    location: "Sekertack | Mohammadpur, Dhaka",
                    status: "Used",
                },
                {
                    id: 6,
                    title: "Nikon COOLPIX B500 Digital Camera (Black)",
                    category: "Electronics",
                    price: "TK 5000",
                    image: "product-1.jpg",
                    location: "Sekertack | Mohammadpur, Dhaka",
                    status: "Lot",
                },
                {
                    id: 7,
                    title: "Nikon COOLPIX B500 Digital Camera (Black)",
                    category: "Electronics",
                    price: "TK 5000",
                    image: "product-2.jpg",
                    location: "Sekertack | Mohammadpur, Dhaka",
                    status: "Lot",
                },
                {
                    id: 8,
                    title: "Nikon COOLPIX B500 Digital Camera (Black)",
                    category: "Electronics",
                    price: "TK 5000",
                    image: "product-2.jpg",
                    location: "Sekertack | Mohammadpur, Dhaka last",
                    status: "Used",
                },
            ],
        },
    }),
};
</script>
