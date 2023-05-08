<template>

	<v-row class="profile-content">
		<v-col cols="12" md="12">
			<BaseNote v-if="articles.length == 0 && !notFound" type="loading" class="mt-0" />
			<BaseNote v-else-if="articles.length == 0 && notFound" type="custom" note="هیچ نظری ثبت نشده است." class="mt-0" />
			<v-data-table
			 	v-else
				:headers="articlesHeaders"
				:items="articlesItems"
				class="profile-table"
				hide-default-footer
				:items-per-page="10"
			>
				<template v-slot:[`item.publishTime`]="{ item }">
					{{ $moment(item.publishTime.substr(0, item.publishTime.indexOf("T")), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }}
				</template>
				<template v-slot:[`item.id`]="{ item }">
					<NuxtLink :to="'/news/' + item.id" target="_blank">
						<v-btn depressed>
							مشاهده خبر
						</v-btn>
					</NuxtLink>
				</template>
			</v-data-table>
		</v-col>
	</v-row>

</template>

<script>
  export default {
    props: ['userId'],
    data: () => ({  
			articles: "",
			articlesHeaders: [
				{ text: "ردیف", value: "index", sortable: false },
				{ text: "عنوان مقاله", value: "title", sortable: false },
				{ text: "تاریخ", value: "publishTime", sortable: false },
				{ text: "بیشتر", value: "id", sortable: false }
			],
			notFound: false,
    }),
    created: function () {
    	this.getarticles(this.userId);
    },
		methods: {
			getarticles(userId) {
				this.$axios.$get("/api/Public/RecentContents", {
					params: {
						TenantId: 1,
						ReporterUserNameFilter: "محسن مومنی",
					}
				})
				.then(response => {
					this.articles = response.result.items;
					if (this.articles.length == 0) {
						this.notFound = true;
					}
				});
			},
		},
		computed: {
			articlesItems() {
				return this.articles.map((items, index) => ({
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
