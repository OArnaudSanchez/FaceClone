<template>
  <div>
    <h1>Profile</h1>

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
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style lang="scss" scoped>
</style>