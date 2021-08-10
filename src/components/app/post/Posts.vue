<template>
  <div>
    <div class="publicacion">
      <div class="row">
        <div class="col-auto foto">
          <!-- Ya esto se convirtio en un componente -->
          <redirect :Link="{ Name: 'Profile', Params: {} }" 
          :Image="{ Folder: 'img', Name: 'persona5.jpg', Alt: 'Persona', Title: 'Perfil' }"></redirect>
          <!-- <router-link :to="{name: 'Profile'}">
            <img src="@/assets/img/persona5.jpg" alt="Persona" title="Perfil"/>
          </router-link> -->
        </div>
        <div class="col">

          <!-- Contenido de lo posts -->
          <div class="post">
            <router-link :to="{name: 'Profile'}" class="Nombre">
              Cheche Lorem Ipsum1
            </router-link>
            <!-- Publicacion de tipo texto, es decir que no tiene imagenes ni videos solo texto -->
            <p class="texto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              aspernatur. Illum magni dolorem quod asperiores animi. Doloribus
              dolorem ratione reiciendis porro magni, Illum magni dolorem quod
              asperiores animi. Doloribus dolorem ratione reiciendis porro
              magni,
            </p>

            <div
              class="
                caja-botones
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <button title="Me Gusta"><i class="fas fa-thumbs-up"></i></button>
              <!-- Cantidad de likes -->
              <p>15 <i class="fas fa-thumbs-up"></i></p>
            </div>
          </div>

        </div>
      </div>

      <!-- Comentarios relacionados con la publicacion -->
       <div class="row">
        <div class="col-10 offset-2">
          <div class="comentarios">
            <div class="row no-gutters comentario">
              <div class="col-auto foto">
                <router-link :to="{name: 'Profile'}">
                  <img src="@/assets/img/persona2.jpg" alt="Persona" title="Perfil"/>
                </router-link>
              </div>
              <div class="col">
                <form action="">
                  <textarea name="" id="" placeholder="Comentario"></textarea>
                </form>
              </div>
            </div>

            <div class="row no-gutters comentario">
              <div class="col-auto foto">
                <router-link :to="{name: 'Profile'}">
                  <img src="@/assets/img/persona3.jpg" alt="Persona" title="Perfil"/>
                </router-link>
              </div>
              <div class="col">
                <!-- Respuesta del comentario -->
                <p class="respuesta-comentario">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  accusantium?
                </p>
                <a href="" class="me-gusta accion-comentario">Me Gusta</a>
                <a href="" class="responder accion-comentario">Responder</a>
              </div>
            </div>

            <div class="row no-gutters comentario">
              <div class="col-auto foto">
                <router-link :to="{name: 'Profile'}">
                  <img src="@/assets/img/persona4.jpg" alt="Persona" title="Perfil"/>
                </router-link>
              </div>
              <div class="col">
                <!-- Respuesta del comentario -->
                <p class="respuesta-comentario">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  accusantium?
                </p>

                <a href="" class="me-gusta accion-comentario">Me Gusta</a>
                <a href="" class="responder accion-comentario">Responder</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="publicacion">
      <div class="row">
        <div class="col-auto foto">
          <router-link :to="{name: 'Profile'}">
            <img src="@/assets/img/persona5.jpg" alt="Persona" title="Perfil"/>
          </router-link>
        </div>
        <div class="col">
          <!-- Contenido de lo posts -->
          <div class="post">
            <router-link :to="{name: 'Profile'}" class="Nombre">
              Cheche Lorem Ipsum2
            </router-link>
            <!-- Publicacion de imagenen -->
            <div class="imagen">
              <img src="@/assets/img/paisaje1.jpg" alt="" />
            </div>
            <div
              class="
                caja-botones
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <button title="Me Gusta"><i class="fas fa-thumbs-up"></i></button>
              <!-- Cantidad de likes -->
              <p>15 <i class="fas fa-thumbs-up"></i></p>
            </div>
          </div>

        </div>
      </div>

      <!-- Comentarios relacionados con la publicacion -->
      <div class="row">
        <div class="col-10 offset-2">
          <div class="comentarios">
            <div class="row no-gutters comentario">
              <div class="col-auto foto">
                <router-link :to="{name: 'Profile'}">
                  <img src="@/assets/img/persona2.jpg" alt="Persona" title="Perfil"/>
                </router-link>
              </div>
              <div class="col">
                <form action="">
                  <textarea name="" id="" placeholder="Comentario"></textarea>
                </form>
              </div>
            </div>

            <div class="row no-gutters comentario">
              <div class="col-auto foto">
                <router-link :to="{name: 'Profile'}">
                  <img src="@/assets/img/persona3.jpg" alt="Persona" title="Perfil"/>
                </router-link>
              </div>
              <div class="col">
                <!-- Respuesta del comentario -->
                <p class="respuesta-comentario">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  accusantium?
                </p>
                <a href="" class="me-gusta accion-comentario">Me Gusta</a>
                <a href="" class="responder accion-comentario">Responder</a>
              </div>
            </div>

            <div class="row no-gutters comentario">
              <div class="col-auto foto">
                <router-link :to="{name: 'Profile'}">
                  <img src="@/assets/img/persona4.jpg" alt="Persona" title="Perfil"/>
                </router-link>
              </div>
              <div class="col">
                <!-- Respuesta del comentario -->
                <p class="respuesta-comentario">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  accusantium?
                </p>

                <a href="" class="me-gusta accion-comentario">Me Gusta</a>
                <a href="" class="responder accion-comentario">Responder</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="publicacion">
      <div class="row">
        <div class="col-auto foto">
          <router-link :to="{name: 'Profile'}">
            <img src="@/assets/img/persona5.jpg" alt="Persona" title="Perfil"/>
          </router-link>
        </div>
        <div class="col">
          <!-- Contenido de lo posts -->
          <div class="post">
            <router-link :to="{name: 'Profile'}" class="Nombre">
              Cheche Lorem Ipsum3
            </router-link>
            <!-- Publicacion de tipo texto, es decir que no tiene imagenes ni videos solo texto -->
            <p class="texto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              aspernatur. Illum magni dolorem quod asperiores animi. Doloribus
              dolorem ratione reiciendis porro magni, Illum magni dolorem quod
              asperiores animi. Doloribus dolorem ratione reiciendis porro
              magni,
            </p>

            <div
              class="
                caja-botones
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <button title="Me Gusta"><i class="fas fa-thumbs-up"></i></button>
              <!-- Cantidad de likes -->
              <p>15 <i class="fas fa-thumbs-up"></i></p>
            </div>
          </div>

        </div>
      </div>

      <!-- Comentarios relacionados con la publicacion -->
      <div class="row">
        <div class="col-10 offset-2">
          <div class="comentarios">
            <div class="row no-gutters comentario">
              <div class="col-auto foto">
                <router-link :to="{name: 'Profile'}">
                  <img src="@/assets/img/persona2.jpg" alt="Persona" title="Perfil"/>
                </router-link>
              </div>
              <div class="col">
                <form action="">
                  <textarea name="" id="" placeholder="Comentario"></textarea>
                </form>
              </div>
            </div>

            <div class="row no-gutters comentario">
              <div class="col-auto foto">
                <router-link :to="{name: 'Profile'}">
                  <img src="@/assets/img/persona3.jpg" alt="Persona" title="Perfil"/>
                </router-link>
              </div>
              <div class="col">
                <!-- Respuesta del comentario -->
                <p class="respuesta-comentario">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  accusantium?
                </p>
                <a href="" class="me-gusta accion-comentario">Me Gusta</a>
                <a href="" class="responder accion-comentario">Responder</a>
              </div>
            </div>

            <div class="row no-gutters comentario">
              <div class="col-auto foto">
                <router-link :to="{name: 'Profile'}">
                  <img src="@/assets/img/persona4.jpg" alt="Persona" title="Perfil"/>
                </router-link>
              </div>
              <div class="col">
                <!-- Respuesta del comentario -->
                <p class="respuesta-comentario">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  accusantium?
                </p>

                <a href="" class="me-gusta accion-comentario">Me Gusta</a>
                <a href="" class="responder accion-comentario">Responder</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="publicacion">
      <div class="row">
        <div class="col-auto foto">
          <router-link :to="{name: 'Profile'}">
            <img src="@/assets/img/persona5.jpg" alt="Persona" title="Perfil"/>
          </router-link>
        </div>
        <div class="col">
          <!-- Contenido de lo posts -->
          <div class="post">
            <router-link :to="{name: 'Profile'}" class="Nombre">
              Cheche Lorem Ipsum4
            </router-link>
            <!-- Publicacion de tipo video-->
            <div class="video">
              <iframe
                width="100%"
                height="322px"
                src="https://www.youtube.com/embed/ULvIoY3nIag"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div
              class="
                caja-botones
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <button title="Me Gusta"><i class="fas fa-thumbs-up"></i></button>
              <!-- Cantidad de likes -->
              <p>15 <i class="fas fa-thumbs-up"></i></p>
            </div>
          </div> 
          
        </div>
      </div>

      <!-- Comentarios relacionados con la publicacion -->
      <div class="row">
        <div class="col-10 offset-2">
          <div class="comentarios">
            <div class="row no-gutters comentario">
              <div class="col-auto foto">
                <router-link :to="{name: 'Profile'}">
                  <img src="@/assets/img/persona2.jpg" alt="Persona" title="Perfil"/>
                </router-link>
              </div>
              <div class="col">
                <form action="">
                  <textarea name="" id="" placeholder="Comentario"></textarea>
                </form>
              </div>
            </div>

            <div class="row no-gutters comentario">
              <div class="col-auto foto">
                <router-link :to="{name: 'Profile'}">
                  <img src="@/assets/img/persona3.jpg" alt="Persona" title="Perfil"/>
                </router-link>
              </div>
              <div class="col">
                <!-- Respuesta del comentario -->
                <p class="respuesta-comentario">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  accusantium?
                </p>
                <a href="" class="me-gusta accion-comentario">Me Gusta</a>
                <a href="" class="responder accion-comentario">Responder</a>
              </div>
            </div>

            <div class="row no-gutters comentario">
              <div class="col-auto foto">
                <router-link :to="{name: 'Profile'}">
                  <img src="@/assets/img/persona4.jpg" alt="Persona" title="Perfil"/>
                </router-link>
              </div>
              <div class="col">
                <!-- Respuesta del comentario -->
                <p class="respuesta-comentario">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  accusantium?
                </p>

                <a href="" class="me-gusta accion-comentario">Me Gusta</a>
                <a href="" class="responder accion-comentario">Responder</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Redirect from '@/components/shared/others/Redirect.vue';

export default {
  name: "Posts",
  components: {
    Redirect
  }
};
</script>

<style  scoped>
.publicacion {
  margin-bottom: 40px;
}

.publicacion .foto {
  padding-left: 5px;
}

.publicacion .foto a {
  display: inline-block;
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 100px;
}

.publicacion .foto img {
  width: 100%;
}

.publicacion .nombre {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 16px;
  display: inline-block;
  margin-bottom: 10px;
}

.publicacion .texto {
  background: #fff;
  color: #3d3c3c;
  font-size: 14px;
  padding: 15px;
  margin-bottom: 15px;
}

.publicacion .imagen .video {
  padding: 15px;
  background: #fff;
  margin-bottom: 15px;
}

.publicacion .imagen img {
  width: 100%;
  margin-bottom: 10px;
}

.publicacion .caja-botones {
  margin-bottom: 20px;
}

.publicacion .post .caja-botones button {
  background: #1176b6;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  display: inline-block;
  font-size: 18px;
  line-height: 18px;
  border-radius: 4px;
  border: none;
}

.publicacion .post .caja-botones bottom:hover {
  background: #0d659d;
}

.publicacion .post .caja-botones p {
  margin-bottom: 0;
  color: #1782c6;
}

/* COMENTARIOS */
.publicacion .comentario {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #cbcbcb;
}

.publicacion .comentario .foto {
  padding-left: 0;
  margin-right: 5px;
}

.publicacion .comentario .foto a {
  display: inline-block;
  width: 40px;
  height: 40px;
}

.publicacion .comentario form textarea {
  width: 100%;
  background: #fff;
  border: 1px solid #cbcbcb;
  color: #565656;
  padding: 8px;
  min-height: 40px;
  height: 40px;
  min-width: 100%;
  max-width: 100%;
  font-size: 14px;
  border-radius: 4px;
}

.publicacion .comentario .respuesta-comentario {
  font-size: 14px;
  margin-bottom: 10px;
}

.publicacion .comentario .accion-comentario {
  font-size: 14px;
  margin-right: 5px;
}
</style>