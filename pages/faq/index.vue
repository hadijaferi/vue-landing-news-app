<template>
   <v-main>
    <v-container>
      <BaseBreadcrumb :items="bcItems" />
      <v-row>
        <v-col cols="12" md="3">
					<div class="sticky">
						<NewsTitle title="سوال دارید؟" :icons="['mdi-comment-question-outline ']" class="mt-0" />
						<v-btn depressed dark :color="$store.state.cPrimary" width="100%" class="pa-7 mb-3" @click.stop="DialogQuestion = true">
							<v-icon class="ml-2">mdi-plus-circle</v-icon>
							مطرح کردن پرسش جدید
						</v-btn>
						<v-dialog v-model="DialogQuestion" max-width="750">
							<DialogQuestion />
						</v-dialog>
						<v-text-field
							outlined
							clearable
							v-model="searchWord"
							hint="موضوع خود را در پرسش‌های سایت جستجو کنید."
							label="جستجو کنید"
							:color="$store.state.cPrimary"
							append-icon="mdi-magnify"
							clear-icon="mdi-close"
							@click:append="getFAQ(searchWord)"
							@keyup.enter="getFAQ(searchWord)"
						></v-text-field>
						<NewsTitle title="موضوعات" :icons="['mdi-format-list-numbered-rtl']" class="mt-0" />
						<v-list>
							<v-list-item-group v-model="selectedCategory" :color="$store.state.cPrimary">
								<v-list-item v-for="(item, i) in categories" :key="i">
									<v-list-item-icon>
										<v-icon v-text="item.icon"></v-icon>
									</v-list-item-icon>
									<v-list-item-content>
										<v-list-item-title>
											{{ item.text }}
											<span>{{ item.number }}</span>
										</v-list-item-title>
									</v-list-item-content>
								</v-list-item>
							</v-list-item-group>
						</v-list>
					</div>
        </v-col>
        <v-col cols="12" md="6">
					<SwiperTopMembers />
					<NewsTitle title="پرسش و پاسخ‌ها" :icons="['mdi-comment-text-multiple-outline']" class="mt-5" />
					<!-- <v-tabs
					fixed-tabs
					class="mb-5"
					:color="$store.state.cPrimary"
					icons-and-text
					>
						<v-tab>
							برگزیده‌ها
							<v-icon>mdi-star</v-icon>
						</v-tab>
						<v-tab>
							بدون پاسخ
							<v-icon>mdi-comment-question</v-icon>
						</v-tab>
						<v-tab>
							همه سوالات 
							<v-icon>mdi-view-list</v-icon>
						</v-tab>
					</v-tabs> -->
					<v-btn-toggle
						mandatory
						borderless
						:color="$store.state.cPrimary"
					>
						<v-btn value="1">
							<v-icon>mdi-star</v-icon>
							<span>برگزیده‌ها</span>
						</v-btn>
						<v-btn value="2">
							<v-icon>mdi-comment-question</v-icon>
							<span>بدون پاسخ</span>
						</v-btn>
						<v-btn value="3">
							<v-icon>mdi-view-list</v-icon>
							<span>همه سوالات</span>
						</v-btn>
					</v-btn-toggle>
					<BaseNote v-if="faq.length == 0 && !notFound" type="loading" class="mt-0" />
					<BaseNote v-else-if="faq.length == 0 && notFound" type="notFound" class="mt-0" />
					<template v-else>
						<div class="q-card" v-for="item in faq" :key="item.id">
							<v-row>
								<v-col cols="12">
									<BaseQBreadcrumb :items="bcItems" />
								</v-col>
								<v-col cols="12">
									<p class="q-title">{{ item.questionAnswer.question }}</p>
								</v-col>
							</v-row>
							<v-row class="q-details">
								<v-col cols="8">
									<!-- <NuxtLink to="profile/3"> -->
										<p class="user">
											<v-icon class="text-main">mdi-account-circle</v-icon>
											پرسیده شده توسط {{ item.userName }}
										</p>
									<!-- </NuxtLink> -->
								</v-col>
								<v-col cols="2">
									{{ $moment(item.questionAnswer.askDate.substr(0, item.questionAnswer.askDate.indexOf("T")), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }}
								</v-col>
								<v-col cols="2" class="text-center">
									<v-icon>mdi-thumb-up-outline</v-icon>
									127
								</v-col>
							</v-row>
							<v-row>
								<v-col cols="12 my-2">
									<p v-if="item.questionAnswer.answer.length < 1" class="q-answer">
										بدون پاسخ
									</p>
									<p v-else-if="item.questionAnswer.answer.length >= 200 && !item.questionAnswer.answer.includes('href')" class="q-answer" v-html="item.questionAnswer.answer.substr(0, 200) + '...'">
									</p>
									<p v-else class="q-answer full" v-html="item.questionAnswer.answer"></p>
								</v-col>
								<!-- <v-col>
									<v-chip v-for="(tag, index) in item.source.hashTags" :key="index">
										{{ tag.alias }}
									</v-chip>
								</v-col> -->
								<v-col class="text-left">
									<NuxtLink :to="'faq/q/' + item.questionAnswer.id" class="show-more">
										مشاهده بیشتر
										<v-icon>mdi-chevron-double-left</v-icon>
									</NuxtLink>
								</v-col>
							</v-row>
						</div>
					</template>
        </v-col>
        <v-col cols="12" md="3">
					<NewsTitle title="پاسخ‌دهندگان برتر" :icons="['mdi-comment-multiple-outline']" class="mt-0" />
					<SideTopMembers />
					<NewsTitle title="پاسخ‌دهندگان برتر" :icons="['mdi-comment-multiple-outline']" class="mt-5" />
					<SwiperTopMembers />
					<NewsTitle title="پرسش‌های داغ" :icons="['mdi-comment-multiple-outline']" class="mt-5" />
					<SideQuestions />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>

  export default {
    data: () => ({  
      bcItems: [
        {
          text: 'پرسش و پاسخ',
          disabled: true,
          href: '#',
        },
      ],

			searchWord: "",

			selectedCategory: -1,
      categories: [
        { text: 'سهام عدالت', number: 146, icon: 'mdi-clock' },
        { text: 'اوراق بهادار', number: 41, icon: 'mdi-account' },
        { text: 'باشگاه مشتریان', number: 76, icon: 'mdi-solar-panel' },
        { text: 'همفکران', number: 57, icon: 'mdi-signal-cellular-3' },
        { text: 'بورس کالا و انرژی', number: 2, icon: 'mdi-cash-multiple' },
        { text: 'سبد و صندوق', number: 11, icon: 'mdi-store' },
        { text: 'آتی کالا', number: 86, icon: 'mdi-cash' },
      ],

			faq: [],
			notFound: false,
			DialogQuestion: false,

    }),
    created: function () {

      this.getFAQ();
      
    },
    methods: {
      getFAQ(input) {  
				
				this.$axios.$get('/api/services/app/QuestionAnswers/GetAll', {
					params: {
						Filter: input
					}
				})
				.then(response => {
					this.faq = response.result.items;
					if (this.faq.length == 0) {
						this.notFound = true;
					}
				})
        
      },
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';


.v-btn-toggle {
	width: 100%;
	display: flex;
	margin-bottom: 12px;

	.v-btn {
		border-radius: 0!important;
		flex: 1;
		padding: 28px 15px;

		.v-icon {
			color: inherit!important;
			margin-left: 7px;
		}

		&:first-child {
			border-radius: 0 8px 8px 0!important;
		}

		&:last-child {
			border-radius: 8px 0 0 8px!important;
		}
	}

}

.sticky {
	position: -webkit-sticky;
	position: sticky;
	top: 100px;
}

.v-list {
	background: #f8f8f8!important;
  padding: 15px 15px 7px 15px;

	@include res(sm) {
		margin-bottom: 80px!important;
	}

	.v-item-group {
		padding: 0;
		
		.v-list-item {
			margin-bottom: 8px;
      background: #fff;

			.v-list-item__action:first-child,
			.v-list-item__icon:first-child {
				margin-left: 15px!important;
			}

			.v-list-item__icon {
				margin: 14px 0;
			}

			.v-list-item__title {
				font-size: 14px!important;

				span {
					font-size: 12px;
					float: left;
					margin-top: 2px;
				}
			}
		}

		.v-list-item,
		.v-list-item:before,
		.v-list-item:after {
			border-radius: 8px !important;
		}
	}
}

.v-tabs {

	.v-tabs-bar {
		background: inherit!important;
	}

	.v-item-group {
		background: #fff!important;
	}

	.v-tab {
		letter-spacing: 0;
		border-radius: 8px!important;

		&:before {
			border-radius: 8px 8px 0 0;
		}

		@include res(xs) {
			font-size: 13px;
		}
	}
}

.q-card {
	box-shadow: 0 10px 30px 5px rgba(77, 77, 119, 0.1) !important;
	background: $cw;
	border-radius: 8px;
	margin-bottom: 15px;
	padding: 20px 32px 30px 32px;
	
	.q-title {
	  font-family: $f-b!important;
		line-height: 35px !important;
		font-size: 18px;
	}

	.q-answer {
		font-size: 15px;
		height: 90px;
		line-height: 30px!important;

		&.full {
			height: auto;
		}
	}
}

.v-chip {
	margin-left: 5px;
}

.v-chip.v-size--default {
	border-radius: 30px;
	font-size: 12px!important;
	height: 25px!important;
}

.show-more {
	font-size: 13px!important;
	background: $c2;
	color: $cw!important;
	padding: 6px 20px 6px 15px;
	border-radius: 6px;
	transition: 0.3s;

	&:hover {
		padding: 6px 20px 6px 11px;

		i {
			color: $cw!important;
			font-size: 20px!important;
			margin-right: 4px!important;
		}
	}

	i {
		color: $cw!important;
		font-size: 20px!important;
		transition: 0.3s!important;
	}

}

.q-details {
	font-size: 12px!important;
	color: rgba(0, 0, 0, 0.54);

	.v-icon {
		font-size: 16px!important;
	}
}

</style>
