<template>
    <v-main class="grey lighten-3">
        <v-container v-if="analyse">
            <BaseBreadcrumb :items="bcItems"/>
            <v-row>
                <v-col>
                    <v-sheet rounded="lg" class="pa-5 mb-5">
                        <v-row>
                            <v-col>
                                <h1 class="analyse-titleanalyse-title">{{ analyse.analysisChart.name }}</h1>
                                <p class="analyse-subtitle">
                                    توسط {{ analyse.userName }}
                                    در <span dir="ltr">{{ $moment(analyse.creationTime.substr(0, analyse.creationTime.indexOf('T')), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }}</span>
                                    <span v-if="analyse.modificationTime">(ویرایش شده در {{ $moment(analyse.modificationTime.substr(0, analyse.modificationTime.indexOf('T')), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }})</span>
                                </p>
                            </v-col>
                            <v-col class="text-left mt-2">
                                <p>{{ analyse.analysisChart.symbolName }}</p>
                                <div v-if="analyse.analysisChart.analysisType" class="analysis-info mt-3">
                                    <ul>
                                        <li v-if="analyse.analysisChart.analysisType == 1" class="red">فروش</li>
                                        <li v-else class="green">خرید</li>
                                        <li v-if="analyse.analysisChart.takeProfit">
                                            حد سود:
                                            <span dir="ltr" class="green--text">
                        {{ analyse.analysisChart.takeProfit }}
                      </span>
                                        </li>
                                        <li v-if="analyse.analysisChart.stoploss">
                                            حد ضرر:
                                            <span dir="ltr" class="red--text">
                        {{ analyse.analysisChart.stoploss }}
                      </span>
                                        </li>
                                    </ul>
                                </div>
                            </v-col>
                        </v-row>
                    </v-sheet>
                    <v-sheet rounded="lg" class="pt-10 pb-12 px-10 mb-5">
                        <TVChartContainer :info="analyse"/>
                        <p class="analyse-description mt-7" v-html="this.analyse.analysisChart.description"></p>
                        <div v-if="this.analyse.analysisChart.sepratedTags" class="news-tags mt-7">
                            <v-icon class="head-icon">mdi-tag-multiple</v-icon>
                            <ul>
                                <li v-for="(tag, index) in this.analyse.analysisChart.sepratedTags" :key="index">
                                    <a>{{ tag }}</a>
                                </li>
                            </ul>
                        </div>
                    </v-sheet>

                    <v-sheet v-if="similarAnalysis.length > 1" rounded="lg" class="mb-5 pa-10">
                        <NewsTitle title="تحلیل‌های مشابه" :icons="['mdi-chart-box-outline']"/>
                        <v-row class="mt-0">
                            <template v-for="(analyseItem, index) in similarAnalysis">
                                <v-col cols="4" v-if="analyseItem.analysisChart.id != $route.params.id"
                                       :key="'0'+index">
                                    <ACard :info="analyseItem"/>
                                </v-col>
                            </template>
                        </v-row>
                    </v-sheet>

                    <v-sheet v-if="userAnalysis.length > 1" rounded="lg" class="mb-5 pa-10">
                        <NewsTitle
                                :title="'تحلیل‌های ' + analyse.userName + ' بر روی نماد ' + analyse.analysisChart.symbolName.substr(0, analyse.analysisChart.symbolName.indexOf(':'))"
                                :icons="['mdi-chart-box-outline']"
                        />
                        <v-row class="mt-0">
                            <template v-for="(analyseItem, index) in userAnalysis">
                                <v-col cols="4" v-if="analyseItem.analysisChart.id != $route.params.id"
                                       :key="'1'+index">
                                    <ACard :info="analyseItem"/>
                                </v-col>
                            </template>
                        </v-row>
                    </v-sheet>

                    <!-- <v-sheet rounded="lg" class="pa-10">
                      <NewsTitle title="نظرات کاربران" :icons="['mdi-comment-text-outline']" />
                      <BaseComments  />
                    </v-sheet> -->

                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import generateKey from "../../utils/generateKey";
    import axios from "axios";
    export default {
        data: () => ({
            bcItems: [
                {
                    text: 'تحلیل تکنیکال',
                    disabled: false,
                    href: '/analysis',
                },
                {
                    text: '',
                    disabled: false,
                    href: '',
                },
            ],
            analyse: '',
            similarAnalysis: '',
            userAnalysis: '',
        }),
       async asyncData({params,app,error}){
           console.log(params,"=================================",app)

           let {data}= await axios.$get('/api/Public/GetDefaultAnalysisChart', {
                params: {
                    Id: params.id
                }
            })
            console.log(data,"hi hadi")
        },
        mounted: function () {

            this.$axios.$get('/api/Public/GetDefaultAnalysisChart', {
                params: {
                    Id: this.$route.params.id
                }
            })
                .then(response => {
                    this.analyse = response.result;
                    this.bcItems[1].text = this.analyse.analysisChart.name;
                    this.getSimilarAnalysis();
                    this.getUserAnalysis();
                })
                .catch(error => {
                    this.GetAnalysisChart();
                })
            console.log(this.analyse, "hahah")
        },
        methods: {
            GetAnalysisChart() {
                this.$axios.$get('/api/Public/GetAnalysisChart', {
                    params: {
                        Id: this.$route.params.id
                    }
                })
                    .then(response => {
                        this.analyse = response.result;
                        this.bcItems[1].text = this.analyse.analysisChart.name;
                        this.getSimilarAnalysis();
                        this.getUserAnalysis();
                    })
            },
            getSimilarAnalysis() {
                this.$axios.$get('/api/Public/GetDefaultAnalysisCharts', {
                    params: {
                        SymbolNameFilter: this.analyse.analysisChart.symbolName
                    }
                })
                    .then(response => {
                        this.similarAnalysis = response.result.items.reverse();
                    })
            },
            getUserAnalysis() {
                this.$axios.$get('/api/Public/GetDefaultAnalysisCharts', {
                    params: {
                        UserNameFilter: this.analyse.userName,
                        SymbolNameFilter: this.analyse.analysisChart.symbolName
                    }
                })
                    .then(response => {
                        this.userAnalysis = response.result.items.reverse();
                    })
            }
        },
        head() {
            return {
                // title:`همتا | ${this.analyse.analysisChart.name}`,
                title:`همتا | ${this.answere}`,
                // title: `همتا | تحلیل `,
                meta: [
                    {
                        hid: generateKey("analysSingle"),
                        name: 'description',
                        content: "description"     // this.analyse.analysisChart.description
                    },
                    {
                        hid: generateKey("analysSingle"),
                        name: 'url',
                        content: 'https://hamta.agah.com/analysis'
                    },

                ],
                link: [
                    {
                        rel: 'canonical',
                        href: 'https://hamta.agah.com' + this.$route.path
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '~/assets/scss/_variables.scss';
    @import '~/assets/scss/_mixins.scss';

    .analyse-title {
        font-size: 28px;
        font-family: $f-b;
        margin-bottom: 10px;
        color: $c1;
    }

    .analyse-subtitle {
        color: #666;
        font-size: 14px;
    }

    .analyse-description {
        color: #212121;
        line-height: 33px;
    }

    .analysis-info {
        ul {
            li {
                display: inline-block;
                font-size: 14px;
                margin: 0 5px;

                &:first-child {
                    // background: rgb(0, 150, 0);
                    color: $cw;
                    padding: 0 10px 2px 10px;
                    border-radius: 30px !important;
                }

                span {
                    direction: ltr !important;
                }
            }
        }
    }

</style>
