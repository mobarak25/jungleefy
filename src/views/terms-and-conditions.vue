<template>
    <v-flex class="delivery-wrap">
        <!-- inner banner -->
        <inner-banner :options="bannerContent"></inner-banner>

        <v-flex class="delivery-panel">
            <v-container class="py-0">
                <v-flex class="delivery-box">
                    <h4>Introduction</h4>
                    <p>
                        This site is worked by Jungleebazaar Company, S.L., enlisted in the Commercial Registry of Málaga, volume 4994, sheet 217, page number MA-222333, with Tax Number B-00000022 and enrolled office at MF Tower, Plot-ga-95/c, Pragati Sarani Gulshan 1 Link Road, Dhaka-1212,
                        Bangladesh ("Company").
                    </p>

                    <p>This page contains significant data about your lawful rights and commitments when utilizing any of the sites and administrations having a place with the Company. Coming up next is an assortment of the by and large material terms of utilization over our sites and administrations, while explicit arrangements are remembered for the terms of utilization of the important Company's site or administration and might be gotten to by means of the connections gave beneath.</p>

                    <p>On the off chance that you have any protests with respect to the terms of utilization of the Websites or Services, it would be ideal if you abstain from utilizing these.</p>

                    <p>
                        In respect of collection and processing of personal data, the
                        <router-link :to="{name:'PrivacyPolicy'}" class="brand--text">Privacy policy</router-link>&nbsp; will apply.
                    </p>
                </v-flex>

                <v-flex class="delivery-box">
                    <h4>Enrollment</h4>
                    <p>So as to utilize certain Services, the User must enroll, making a username and secret phrase and initiating a record. To this end, the User must give a substantial email address where the User will get notices identified with the Services. In the event that the User is a lawful element or business, its username must be its complete name or corporate name and the individual enlisting for the benefit of the legitimate element or business proclaims that he/she is properly approved to tie such lawful element or business and that such lawful substance or business will be bound to the details of the important Website/Service.</p>

                    <p>The User consents to give the obligatory data required to enrollment and furthermore recognizes that such data is valid, finished and forward-thinking. The User is exclusively answerable for keeping such data refreshed. Should the User give bogus, obsolete or deficient data, or should the Company have motivations to presume it, the Company maintains whatever authority is needed to suspend or drop the User's record.</p>
                </v-flex>

                <v-flex class="delivery-box">
                    <h4>Risk</h4>
                    <p>The User recognizes and concurs that he/she/it utilizes the Website and its Services at the User's own hazard and under the User's obligation and, accordingly, the Company doesn't acknowledge any duty regarding abuse or use in break of the provisions of the important Web Site/Service. As method of model and without confinement, the Company will not be obligated for any harms that may result from:</p>
                    <ul class="pa-0">
                        <li>
                            <b>• Interferences, infections, specialized issues, impedances, exclusions, inaccessibility, power cuts, disappointment.</b>
                        </li>
                        <li>
                            <b>• ponements or inaccessibility of the Website and the Services because of insufficiencies or traffic over-burden on the Internet.</b>
                        </li>
                        <li>
                            <b>• Outsider activities.</b>
                        </li>
                        <li>
                            <b>• Inaccessibility of the Website and the Services because of upkeep or programming refreshes.</b>
                        </li>
                        <li>
                            <b>• Some other occasion past the Company's immediate control.</b>
                        </li>
                    </ul>
                </v-flex>

                <v-flex class="delivery-box">
                    <h4>Licensed innovation</h4>
                    <p>All protected innovation rights over the Website, the Services, its structure, and source code, and all substance remembered for any of them counting without restriction content, pictures, livelinesss, databases, illustrations, logos, trademarks, symbols, catches, pictures, recordings, sound chronicles, and so forth. have a place or are authorized to the Company.</p>

                    <p>With the exception of as explicitly approved under the provisions of the applicable Website/Service, the multiplication or dispersion, just as change, delivering any subordinate works of any sort, open correspondence, making accessible, extraction, reuse or some other utilization of the Website, the Services or its substance or any of its parts, is carefully illegal.</p>
                </v-flex>

                <v-flex class="delivery-box">
                    <h4>Changes and Closure of the Website</h4>
                    <p>The Company may, at any second, and without acquiring in any obligation towards the User, alter the substance of the Website or, as far as possible or change the conditions or stop to give a few or all the Services and highlights accessible or deactivate and erase all or a portion of the User accounts and their relating data. Nonetheless, the Company will conform to its commitments in regards to the keeping of records comparable to specific exchanges for the significant period as gave by pertinent law or discount the Users of Subscriptions in power around then with the corresponding piece of the cost not accumulated before the end.</p>
                </v-flex>

                <v-flex class="delivery-box">
                    <h4>General and Contact Information</h4>
                    <p>The utilization of the Website and the Services and the translation and use of these terms will be administered by Spanish Law. Aside from those cases in which the material law force a particular locale, any question regarding these terms will be settled by the Courts of Málaga (Spain), and the gatherings explicitly forgo some other appropriate ward.</p>

                    <address>
                        MF Tower, Plot-ga-95/c, Pragati Sarani
                        <br />Gulshan 1 Link Road, Dhaka-1212, Bangladesh
                    </address>

                    <span>
                        Phone:
                        <a class="brand--text" href="tel:+88029840726">+88029840726</a>
                    </span>
                    <br />
                    <span>
                        Email:
                        <a
                            class="brand--text"
                            href="mailto:info@Jungleebazaar.com"
                        >info@Jungleebazaar.com</a>
                    </span>

                    <p
                        class="pt-6"
                    >In the event that any arrangement in these terms is proclaimed to be invalid or unenforceable, it will be subbed or considered as excluded. The rest of the arrangements in these terms will not be influenced at all.</p>
                </v-flex>
                <v-flex class="delivery-box">
                    <p>
                        You may contact the Company for any query or claim within sending an email to
                        <a
                            class="brand--text"
                            href="mailto:support@Jungleebazaar.com"
                        >support@Jungleebazaar.com</a>
                    </p>
                </v-flex>
            </v-container>
        </v-flex>
    </v-flex>
</template>

<script>
import InnerBanner from "@/components/sites/common/InnerBanner";

export default {
    name: "DeliveryInformation",
    components: {
        InnerBanner,
    },

    data() {
        return {
            bannerContent: {
                title: "Terms & Conditions",
                image: "terms-and-conditions.jpg",
            },
        };
    },
};
</script>

<style lang="scss">
.delivery-wrap .container {
    max-width: 1050px;
}
.delivery-panel {
    padding: rem-calc(65px 0);
}
.delivery-box {
    padding-bottom: rem-calc(25px);
    h4 {
        padding-bottom: rem-calc(10px);
        @include font(primary, 22px, 26px, medium);
    }
    p {
        @include font(false, 15px, 26px, false);
        &:not(:last-child) {
            padding-bottom: rem-calc(25px);
        }
    }
    ol {
        padding-left: rem-calc(15px);

        li {
            @include font(false, 15px, 26px, false);
        }
    }
    ul {
        li {
            @include font(false, 15px, 26px, false);
        }
    }
    address {
        font-style: normal;
        @include font(false, 15px, 26px, false);
    }
    span {
        @include font(false, 15px, 26px, false);
    }
}
</style>