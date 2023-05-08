<template>

  <v-row class="social-list">
    <v-col>
      <ul>
        <li v-for="(item, index) in socialItems" :key="index">
          <a :href="item.link">
            <v-icon
              :color="item.color"
              outlined style="border: 1px solid"
            >
              mdi-{{ item.icon }}
            </v-icon>
            <span class="num">{{ item.num }}</span>
            <span class="txt">{{ item.text }}</span>
          </a>
        </li>
      </ul>
    </v-col>
  </v-row>

</template>

<script>
  export default {
    data: () => ({
      socialItems: [
        {
          icon: "facebook",
          num: "237",
          text: "Likes",
          link: "#",
          color: "#3b5999"
        },
        {
          icon: "instagram",
          num: "130K",
          text: "Followers",
          link: "#",
          color: "#e4405f"
        },
        {
          icon: "linkedin",
          num: "545",
          text: "Followers",
          link: "#",
          color: "#0077B5"
        },
        {
          icon: "twitter",
          num: "1754",
          text: "Followers",
          link: "#",
          color: "#55acee"
        },
        {
          icon: "rss",
          num: "237",
          text: "Subscribers",
          link: "#",
          color: "#ff6600"
        },
        {
          icon: "youtube",
          num: "930",
          text: "Subscribers",
          link: "#",
          color: "#cd201f"
        }
      ],
    }),
  }
</script>

<style lang="scss" scoped>

</style>
