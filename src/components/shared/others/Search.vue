<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        name: 'Search'
    }
</script>

<style scoped>

/* BARRA BUSQUEDA */
.buscar form input[type="text"] {
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

.buscar form button {
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

.buscar form button:hover {
  background: #099efc;
  color: #fff;
}

</style>