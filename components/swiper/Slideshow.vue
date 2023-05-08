<template>
	<v-container fluid class="slideshow" :slides="slides">
		<v-container v-swiper="swiperOption" dir="rtl">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
					<div class="ss-content">
						<img class="ss-image" :src="slide.img">
						<h1 class="ss-title">{{ slide.title }}</h1>
						<h3 class="ss-description">{{ slide.description }}</h3>
						<v-btn depressed class="ss-button" :to="slide.link">مشاهده بیشتر</v-btn>
					</div>
				</div>
			</div>
			<div class="swiper-pagination" slot="pagination"></div>
		</v-container>
		<div class="dots-bg"></div>
		<div class="scroll"></div>
	</v-container>	
</template>

<script>
import { directive } from "vue-awesome-swiper";

export default {
  name: "Slideshow",
  directives: {
    swiper: directive,
  },
  props: ['slides'],
	data: () => ({
		swiperOption: {
			slidesPerView: 1,
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
		},
			
		defaultAnalysis: "",
	}),
	created: function () {

	}
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.slideshow {
	position: relative;
	background: $c1;
	background-image: linear-gradient(to bottom right, $c1 0%, darken($c1, 15%) 85%);
	position: relative;
	background-size: cover;
	background-position: center center;
	height: 70vh;

	@media screen and (max-height: 1100px){
		height: 80vh;
	}

	@media screen and (max-height: 1070px){
		height: 90vh;
	}

	@include res(md) {
		height: 95vh;
	}

	.dots-bg {
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		background-image: radial-gradient(circle, rgba(255,255,255,0.3), rgba(255,255,255,0.3) 1px, transparent 0px, transparent);
		background-size: 50px 50px;
		background-repeat: repeat;
	}

	&:before {
		content: '';
		position: absolute;
		bottom: 0%;
		right: 0%;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 0 0 200px 3000px;
		border-color: transparent transparent $cw transparent;

		@include res(lg) {
			border-width: 0 0 150px 3000px;
		}

		@include res(sm) {
			display: none;
		}
	}

	.ss-content {
		color: $cw;
		max-width: 1185px;
		padding: 150px 12px 230px 12px;

		@include res(sm) {
			text-align: center;
			padding: 100px 0px 0px 0px;
			height: 70vh;
		}

		.ss-title {
			font-family: $f-b;
			font-size: 54px;
			margin: 0;
			margin-bottom: 20px;
			min-height: 65px;

			@include res(xl) {
				font-size: 44px;
				min-height: 55px;
			}

			@include res(lg) {
				font-size: 34px;
				margin-bottom: 10px;
			}

			@include res(sm){
				margin-top: 20px;
				font-size: 28px;
				min-height: 35px;
			}

			@include res(xs){
				font-size: 22px;
			}
		}

		.ss-description {
			font-family: $f-l;
			display: block;
			font-size: 16px;
			max-width: 500px;
			line-height: 35px;
			margin: 0;

			@include res(sm) {
				margin: 0 auto;
				max-width: 70%;
			}

			@include res(xs) {
				max-width: 100%;
				font-size: 14px;
				line-height: 30px;
			}
		}

		.ss-button {
			margin-top: 35px;
			background: transparent!important;
			font-size: 16px;
			border: 2px solid $cw;
			border-radius: 8px!important;
			padding: 3px 30px!important;
			transition: 0.3s;

			&:hover {
				background: $cw!important;
				color: $c1!important;
				box-shadow: 0px 3px 3px 3px rgba(0, 0, 0, 0.1);
			}

			@include res(xs) {
				border: 1px solid $cw;
			}
		}

		.ss-image {
			position: absolute;
			top: 28%;
			left: 0;
			max-width: 580px;
			max-height: 400px;

			@include res(md) {
				max-width: 380px;
			}

			@include res(sm) {
				max-height: 200px;
				position: relative;
				top: auto;
				left: auto;
			}
		}
	}

	.scroll {
		position: absolute;
		bottom: 0%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 2px solid $c1;
		border-radius: 30px;
		width: 30px;
		height: 48px;

		@media screen and (max-height: 500px) {
			display: none;
		}

		@include res(sm) {
			border: 2px solid $cw;
			border-radius: 6px;
		}

		@include res(xs) {
			border: 1px solid $cw;
		}

		&:after {
			content: "";
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 2px;
			height: 10px;
			background: $c1;
			-webkit-animation: animate 2s ease-in-out infinite;
			animation: animate 2s ease-in-out infinite;

			@include res(md) {
				width: 6px;
				height: 6px;
				border-radius: 6px;
			}

			@include res(sm) {
				background: $cw;
			}
		}

		@keyframes animate {
			0% {
				top: 30%;
			}

			50% {
				top: 70%;
			}

			100% {
				top: 30%;
			}
		}
	}
}

.swiper-pagination {

	@media screen and (min-width: 1904px) and (max-height: 880px) {
		display: none;
	}

	@media screen and (max-height: 800px) {
		display: none;
	}
}

.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
	bottom: 50px;
}


</style>