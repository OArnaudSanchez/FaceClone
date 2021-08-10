<template>
  <div class="row justify-content-center">
    <div class="col-auto foto">

      <!-- Esto se puede reemplazar por el componente de redireccion -->
      <router-link :to="{name: 'Profile'}">
        <img src="@/assets/img/persona2.jpg" alt="" />
      </router-link>

    </div>
    <div class="col">
      <form action="#">
        <textarea
          name="mensaje"
          id="mensaje"
          :placeholder="`¿Qué estás pensando, ${userName}?`"
        ></textarea>
        <div class="contenedor-botones d-flex justify-content-between">
          <div class="media">
            <file-upload></file-upload>
            <a href=""><i class="fas fa-image"></i></a>
            <a href=""><i class="fas fa-play"></i></a>
            <a href=""><i class="fas fa-music"></i></a>
          </div>
          <div>
            <button>Publicar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import FileUpload from '@/components/shared/others/FileUpload.vue';
export default {
  name: "NewPost",
  components: {
    FileUpload
  },
  data(){
    return{
      userName: 'ChecheUser'
    }
  }
};
</script>

<style  scoped>
.foto {
  padding-left: 15px;
}

.foto a {
  width: 60px;
  height: 60px;
  display: inline-block;
  overflow: hidden;
  border-radius: 100px;
  margin-top: 20px;
}

.foto img {
  width: 100%;
}

form textarea {
  width: 100%;
  max-width: 100%;
  min-height: 100px;
  max-height: 300px;
  border: none;
  padding: 15px;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  color: #565656;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.35);
}

form .contenedor-botones {
  padding: 20px 0;
  border-bottom: 1px solid #c7c8ca;
}

form .contenedor-botones a {
  color: #8d8d8d;
  font-size: 20px;
  margin-right: 10px;
}

form .contenedor-botones a:hover {
  color: #3d3c3c;
}

form button {
  border: 1px solid #00609c;
  padding-top: 5px 30px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  background: linear-gradient(to bottom, #1a87cd 0%, #1176b6 100%);
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
}

form button:hover {
  background: linear-gradient(to bottom, #1176b6 0%, #1a87cd 100%);
}
</style>