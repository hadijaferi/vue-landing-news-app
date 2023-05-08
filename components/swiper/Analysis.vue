<template>
  <div v-swiper="swiperOption" dir="rtl" v-if="defaultAnalysis.length > 0">
    <div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(analyseItem, index) in defaultAnalysis" :key="index">
				<ACard :info="analyseItem" />
			</div>
    </div>
		<div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
	<BaseNote v-else type="loading" class="mt-0" />
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
			spaceBetween: 25,
			loop: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			},
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				1024: {
					slidesPerView: 3
				},
				959: {
					slidesPerView: 2
				},
				599: {
					slidesPerView: 1
				}
			},
		},

		defaultAnalysis: "",
	}),
	created: function () {
		// Get Default Technical Analysis
		this.$axios.$get('/api/Public/GetDefaultAnalysisCharts')
		.then(response => {
			this.defaultAnalysis = response.result.items.reverse();
		})
	}
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

.swiper-container {
	padding-bottom: 60px;
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
