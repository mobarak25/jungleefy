<template>
    <v-flex class="delivery-wrap">
        <!-- inner banner -->
        <inner-banner :options="bannerContent"></inner-banner>

        <v-flex class="delivery-panel">
            <v-container class="py-0">
                <v-flex class="delivery-box">
                    <h4>Proin ultrices eros massa</h4>
                    <p>Jungleebazaar, S. L. is the owner and, therefore, responsible for the projects indicated below, including any of their subdomains or sections (hereinafter, "Website" as corresponds:</p>

                    <ul class="pa-0 pb-6">
                        <li>
                            <b>• www.index-companies.com</b>
                        </li>
                        <li>
                            <b>• www.venturex.com</b>
                        </li>
                        <li>
                            <b>• www.digitalx.com</b>
                        </li>
                        <li>
                            <b>• www.knittersland.com</b>
                        </li>
                    </ul>
                    <p>
                        This lawful content applies to the data we gather from you when you visit our Website, as in the accompanying cases: client enrollment,
                        utilizing any of our administrations, cooperation, membership to our bulletins or individual data gave when filling in online structures.
                    </p>
                    <p>The current Privacy Policy manages the preparing of individual information having a place with the Website's clients (hereinafter, "Client" or "Clients", as appropriate) performed by Jungleebazaar Company, S.L. (hereinafter, "Jungleebazaar Company"), gathered using the administrations offered on the Website (hereinafter, "Administrations").</p>
                    <p>By utilizing and getting to our Website, the User recognizes that they have perused this Privacy Policy and that they completely concur with it. The most recent update of this Privacy Policy is shown at the highest point of this content and it will become taking effect right now after being posted. Freepik Company, in this way, suggests looking into this Privacy Policy occasionally.</p>
                    <p>
                        A portion of the Services offered on the Website might be dependent upon explicit protection arrangements that will enhance this general Privacy Policy or, in the event that they contrast from the particulars of this Privacy Policy, they will substitute the current Privacy Policy. These extra security approaches must be acknowledged by the User before starting the relating Service. Furthermore, the entrance and utilization of the Website and the going with Services are represented by the
                        <router-link
                            :to="{name:'TermsAndConditions'}"
                            class="brand--text"
                        >Terms & Conditions</router-link>&nbsp; of the Website.
                    </p>
                </v-flex>

                <v-flex class="delivery-box">
                    <h4>Individual Data Processing</h4>
                    <p>The accompanying segments address the assortment and preparing of Users' own data through any of the tasks run by Jungleebazaar Company, including any of their subdomains and areas.</p>
                </v-flex>

                <v-flex class="delivery-box">
                    <h4>1. Information Controller</h4>
                    <p>Jungleebazaar COMPANY, S.L, as information controller, is answerable for the preparing of Users' own data on the Website: Jungleebazaar, S.L.</p>

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
                </v-flex>

                <v-flex class="delivery-box">
                    <h4>2. Information We Collect</h4>
                    <p>As per the BD General Data Protection Regulation (GDPR, 679/2016/BD), individual information alludes to any data identifying with a recognized or recognizable common individual (User), that is, any data which can distinguish a charac teristic individual. Along these lines, it isn't appropriate to mysterious information.</p>

                    <p>Jungleebazaar Company gathers various kinds of individual information, which include:</p>

                    <ul class="pa-0">
                        <li>
                            <b>• Character Data:</b> first name and last name and officially sanctioned recognizable proof number.
                        </li>
                        <li>
                            <b>• Contact Data:</b> email address, phone number and postal location.
                        </li>
                        <li>
                            <b>• Utilization Data:</b> data about how the User utilizes the Website, items and administrations.
                        </li>
                    </ul>
                </v-flex>

                <v-flex class="delivery-box">
                    <h4>3. Global Data Transfers</h4>
                    <p>Some outer specialist organizations of Jungleebazaar Company are outside the European Economic Area (EEA), which infers that the User's own data might be moved to nations outside the BD.</p>

                    <p>So as to offer help when offering types of assistance, Jungleebazaar Company works with subprocessors, subcontractors and other substance conveyance systems.</p>
                    <p>A sub-processor is an outside information processor shrunk by Jungleebazaar Company, who has been allowed access to data (which might be close to home) about customers and partners and who can process it.</p>
                    <p>Regardless, and concerning worldwide information moves, Jungleebazaar Company resolves to guarantee that moves of individual data outside the EEA agree to this Privacy Policy and meet any appropriate law with respect to information insurance guidelines of the BD.</p>
                </v-flex>

                <v-flex class="delivery-box">
                    <h4>4. Grumbling Submission</h4>
                    <p>
                        In the event that you, the User, don't concur with the way Jungleebazaar Company forms your own information, you can get in touch with us by sending an email to
                        <a
                            class="brand--text"
                            href="mailto:support@Jungleebazaar.com"
                        >support@Jungleebazaar.com</a> or by reaching straightforwardly to the Spanish Data Protection Agency.
                    </p>
                </v-flex>
            </v-container>
        </v-flex>
    </v-flex>
</template>

<script>
import InnerBanner from "@/components/sites/common/InnerBanner";

export default {
    name: "privacyPolicy",
    components: {
        InnerBanner,
    },

    data() {
        return {
            bannerContent: {
                title: "Privacy Policy <span>Effective March, 2020</span>",
                image: "privacy-policy.jpg",
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