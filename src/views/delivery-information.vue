<template>
    <v-flex class="delivery-wrap">
        <!-- inner banner -->
        <inner-banner :options="bannerContent"></inner-banner>

        <v-flex class="delivery-panel">
            <v-container class="py-0">
                <v-flex class="delivery-box">
                    <h4>Speedy, protected and simple - from Jungleebazaar to your Delivery!</h4>
                    <p>Purchase straightforwardly on Jungleebazaar without leaving your home. Simply click on Order Online to put in a request, and the thing will be conveyed to your doorstep. At the point when you purchase utilizing Doorstep Delivery, you are secured by our Buyer Protection program. This implies if the conveyed thing isn't as portrayed in the promotion, it will be swapped for FREE.</p>
                </v-flex>

                <v-flex class="delivery-box">
                    <h4>How Delivery Information functions</h4>
                    <ol>
                        <li>Snap on Order Online and put in your request.</li>
                        <li>The dealer will call you to affirm the request and mastermind a conveyance time.</li>
                        <li>The thing will be conveyed to your doorstep</li>
                        <li>Purchaser Protection: If the conveyed thing isn't as depicted in the advertisement, it will be traded for FREE.</li>
                    </ol>
                </v-flex>

                <v-flex class="delivery-box">
                    <h4>Standard Delivery Times</h4>
                    <ul class="pa-0">
                        <li>- Free Delivery over tk1550 (Delivered inside 3-10 business days).</li>
                        <li>- Standard Delivery tk2000 (Delivered inside 3-5 business days).</li>
                        <li>- Express 24hr Tracked + Signed tk4000 (Delivered inside 1-2 business days)</li>
                    </ul>
                    <p
                        class="pt-5"
                    >Every single Standard conveyance are made Saturday - Thursday, Courier conveyances are Saturday - Thursday.</p>
                </v-flex>

                <v-flex class="delivery-box">
                    <h4>Customs & International Import Charges</h4>
                    <p>If it's not too much trouble note that there are no import/send out obligations pertinent on merchandise sent inside the European Union. All merchandise transported to European Union nations as of now have the applicable VAT included naturally on our site.</p>

                    <p>Shipments sent outside the European Union are sold elite of VAT and might be liable to import obligations and assessments, which might be collected once a shipment arrives at your nation. Any extra charges for customs leeway are payable by you, the client. We have no influence over these charges and can't repay any expenses caused paying little heed to the conditions. For subtleties of Customs charges please counsel your own Customs experts for the most recent rates.</p>
                </v-flex>

                <v-flex class="delivery-box">
                    <h4>Other Notes</h4>
                    <p>Requests put after noontime on Thursday will be delivered on the next Saturday. If it's not too much trouble Note, All first requests that are setting off to a different conveyance address, may take more time to process. We exhort that every first request ought to go to your Billing or Business address!</p>

                    <p>In the event that you are away from the conveyance address our dispatch will get a card through your entryway permitting you to re-book a conveyance with the messenger or permit you to get the request from the stop or arranging office. The messenger has the privilege to endeavor a conveyance to a close by neighbor, instead of redelivering the following day.</p>

                    <p>
                        Dispatch returned things will be included go into our stock and your record credited with the request all out, less the expense the messenger charges us to convey the thing back to us. You should supplant the request to have the thing re-transported. On the off chance that you
                        require a discount on things returned by the messenger this will be done short the dispatches charge.
                    </p>
                </v-flex>

                <v-flex class="delivery-box">
                    <h4>Contact Information</h4>
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
                title: "Delivery Information",
                image: "delivery-information.jpg",
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