<template>

  <v-expansion-panels :faq="faq" v-if="faq.length > 0">
    <v-expansion-panel v-for="(item, i) in faq" :key="i">
      <v-expansion-panel-header class="pa-7">
				<p>
        	{{ i+1 }} - {{ item.questionAnswer.question }}
				</p>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="px-3">
        <p v-html="item.questionAnswer.answer" />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
	<BaseNote v-else type="loading" class="mt-0" />

</template>

<script>
  export default {
    props: ['faq'],
    data: () => ({

    }),
    created: function () {
      var parsedobj = JSON.parse(JSON.stringify(this.faq))
      // console.log(parsedobj,"hahahahah")
      // console.log( this.faq.result.items.map(ele=>{
      //   console.log(ele)
      // }),"props*-------777----------")
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.v-expansion-panels {
	border: 1px solid #ddd;
}

.v-expansion-panel {
	line-height: 33px;
	background: transparent!important;
}

.v-expansion-panel::before {
	box-shadow: 0 0 0 0 !important;
}

.v-expansion-panel-header {
	font-family: $f-m;
	line-height: 30px!important;

	p {
		padding-left: 45px;

		@include res(sm) {
			padding-left: 15px;
		}
	}

	&:hover {
		background: #f3f3f3;
	}

	@include res(md) {
		padding: 15px 20px 15px 15px!important;
	}

	@include res(sm) {
		padding: 10px 20px 10px 15px!important;
		font-size: 14px;
	}
}

.v-expansion-panel-content {
	font-size: 15px;
	border: none!important;

	@include res(sm) {
		padding: 0px!important;
		font-size: 14px;
		line-height: 30px;
	}
}

.v-expansion-panel--active > .v-expansion-panel-header {
	color: $c1;

	&:hover {
		background: transparent;
	}
}

.v-expansion-panels > :first-child {
	border-top-left-radius: 8px!important;
	border-top-right-radius: 8px!important;
	border: none!important;
}

.v-expansion-panels > :last-child {
	border-bottom-left-radius: 8px!important;
	border-bottom-right-radius: 8px!important;
}

.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile) > .v-expansion-panel--next-active {
	border-bottom-left-radius: 8px!important;
	border-bottom-right-radius: 8px!important;
}

.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile) > .v-expansion-panel--active + .v-expansion-panel {
	border-top-left-radius: 8px!important;
	border-top-right-radius: 8px!important;
}

.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile) > .v-expansion-panel--active {
	border-radius: 8px!important;
}

</style>
