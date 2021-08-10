<template>
  <div>
    <h3>Publicidad</h3>
    <div class="ads">
      <!-- <a :href="publicity.linkPath" v-for="(publicity,index) of publicityContent" :key="index">
            <img :src="`@/assets/img/ad${1}.jpg`" :key="index" :alt="publicity.alt" :width="publicity.width">
        </a> -->
      <a href="https://google.com" target="_blank"
        ><img src="@/assets/img/ad1.jpg" alt="" width="300"
      /></a>
      <a href="https://youtube.com" target="_blank"
        ><img src="@/assets/img/ad2.jpg" alt="" width="300"
      /></a>
      <a href="https://yahoo.com" target="_blank"
        ><img src="@/assets/img/ad3.jpg" alt="" width="300"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Publicity",
  data() {
    return {
      publicityContent: [
        {
          linkPath: "#",
          imgPath: "@/assets/img/ad1.jpg",
          target: "_blank",
          alt: "Publicity Image 1",
          width: "300",
        },
        {
          linkPath: "#",
          imgPath: "@/assets/img/ad2.jpg",
          target: "_blank",
          alt: "Publicity Image 2",
          width: "300",
        },
        {
          linkPath: "#",
          imgPath: "@/assets/img/ad3.jpg",
          target: "_blank",
          alt: "Publicity Image 3",
          width: "300",
        },
      ],
    };
  },
};
</script>

<style scoped>
h3 {
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  text-align: center;
}

/* .ads{
    margin-bottom: 20px;
} */

.ads a {
  margin-bottom: 15px;
  display: inline-block;
}

.ads a img {
  width: 100%;
}
</style>