<template>
    <div>
        <post-your-ad-select-category url="data/productCategory" class-name="na"></post-your-ad-select-category>
    </div>
</template>

<script>
import postYourAdSelectCategory from "@/components/postYourAdSelectCategory";

export default {
    name: "postYourAdCategory",
    components: {
        postYourAdSelectCategory,
    },
    data() {
        return {};
    },
};
</script>
