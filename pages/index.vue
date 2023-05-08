<template>
    <v-main>
        <v-container fluid class="pa-0">
            <SwiperSlideshow :slides="sections"/>
            <v-container>
                <BaseTitleMain :text="sections.news" class="mt-10"/>
                <v-row class="mt-10">
                    <v-col class="spotlight">
                        <SwiperNews/>
                        <div class="text-center">
                            <v-btn large depressed outlined class="border-main mt-10" :to="sections.news.link">
                                مشاهده بیشتر...
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
            <v-container fluid class="about mt-15">
                <v-container>
                    <v-row>
                        <v-col>
                            <p>
                                شرکت مشاور سرمایه‌گذاری آوای آگاه (سهامی خاص) در تاریخ 1389/9/17 تأسیس شده و طی شماره
                                391930 در اداره ثبت شرکت‌های تهران به ثبت رسیده است. این شرکت به عنوان اولین شرکت مشاور
                                سرمایه‌گذاری تحت نظارت سازمان بورس و اوراق بهادار تهران بوده که در سال 1389 فعالیت خود
                                را با سرمایه 8 میلیارد ریالی آغاز کرد و طی گذشت این سال‌ها، سرمایه خود را به 20 میلیارد
                                ریال افزایش داده است. کارگزاری آگاه به عنوان سهامدار عمده، مالکیت بیش از 90 درصد از سهام
                                این شرکت را در اختیار داشته و به‌صورت مستقیم از سرویس‌های ارائه شده توسط آوای آگاه، برای
                                مشتریان خود استفاده می نماید. سایر سهام آوای آگاه در اختیار افراد حقیقی است که عمدتاً
                                مدیران کارگزاری آگاه و یا شرکت مشاور سرمایه‌گذاری آوای آگاه هستند.
                            </p>
                        </v-col>
                    </v-row>
                </v-container>
            </v-container>
            <v-container>
                <BaseTitleMain :text="sections.technical" class="mt-15"/>
                <v-row class="mt-10">
                    <v-col>
                        <SwiperAnalysis/>
                        <div class="text-center">
                            <v-btn large depressed outlined class="border-main mt-10" :to="sections.technical.link">
                                مشاهده بیشتر...
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
            <v-container fluid class="mt-15 faq-back">
                <v-container>
                    <BaseTitleMain :text="sections.faq" class="mt-15"/>
                    <v-row class="mt-10">
                        <v-col cols="12" md="10 offset-md-1">
                            <BaseFaq :faq="faq"/>
                            <div class="text-center">
                                <v-btn large depressed outlined class="border-main mt-10" :to="sections.faq.link">
                                    مشاهده بیشتر...
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-container>
        </v-container>
    </v-main>
</template>

<script>
    import generateKey from "../utils/generateKey";

    export default {
        data: () => ({
            title:"'همتا''همتا'",
            sections: {
                news: {
                    title: "آخریـن اخبـار",
                    description: "مصاحبه با مدیران شرکت های بورسی، گفت و گو با کارشناسان و تحلیل گران و همچنین پیگیری آخرین خبرها از مدیران سازمان بورس...",
                    img: require('../static/img/slideshow/news.svg'),
                    link: "/news"
                },
                technical: {
                    title: "تحلیـل‌های تکنیـکال",
                    description: "ضمن ارایه تحلیل‌های تکنیکال توسط تحلیل‌گران سایت همتا، کاربران سایت نیز می‌توانند با استفاده از ابزار TradingView اقدام به ارایه تحلیل نمایند.",
                    img: require('../static/img/slideshow/technical.svg'),
                    link: "/analysis"
                },
                faq: {
                    title: "پرسـش و پاسـخ",
                    description: " کارشناسان سایت همتا به صورت آنلاین و اختصاصی پاسخگوی سوالات بورسی شما خواهند بود. شما می‌توانید در این بخش در خصوص نماد خاصی از کارشناس مورد نظرتان مشاوره اختصاصی بگیرید.",
                    img: require('../static/img/slideshow/faq.svg'),
                    link: "/faq"
                },
                fundamental: {
                    title: "تحلیـل‌های بنیـادی",
                    description: "پیشنهادهای سرمایه‌گذاری، تحلیل بنیادی، بررسی بازارهای جهانی و پیش بینی روند بازار سهام در این بخش توسط تیم تحلیل همتا ارائه می گردد.",
                    img: require('../static/img/slideshow/fundamental.svg'),
                    link: "/consulting"
                },
                baskets: {
                    title: "سبدهـای پیشنهـادی",
                    description: "تیم همتا اقدام به ارایه سبد پیشنهادی مناسب برای سرمایه‌گذاری با مشخص بودن درصد تخصیص هر سهم در سبد، قیمت ورود، حد سود و حد ضرر می‌نماید.",
                    img: require('../static/img/slideshow/baskets.svg'),
                    link: "/baskets"
                }
            },

            news: "",
            faq: "",
        }),
        created: function () {
            // Get Recent News
            this.$axios.$get('/api/Public/RecentContents', {
                params: {
                    TenantId: 1
                }
            })
                .then(response => {
                    this.news = response.result.items;
                })

            this.$axios.$get('/api/services/app/QuestionAnswers/GetAll', {
                params: {}
            })
                .then(response => {
                    this.faq = response.result.items;

                })
        },
          head(){
            return{
                title:this.title,
                meta: [
                    {
                        hid: generateKey("hamta"),
                        name: 'description',
                        content: 'شرکت مشاور سرمایه‌گذاری آوای آگاه (سهامی خاص) در تاریخ 1389/9/17 تأسیس شده و طی شماره 391930 در اداره ثبت شرکت‌های تهران به ثبت رسیده است.'
                    },
                    {
                        hid:generateKey("hamtaUrl"),
                        name: 'url',
                        content: 'https://hamta.agah.com'
                    },
                    {
                        hid: generateKey("hamtaImage"),
                        name: 'image',
                        content: 'get mi Image Server !!'
                    }
                ]
            }
          },


    }
</script>

<style lang="scss" scoped>
    @import '~/assets/scss/_variables.scss';
    @import '~/assets/scss/_mixins.scss';

    .faq-back {
        background-image: -webkit-linear-gradient(top, #eee 20%, transparent 100%);
        background-image: -moz-linear-gradient(top, #eee 20%, transparent 100%);
        background-image: linear-gradient(to bottom, #eee 20%, transparent 100%);

        @include res(sm) {
            padding: 0 3px;
        }
    }

</style>
