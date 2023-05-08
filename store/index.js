export const state = () => ({
	cPrimary: '#00bbb9',
	cSecondary: '#004a8a',
	loginUrl: 'https://admin.hamfekran.com/account/login?ss=true&returnUrl=',
	baseUrl: process.env.baseUrl,
	menu: [
		{
			name: "خـانـه",
			route: "/",
			icon: "mdi-home-outline",
		},
		{
			name: "اخبـار",
			route: "/news",
			icon: "mdi-newspaper-variant-multiple",
		},
		{
			name: "تحلیل تکنیکال",
			route: "/analysis",
			icon: "mdi-chart-box-outline",
		},
		{
			name: "پرسش و پاسخ",
			route: "/faq",
			icon: "mdi-message-question-outline",
		},
		{
			name: "تحلیل بنیادی",
			route: "/consulting",
			icon: "mdi-chart-bell-curve",
		},
		{
			name: "سبـدها",
			route: "/baskets",
			icon: "mdi-comment-multiple-outline",
		},
	],
})

// export const getters = () => ({
// 	getState: state => {
// 		return state
// 	}
// })

// export const actions = {
//     async actionA ({ commit }, payload) {
//         console.log(payload)
//         await this.$axios.$get('/api/services/app/AnalysisChart/GetAll')
//         .then(response => {
//             console.log("A")
//             return response
//         })
//         .catch(error => {
//             return error
//         })
//     }
// }

