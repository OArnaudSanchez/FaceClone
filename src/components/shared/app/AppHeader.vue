<template>
  <header>
    <div class="container">
      <div class="row justify-content-start">
        <app-brand></app-brand>

        <!-- COLUMNA BARRA DE BUSQUEDA, ESTO PODRIA SER OTRO COMPONENTE -->
        <div class="col-12 col-sm-8 col-lg-6 order-last order-sm-2 buscar">
          <form action="#">
            <div class="row no-gutters align-items-center">
              <div class="columna col-10">
                <input
                  type="text"
                  placeholder="Amigos, Lugares y cosas que te gustan"
                />
              </div>
              <div class="columna col-2">
                <button><i class="fas fa-search"></i></button>
              </div>
            </div>
          </form>
        </div>

        <!-- COLUMNA DE LOS ICONOS EN EL HEADER ESTO PODRIA SER OTRO COMPONENTE-->
        <nav
          class="
            col-12 col-sm-3 col-lg-2
            d-flex
            justify-content-between
            ml-auto
            order-3
            menu
          "
        >
          <a
            :href="item.href"
            v-for="(item, index) of NavLinks"
            :key="index"
            :title="item.linkTitle"
          >
            <i :class="item.classIcon"></i>
          </a>

          <!-- IMAGEN DE PERFIL, ESTO PODRIA SER OTRO COMPONENTE -->
          <!-- AQUI SE PODRIA HACER UN DROPDOWN ESTILO FACEBOOK, CON OPCIONES PARA VER EL PERFIL,
                CONFIGURACIONES, SALIR ETC -->

          <div class="dropdown">
            <a
              class="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="@/assets/img/persona2.jpg"
                alt="Imagen de Perfil"
                title="ver Perfil"
                width="22"
                height="22"
              />
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <router-link :to="{ name: 'Profile' }" class="dropdown-item"
                >Perfil</router-link
              >
              <a class="dropdown-item" href="#">Configuracion</a>
              <a class="dropdown-item" href="#">Salir</a>
            </div>
          </div>

          <!-- <router-link :to="{name: 'Profile'}" class="imagen">
            <img
              src="@/assets/img/persona2.jpg"
              alt="Imagen de Perfil"
              title="ver Perfil"
              width="22"
              height="22"
            />
          </router-link> -->
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import Brand from "../others/Brand.vue";

export default {
  name: "AppHeader",
  components: {
    "app-brand": Brand,
  },
  data() {
    return {
      NavLinks: [
        // En el href colocaremos la informacion necesaria para que el routerlinkto funcione bien y optimizado
        { href: "#", classIcon: "fas fa-users", linkTitle: "Amigos" },
        { href: "#", classIcon: "fas fa-bell", linkTitle: "Notificaciones" },
        { href: "#", classIcon: "fas fa-comments", linkTitle: "Chat" },
      ],
    };
  },
};
</script>

<style scoped>
/* HEADER */
header {
  background: #1176b6;
  padding: 10px 0;
}

/* BARRA BUSQUEDA */
header .buscar form input[type="text"] {
  width: 100%;
  background: #fff;
  border: none;
  font-size: 12px;
  padding: 0 10px;
  height: 25px;
  line-height: 25px;
  border-radius: 3px 0 0 3px;
  color: #6d6d6d;
  font-family: "Open Sans", sans-serif;
}

header .buscar form button {
  width: 100%;
  background: #fff;
  border: none;
  font-size: 12px;
  padding: 0 10px;
  height: 25px;
  line-height: 25px;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
  color: #6d6d6d;
}

header .buscar form button:hover {
  background: #099efc;
  color: #fff;
}

/* MENU */
header .menu {
  padding: 0;
}

header .menu a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

header .menu a:hover {
  color: #fff;
}

header .menu .imagen {
  display: inline-block;
  width: 22px;
  height: 22px;
}

header .menu .imagen img {
  border-radius: 10px;
}

.dropdown-menu.show {
  background: #1176b6;
  color: #fff;
}

.dropdown-menu.show a:hover {
  color: #fff;
  background: #1176b6;
}
</style>