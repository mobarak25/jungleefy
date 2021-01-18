<template>
    <v-flex class="delivery-wrap" v-resize="onResize">
        <!-- inner banner -->
        <inner-banner :options="bannerContent"></inner-banner>

        <v-flex class="tab-panel">
            <v-container class="py-0">
                <v-layout wrap class="justify-space-between">
                    <v-flex class="tab-left flex-grow-0">
                        <v-tabs :vertical="vertical">
                            <v-tab
                                class="text-none"
                                v-for="(faq,index) in faqs"
                                :key="index"
                                v-text="faq.faqCategory"
                                @click="openPanel()"
                            ></v-tab>

                            <v-tab-item v-for="(faq,index) in faqs" :key="index">
                                <v-expansion-panels v-model="panel" accordion tile>
                                    <v-expansion-panel
                                        v-for="(item,index) in faq.items"
                                        :key="index"
                                    >
                                        <v-expansion-panel-header>{{item.question}}</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <p>{{item.ans}}</p>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-tab-item>
                        </v-tabs>
                    </v-flex>
                    <v-flex class="tab-right flex-grow-0">
                        <v-flex class="tab-right-box">
                            <h2>Can't find an answer to your question?</h2>

                            <div class="input-wrap">
                                <v-textarea
                                    solo
                                    flat
                                    hide-details
                                    outlined
                                    label="Ask your question"
                                    rows="3"
                                    v-model="ask_question"
                                ></v-textarea>
                            </div>
                            <v-btn
                                type="submit"
                                depressed
                                tile
                                class="faq-btn mt-1 brand white--text text-none"
                            >Submit</v-btn>
                        </v-flex>

                        <v-flex class="faq-contact">
                            <v-layout class="faq-contact-title align-center">
                                <v-flex class="flex-grow-0">
                                    <img
                                        :src="require('@/assets/images/faq-contact.png')"
                                        alt="faq contact icon"
                                    />
                                </v-flex>
                                <h3>Contact Info</h3>
                            </v-layout>

                            <span>
                                Email:
                                <a href="mailto:info@jungleebazaar.com">info@jungleebazaar.com</a>
                            </span>
                            <span>
                                Phone:
                                <a href="tel:+8802 1234567">+8802 1234567</a>
                            </span>
                        </v-flex>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-flex>
</template>

<script>
import InnerBanner from "@/components/sites/common/InnerBanner";

export default {
    name: "Faq",
    components: {
        InnerBanner,
    },

    data() {
        return {
            ask_question: "",
            windowSize: "",
            panel: 0,

            bannerContent: {
                title: "How can we help you?",
                image: "faq.jpg",
            },
            faqs: [
                {
                    faqCategory: "How to sell fast",
                    items: [
                        {
                            question:
                                "1. How is temporary service established?",
                            ans:
                                "Shipments sent outside the turopean anion are sold elite of bag and might be liable to import obligations and assessments, which might be collected once a shipment arrives at your nation. Any extra charges for customs leeway are payable by you, the client. We have no influence over these charges and can't repay any expenses caused paying little heed to the conditions. For subtleties of Customs charges please counsel your",
                        },
                        {
                            question:
                                "2. How are Business Electric Rates Figured?",
                            ans: "Shipments sent outside the turopean anion",
                        },
                        {
                            question: "3. Where is The Backhoe Located?",
                            ans: "Shipments sent outside the turopean anion",
                        },
                        {
                            question:
                                "4. How is temporary service established?",
                            ans: "Shipments sent outside the turopean anion",
                        },
                        {
                            question:
                                "5. How are Business Electric Rates Figured?",
                            ans: "Shipments sent outside the turopean anion",
                        },
                        {
                            question: "6. Where is The Backhoe Located?",
                            ans: "Shipments sent outside the turopean anion",
                        },
                        {
                            question:
                                "7. How Possible To Provide Strict Security?",
                            ans: "Shipments sent outside the turopean anion",
                        },
                        {
                            question:
                                "8. Buying Guide: High Quality CCTV Cameras",
                            ans: "Shipments sent outside the turopean anion",
                        },
                        {
                            question: "9. How To Get More Customers?",
                            ans: "Shipments sent outside the turopean anion",
                        },
                        {
                            question: " ",
                            ans: "Shipments sent outside the turopean anion",
                        },
                    ],
                },
                {
                    faqCategory: "Auction Fees",
                    items: [
                        {
                            question:
                                "1. How is temporary service established?",
                            ans:
                                "Shipments sent outside the turopean anion are sold elite of bag and might be liable to import obligations and assessments, which might be collected once a shipment arrives at your nation. Any extra charges for customs leeway are payable by you, the client. We have no influence over these charges and can't repay any expenses caused paying little heed to the conditions. For subtleties of Customs charges please counsel your",
                        },
                        {
                            question:
                                "2. How are Business Electric Rates Figured?",
                            ans:
                                "Shipments sent outside the turopean anion are ",
                        },
                    ],
                },
                {
                    faqCategory: "Orders",
                    items: [
                        {
                            question:
                                "1. How is temporary service established?",
                            ans:
                                "Shipments sent outside the turopean anion are sold elite of bag and might be liable to import obligations and assessments, which might be collected once a shipment arrives at your nation. Any extra charges for customs leeway are payable by you, the client. We have no influence over these charges and can't repay any expenses caused paying little heed to the conditions. For subtleties of Customs charges please counsel your",
                        },
                    ],
                },
                {
                    faqCategory: "Delivery Process",
                    items: [
                        {
                            question:
                                "1. How is temporary service established?",
                            ans:
                                "Shipments sent outside the turopean anion are sold elite of bag and might be liable to import obligations and assessments, which might be collected once a shipment arrives at your nation. Any extra charges for customs leeway are payable by you, the client. We have no influence over these charges and can't repay any expenses caused paying little heed to the conditions. For subtleties of Customs charges please counsel your",
                        },
                    ],
                },
            ],
        };
    },
    computed: {
        vertical() {
            if (this.windowSize < 768) {
                return false;
            } else {
                return true;
            }
        },
    },
    methods: {
        onResize() {
            this.windowSize = window.innerWidth;
        },

        openPanel() {
            this.panel = 0;
        },
    },
    mounted() {
        this.onResize();
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/faq.scss";
</style>