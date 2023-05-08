<template>

	<v-row class="profile-content">
		<v-col cols="12" md="12">
			<BaseNote v-if="comments.length == 0 && !notFound" type="loading" class="mt-0" />
			<BaseNote v-else-if="comments.length == 0 && notFound" type="custom" note="هیچ نظری ثبت نشده است." class="mt-0" />
			<v-data-table
			 	v-else
				:headers="commentsHeaders"
				:items="commentsItems"
				class="profile-table"
				hide-default-footer
				:items-per-page="count+10"
			>
				<template  v-slot:[`item.comment.publishTime`]="{ item }">
					<span v-if="item.comment.publishTime">{{ $moment(item.comment.publishTime.substr(0, item.comment.publishTime.indexOf("T")), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }}</span>
					<span v-else>-</span>
				</template>
				<template v-slot:[`item.comment.objectId`]="{ item }">
					<NuxtLink :to="'/news/' + item.comment.objectId" target="_blank">
						<v-btn depressed>
							مشاهده خبر
						</v-btn>
					</NuxtLink>
				</template>
			</v-data-table>
			<v-row v-if="total > count+10">
				<v-btn
					depressed
					class="py-6 px-10 bg-main white--text mt-15 mx-auto"
					:loading="loading"
					@click="count = count+10, getComments()"
				>
					مشاهده نظرات بیشتر...
				</v-btn>
			</v-row>
		</v-col>
	</v-row>

</template>

<script>
  export default {
    props: ['userId'],
    data: () => ({  
			comments: [],
			commentsHeaders: [
				{ text: "ردیف", value: "index", sortable: false },
				{ text: "عنوان خبر", value: "objectTitle", sortable: false },
				{ text: "نظر", value: "comment.message", sortable: false },
				{ text: "تاریخ", value: "comment.publishTime", sortable: false },
				{ text: "بیشتر", value: "comment.objectId", sortable: false }
			],
			notFound: false,
			loading: false,
			total: '',
			count: 0,
    }),
    created: function () {
    	this.getComments(this.userId);
    },
		methods: {
			getComments(userId) {
        this.loading = true;
				this.$axios.$get("/api/Public/GetComments", {
					params: {
						SenderUserIdFilter: userId,
						IsPublishedFilter: 1,
						IsQuestionFilter: false,
            SkipCount: this.count
					}
				})
				.then(response => {
          this.comments = this.comments.concat(response.result.items);
          this.total = response.result.totalCount;
          this.loading = false;
					if (this.comments.length == 0) {
						this.notFound = true;
					}
				});
			},
		},
		computed: {
			commentsItems() {
				return this.comments.map((items, index) => ({
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
