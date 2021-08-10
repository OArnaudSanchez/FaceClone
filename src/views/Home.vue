<template>
  <div>
    <app-home>
      <main class="container">
        <div class="row">
          <!-- Columna Enlaces -->
          <div
            :class="{
              'col-12': true,
              'col-md-3': true,
              'barra-lateral-izquierda': true,
              active: isActive,
            }"
            id="barra-lateral-izquierda"
          >
            <nav>
              <!-- Cambiar el icono de amigos. esta parte debe ser fixed y la de las publicidades -->
              <a
                :href="item.href"
                v-for="(item, index) of NavLinks"
                :key="index"
              >
                <i :class="item.classIcon"></i>
                {{ item.linkTitle }}
              </a>
            </nav>
          </div>

          <a
            href="#"
            :class="{
              'fondo-enlace': true,
              active: isActive,
              'd-md-none': true,
            }"
            @click.prevent="isActive = !isActive"
            id="fondo-enlace"
          ></a>

          <!-- Columna Publicaciones -->
          <div class="col contenido-principal">
            <!-- Crear publicacion -->
            <div class="publicar">
              <div class="row">
                <div class="col">
                  <a
                    href="#"
                    @click.prevent="isActive = !isActive"
                    class="btn-menu d-md-none d-flex justify-content-between"
                    id="btn-menu"
                  >
                    <span>Menu</span>
                    <i class="fas fa-bars"></i>
                  </a>
                </div>
              </div>

              <!-- CREAR NUEVA PUBLICACION -->
              <new-post />
            </div>

            <!-- Publicaciones -->
            <!-- Esta parte se puede hacer con el media object -->
            <posts />
          </div>

          <!-- Columna Publicidad -->
          <div class="col-3 barra-lateral-derecha d-none d-md-block">
            <publicity />
            <app-footer />
          </div>
        </div>
      </main>
    </app-home>
  </div>
</template>

<script>
import AppFooter from "../components/shared/app/AppFooter.vue";
import AppHome from "../components/shared/app/AppHome.vue";
import Publicity from "../components/app/publicity/Publicity.vue";
import NewPost from "../components/app/post/NewPost.vue";
import Posts from "../components/app/post/Posts.vue";

export default {
  name: "Example",
  components: {
    AppHome,
    AppFooter,
    Publicity,
    NewPost,
    Posts,
  },
  data() {
    return {
      isActive: false,
      NavLinks: [
        { href: "#", classIcon: "fas fa-users", linkTitle: "Amigos" },
        { href: "#", classIcon: "fas fa-users", linkTitle: "Grupos" },
        { href: "#", classIcon: "fas fa-envelope", linkTitle: "Mensajes" },
        { href: "#", classIcon: "fas fa-thumbs-up", linkTitle: "Paginas" },
        { href: "#", classIcon: "fas fa-play", linkTitle: "Videos" },
        { href: "#", classIcon: "fas fa-image", linkTitle: "Fotos" },
        { href: "#", classIcon: "fas fa-music", linkTitle: "Musica" },
        { href: "#", classIcon: "fas fa-book", linkTitle: "Libros" },
        { href: "#", classIcon: "fas fa-calendar-alt", linkTitle: "Eventos" },
      ],
    };
  },
};
</script>

<style scoped>
main {
  padding-top: 20px;
}

main .barra-lateral-izquierda {
  padding-bottom: 10px;
  padding-left: 0;
}

main .barra-lateral-izquierda nav {
  border-bottom: 1px solid #c7c8ca;
  padding-bottom: 20px;
}

main .barra-lateral-izquierda nav a {
  display: block;
  padding: 3px 3px;
  font-family: "Roboto", sans-serif;
  color: #3d3c3c;
}

main .barra-lateral-izquierda nav a:hover {
  background: #f2f2f2;
  text-decoration: none;
}

main .barra-lateral-izquierda nav a i {
  margin-right: 6px;
}

/* CONTENIDO PRINCIPAL */
main .contenido-principal .publicar {
  margin-bottom: 20px;
}

/* MEDIAQUERIES */
@media screen and (max-width: 767px) {
  main .btn-menu {
    display: block;
    border: 1px solid #00609c;
    padding: 5px 10px;
    font-size: 14px;
    background: linear-gradient(to bottom, #1a87cd 0%, #1176b6 100%);
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 20px;
    text-align: center;
  }

  main .btn-menu:hover {
    background: #0d659d;
    text-decoration: none;
  }

  main .fondo-enlace {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
    display: none;
  }

  main .fondo-enlace.active {
    display: block;
  }

  main .barra-lateral-izquierda {
    width: 85%;
    position: fixed;
    background: rgba(0, 0, 0, 0.85);
    z-index: 100;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    height: 100vh;
    transform: translateX(-100%);
    transition: all 0.3s ease;
    overflow: scroll;
  }

  main .barra-lateral-izquierda.active {
    transform: translateX(0%);
  }

  main .barra-lateral-izquierda nav {
    border-bottom: none;
  }

  main .barra-lateral-izquierda nav a {
    padding: 20px;
    color: #fff;
  }

  main .barra-lateral-izquierda nav a:hover {
    color: #3d3c3c;
    background: #fff;
  }
}

@media screen and (max-width: 575px) {
  header .menu {
    padding: 0 15px 15px 15px;
  }

  main .contenido-principal .publicar .foto a {
    width: 40px;
    height: 40px;
    margin: 0;
  }

  main .publicacion .foto a {
    width: 40px;
    height: 40px;
  }
}

@media screen and (max-width: 320px) {
  main .contenido-principal .publicar .foto {
    padding: 0;
    display: none;
  }
}
</style>