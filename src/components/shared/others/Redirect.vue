<template>
    <div class="parent">
        <router-link :to="{ name: Link.Name, params: { getParams } }">
            <img :src="getImageFullPath" :alt="Image.Alt" :title="Image.Title">
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Redirect',
        props:{
            Link: {
                type: Object,
                required: true
            },
            Image: {
                type: Object,
                required: true,
            }
        },
        computed: {
            getParams(){
                return this.Link.params;
            },
            getImageFullPath(){
                const folder = this.Image.Folder;
                const imgName = this.Image.Name;
                return require(`@/assets/${folder}/${imgName}`);
            }
        },
    }
</script>

<style scoped>
.parent {
  padding-left: 5px;
}

.parent a {
  display: inline-block;
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 100px;
}

.parent img {
  width: 100%;
}
</style>