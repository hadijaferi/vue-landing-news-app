<template>
	<div :text="text" v-if="text" class="title-site">
		<h2 class="title-main">
			{{ text.title }}
		</h2>
		<p class="title-subtitle text-muted mx-auto mt-3">
			{{ text.description }}
		</p>
	</div>
</template>

<script>
  export default {
    props: ['text'],
    created: function () {
			
		}
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.title-site {
	text-align: center;

	&.title-white {
		.title-main {
			background-image: -webkit-linear-gradient(left, $cw 0%, #ddd 100%);
			background-image: -moz-linear-gradient(left, $cw 0%, #ddd 100%);
			background-image: linear-gradient(to right, $cw 40%, #ddd 60%);
		}

		.title-subtitle {
			color: #ddd!important;
		}
	}

	.title-main {
		position: relative;
		font-family: $f-bl;
		font-size: 35px!important;
		background-image: -webkit-linear-gradient(left, darken($c1, 5%) 40%, lighten($c1, 5%) 60%);
		background-image: -moz-linear-gradient(left, darken($c1, 5%) 40%, lighten($c1, 5%) 60%);
		background-image: linear-gradient(to right, darken($c1, 5%) 40%, lighten($c1, 5%) 60%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin-bottom: 25px;

		@include res(md) {
			font-size: 28px!important;
		}

		@include res(sm) {
			font-size: 22px!important;
			margin-bottom: 20px;
		}

		&:after {
			content: '';
			position: absolute;
			top: 130%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 40px;
			height: 1px;
			background: #ddd;
		}
	}

	.title-subtitle {
		max-width: 500px;
		color: #999;
		line-height: 30px;
		font-size: 16px!important;

		@include res(sm) {
			font-size: 14px!important;
			line-height: 25px;
		}
	}
}

</style>
