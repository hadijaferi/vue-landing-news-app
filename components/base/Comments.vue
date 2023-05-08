<template>

  <v-row>
    <v-col class="comments">
      <v-row v-if="comment.status == 1" class="my-5">
        <v-col cols="12" md="8">
          <v-alert
            color="green"
            text
            type="success"
            class="py-4"
          >
            نظر شما با موفقیت ارسال شد.
          </v-alert>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn class="py-7" width="100%" large depressed @click="clear()">
            ارسال نظر دیگر
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-else-if="comment.status == 0" class="my-5">
        <v-col>
          <v-alert
            color="orange"
            text
            type="info"
            class="py-4"
          >
            برای ارسال نظر باید ابتدا وارد سایت شوید.
          </v-alert>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12" class="py-0">
          <v-textarea
            v-model="comment.message"
            label="نظر خود را بنویسید..."
            :color="$store.state.cPrimary"
            class="mt-5"
            rows="3"
            required
            outlined
          ></v-textarea>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-btn
          large
          depressed
          class="bg-main white--text py-6 px-7 mb-10 float-left"
          :loading="comment.loading"
          @click="sendComment()">
            <v-icon class="head-icon">mdi-comment-plus</v-icon>
            ارسال نظر
          </v-btn>
        </v-col>
      </v-row>
      <div v-if="comments.items.length > 0" class="mt-3 mb-15">
        <div v-for="(item, index) in comments.items" :key="index">
          <div class="d-flex align-start">
            <NuxtLink :to="'/profile/' + item.comment.userId">
              <v-icon x-large class="pl-3 pt-1 text-second">mdi-account-circle</v-icon>
            </NuxtLink>
            <div class="flex">
              <v-row>
                <v-col>
                  <NuxtLink v-if="item.senderUserName" :to="'/profile/' + item.comment.userId" class="grey--text">{{ item.senderUserName }}</NuxtLink>
                  <span v-else class="grey--text">ناشناس</span>
                </v-col>
                <v-col class="text-left">
                  <span class="grey--text text--lighten-1">{{ item.elapsedTime }}</span>
                </v-col>
              </v-row>
              <p class="mt-2">{{ item.comment.message }}</p>
            </div>
          </div>
          <v-divider v-if="index+1 < comments.items.length" class="my-3 mr-13"></v-divider>
        </div>
        <v-row v-if="comments.total > comments.count+10">
          <v-btn
            depressed
            class="py-6 px-10 bg-main white--text mt-15 mx-auto"
            :loading="comments.loading"
            @click="comments.count = comments.count+10, getComments()"
          >
            مشاهده نظرات بیشتر...
          </v-btn>
        </v-row>
      </div>
        <v-alert v-else
          color="grey darken-1"
          text
          icon="mdi-comment-remove-outline"
        >
          هنوز نظری ثبت نشده است.
        </v-alert>
      <div >
      </div>
    </v-col>
  </v-row>

</template>

<script>
  export default {
    props: ['objectId'],
    data: () => ({
      comment: {
        message: "",
        loading: false,
        status: null,
      },
      comments: {
        items: [],
        total: "",
        status: false,
        loading: false,
        count: 0,
      }
    }),
    created: function () {
      this.getComments();
      if (!this.$store.state.localStorage.userId) {
        this.comment.status = 0;
      }
    },
    methods: {
      getComments() {
        this.comments.loading = true;
        this.$axios.$get('/api/Public/GetComments', {
          params: {
            ObjectIdFilter: this.$route.params.id,
            IsPublishedFilter: 1,
            IsArchiveFilter: 0,
            IsQuestionFilter: false,
            SkipCount: this.comments.count
          }
        })
        .then(response => {
          this.comments.items = this.comments.items.concat(response.result.items);
          this.comments.total = response.result.totalCount;
          this.comments.loading = false;
          this.$emit('sendtotalCount', response.result.totalCount);
        })
      },
      sendComment() {
        this.comment.loading = true;
        this.$axios.$post('/api/Public/CommentSend', {
          "message": this.comment.message,
          "categoryType": 1,
          "isQuestion": false,
          "readState": 1,
          "isPublished": true,
          "isArchive": false,
          "userId": this.$store.state.localStorage.userId,
          "organizationUnitId": 1,
          "objectId": this.objectId,
        })
        .then(response => {
          this.comment.status = 1;
        })
      },
      clear() {
        this.comment.message = "";
        this.comment.status = null;
        this.comment.loading = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.comments {
  span {
    font-size: 14px;
  }

  p {
    font-size: 14px;
    line-height: 30px;
  }
}

.payment-icon {
  font-size: 85px!important;
  font-family: $f-b!important;

  @include res(md) {
    font-size: 38px;
  }
}

.payment-title {
  font-size: 26px;
  font-family: $f-b;
  margin-top: 20px;
  margin-bottom: 20px;

  @include res(md) {
    font-size: 18px;
  }
}

.button {
  height: auto!important;
  padding: 15px 25px!important;
}

</style>
