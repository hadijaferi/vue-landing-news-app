export const state = () => ({
    userId: null,
    afterLogin: null,
    accessToken: null,
    refreshToken: null,
    expireInSeconds: null,
    refreshTokenExpireInSeconds: null,
    encryptedAccessToken: null,
})

export const mutations = {
    userId(state, input) {
        state.userId = input;
    },
    afterLogin(state, input) {
        state.afterLogin = input;
    },
    accessToken(state, input) {
        state.accessToken = input;
    },
    refreshToken(state, input) {
        state.refreshToken = input;
        console.log(state)
    },
    expireInSeconds(state, input) {
        state.expireInSeconds = input;
    },
    encryptedAccessToken(state, input) {
        state.encryptedAccessToken = input;
    },
    refreshTokenExpireInSeconds(state, input) {
        state.refreshTokenExpireInSeconds = input;
    },
}
