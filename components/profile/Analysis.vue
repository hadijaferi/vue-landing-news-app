<template>

	<v-row class="profile-content">
		<v-col v-if="owner" cols="12" md="12" class="text-left">
			<NuxtLink to="/analysis/create">
				<v-btn
					large
					depressed
					class="py-6 bg-main white--text"
				>
					<v-icon class="head-icon">mdi-plus-circle-outline</v-icon>
					ثبت تحلیل جدید
				</v-btn>
			</NuxtLink>
		</v-col>
		<v-col cols="12" md="12">
			<BaseNote v-if="analysis.length == 0 && !notFound" type="loading" class="mt-0" />
			<BaseNote v-else-if="analysis.length == 0 && notFound" type="custom" note="هیچ تحلیلی ثبت نشده است." class="mt-0" />
			<v-data-table
			 	v-else
				:headers="analysisHeaders"
				:items="analysisItems"
				class="profile-table"
				hide-default-footer
				:items-per-page="10"
			>
				<template v-slot:[`item.creationTime`]="{ item }">
					{{ $moment(item.creationTime.substr(0, item.creationTime.indexOf("T")), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }}
				</template>
				<template v-slot:[`item.analysisChart.id`]="{ item }">
					<NuxtLink :to="'/analysis/' + item.analysisChart.id" target="_blank">
						<v-btn depressed>
							مشاهده تحلیل
						</v-btn>
					</NuxtLink>
				</template>
			</v-data-table>
		</v-col>
	</v-row>

</template>

<script>
  export default {
    props: ['userId', 'owner'],
    data: () => ({  
      analysis: "",
			analysisHeaders: [
				{ text: "ردیف", value: "index", sortable: false },
				{ text: "عنوان تحلیل", value: "analysisChart.name", sortable: false },
				{ text: "نماد", value: "analysisChart.symbolName", sortable: false },
				{ text: "تاریخ", value: "creationTime", sortable: false },
				{ text: "بیشتر", value: "analysisChart.id", sortable: false }
			],
			notFound: false,
    }),
    created: function () {
    	this.getAnalysis(this.userId);
    },
		methods: {
			getAnalysis(userId) {
      	this.$axios.$get("/api/Public/GetAnalysisCharts", {
          params: {
            UserIdFilter: userId
          }
        })
        .then(response => {
          this.analysis = response.result.items.reverse();
					if (this.analysis.length == 0) {
						this.notFound = true;
					}
        });
    	},
		},
		computed: {
			analysisItems() {
				return this.analysis.map((items, index) => ({
					...items,
					index: index + 1
				}));
			},
		}
  }
</script>

<style lang="scss" >
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

</style>
