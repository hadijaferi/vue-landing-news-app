<template>
  <v-main>
    <v-container>
      <BaseBreadcrumb :items="bcItems" />
      <v-row>
        <v-col cols="12" md="3">
          <v-sheet rounded="lg" class="shadow pa-5 mb-5">

          </v-sheet>
        </v-col>
        <v-col cols="12" md="9">
          <v-sheet v-if="single" rounded="lg" class="q-box shadow pt-8 pb-10 px-10 mb-5">
            <h2 class="question">
              {{ single.questionAnswer.question }}
            </h2> 
            <p class="answer" v-html="single.questionAnswer.answer">
            </p>
            <v-row class="mt-10 text-left">
              <v-col>
                <a :href="'https://www.facebook.com/sharer.php?u=' + currentUrl" target="_blank"><v-icon>mdi-facebook</v-icon></a>
                <a :href="'https://twitter.com/share?text=' + single.questionAnswer.question + '&url=' + currentUrl" target="_blank"><v-icon>mdi-twitter</v-icon></a>
                <a :href="'https://linkedin.com/shareArticle?mini=true&title=' + single.questionAnswer.question + '&url=' + currentUrl" target="_blank"><v-icon>mdi-linkedin</v-icon></a>
                <a :href="'https://telegram.me/share/url?text=' + single.questionAnswer.question + '&url=' + currentUrl" target="_blank"><v-icon>mdi-telegram</v-icon></a>
                <a :href="'https://api.whatsapp.com/send?&text=' + currentUrl" target="_blank"><v-icon>mdi-whatsapp</v-icon></a>
              </v-col>
            </v-row>
          </v-sheet>
					<v-row class="mt-10 mb-2">
						<v-col cols="12" class="text-center">
							<h3 class="main-title">
                سوالات مشابه
							</h3>
						</v-col>
					</v-row>
					<v-expansion-panels>
						<v-expansion-panel v-for="(item, i) in faq" :key="i">
							<v-expansion-panel-header class="py-5 px-8">
								<p>
									{{ i+1 }} - {{ item.questionAnswer.question }}
								</p>
							</v-expansion-panel-header>
							<v-expansion-panel-content class="px-2">
								<v-row class="q-details">
									<v-col cols="8">
      							<BaseQBreadcrumb :items="bcItems" />
									</v-col>
									<v-col cols="2" class="text-left">
										۲۰ روز پیش
									</v-col>
									<v-col cols="2" class="text-center">
										127
										<v-icon>mdi-thumb-up-outline</v-icon>
									</v-col>
								</v-row>
								{{  }}
                <p class="mt-3" v-html="item.questionAnswer.answer"></p>
								<v-row class="mt-5 mb-0">
									<!-- <v-col>
										<v-chip v-for="(tag, index) in item.questionAnswer.hashTags" :key="index">
											{{ tag.alias }}
										</v-chip>
									</v-col> -->
								</v-row>
							</v-expansion-panel-content>
						</v-expansion-panel>
					</v-expansion-panels>
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
          text: 'پرسش',
          disabled: false,
          href: '/',
        },
        {
          text: '',
          disabled: false,
          href: '',
        },
      ],

			faq: "",
      single: "",
      currentUrl: ""
    }),
    created: function () {

      this.currentUrl = process.env.baseUrl + this.$route.path;
			
			this.$axios.$get('/api/services/app/QuestionAnswers/GetAll')
			.then(response => {
				this.faq = response.result.items;
			})

      this.$axios.$get('/api/services/app/QuestionAnswers/GetQuestionAnswerForView', {
        params: {
          id: this.$route.params.id
        }
      })
			.then(response => {
				this.single = response.result;
			})

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.q-box {
	box-shadow: 0 10px 30px 5px rgba(77, 77, 119, 0.1) !important;
  .question {
    color: $c1;
    font-family: $f-b;
    line-height: 45px;
    margin-bottom: 20px;
  }

  .answer {
    line-height: 35px;
  }
}

.q-details {
	font-size: 12px!important;
	color: rgba(0, 0, 0, 0.54);

	.v-icon {
		font-size: 16px!important;
	}
}

.v-expansion-panel {
	line-height: 33px;
	margin-top: 5px;
	border-radius: 8px!important;
}

.v-expansion-panel::before {
	box-shadow: 0 10px 30px 5px rgba(77, 77, 119, 0.1) !important;
}

.v-expansion-panel::after {
  display: none;
}

.v-expansion-panel-header {
	line-height: 30px!important;
	border-radius: 8px!important;

	p {
	  font-family: $f-m!important;
		padding-left: 45px;

		@include res(768px) {
			padding-left: 15px;
		}
	}

	&:hover {
		background: #fafafa;
	}

	@include res(768px) {
		padding: 10px 20px 10px 15px!important;
		font-size: 14px;
	}
}

.v-expansion-panel-content {
	font-size: 15px;

	@include res(768px) {
		padding: 0px!important;
		font-size: 14px;
		line-height: 30px;
	}
}

.v-expansion-panel--active > .v-expansion-panel-header {
	color: $c1;

	&:hover {
		background: $cw;
	}
}


</style>
