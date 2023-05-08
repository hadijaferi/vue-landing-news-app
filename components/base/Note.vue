<template>

  <v-card :type="type" :note="note" class="base-note">
		<template v-if="type == 'loading'">
			<v-progress-circular
				:size="30"
				:width="2"
				:color="$store.state.cPrimary"
				indeterminate
			></v-progress-circular>
		</template>
		<div v-else v-for="(alert, index) in alerts" :key="index">
			<template v-if="type == alert.type">
				<v-icon class="note-icon">{{ alert.icon }}</v-icon>
				<p class="note-text">{{ alert.text }}</p>
			</template>
		</div>
  </v-card>

</template>

<script>
  export default {
    props: ['type', 'note'],
    data: () => ({  
      alerts: [
        {
          type: 'custom',
          icon: 'mdi-file-search-outline',
          text: 'نتیجه‌ای یافت نشد!',
        },
        {
					type: 'notFound',
          icon: 'mdi-file-search-outline',
          text: 'متاسفانه نتیجه‌ای یافت نشد!',
        },
        {
          type: 'notAuthorized',
					icon: 'mdi-alert-circle',
          text: 'برای مشاهده این قسمت باید وارد سایت شوید.',
        },
        {
					type: 'response',
          icon: 'mdi-connection',
          text: 'مشکلی در دریافت اطلاعات به وجود آمده است.',
        },
        {
          type: 'construction',
          icon: 'mdi-account-hard-hat',
          text: 'این قسمت در حال تکمیل می‌باشد.',
        },
      ],
    }),
    created: function () {
			if (this.note) {
				this.alerts[0].text = this.note;
			} 
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.base-note {
  z-index: 0 !important;;
	position: relative;
	box-shadow: 0 0 0 0!important;
  // border: 1px solid #e0e3eb!important; 
	border-radius: 8px!important;
	padding: 0px 15px!important;
	height: 200px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.note-icon {
		font-size: 180px;
		margin-bottom: 20px;
		color: #f1f1f1;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
  .note-text {
    z-index: -1000;
  }

	p {
		position: relative;
		font-family: $f;
		color: #555;
		font-size: 16px;
		z-index: 99!important;
	}
}

</style>
