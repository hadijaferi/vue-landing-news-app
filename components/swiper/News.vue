<template>
	<div class="news-slider">
		<div v-swiper="swiperOption" dir="rtl" v-if="news.length > 0">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="slide in slides" :key="slide">
						<div class="slide-section">
							<NewsCard :info="news[0+slide]" :type="1" size="371_200" class="compact card" />
							<NewsCard :info="news[1+slide]" :type="1" size="371_200" class="compact card mt-5" />
						</div>
						<div class="slide-section">
							<NewsCard :info="news[2+slide]" :type="1" size="371_540" class="card card-lg" />
						</div>
						<div class="slide-section">
							<NewsCard :info="news[3+slide]" :type="1" size="371_200" class="compact card" />
							<NewsCard :info="news[4+slide]" :type="1" size="371_200" class="compact card mt-5" />
						</div>
				</div>
			</div>
			<div class="swiper-pagination" slot="pagination"></div>
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
		</div>
		<BaseNote v-else type="loading" class="mt-0" />
	</div>
</template>

<script>
import { directive } from "vue-awesome-swiper";

export default {
  name: "Slider",
  directives: {
    swiper: directive,
  },
	data: () => ({
		swiperOption: {
			slidesPerView: 1,
			spaceBetween: 25,
			// loop: true,	
			// autoplay: {
			// 	delay: 4000,
			// 	disableOnInteraction: false
			// },
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		},
			
		news: "",
		slides: [0,5],
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
	}
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.news-slider {

	.swiper-container {
		padding-bottom: 60px;
	}

	.swiper-slide {
		display: flex;
		justify-content: space-between;

		@include res(sm) {
			flex-direction: column;
		}

		.slide-section {
			width: 33.3333%;

			@include res(sm) {
				width: 100%;
			}
		}
	}

	.news-more {
		
		@include res(sm) {
			display: none!important; 
		}
	}
}

.swiper-button-next,
.swiper-button-prev {
	top: auto!important;
	bottom: 0!important;

	&:after {
		font-size: 18px!important;
	}
}

</style>