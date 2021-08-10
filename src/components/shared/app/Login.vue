<template>
    <div>
        <template v-if="isLogin">
            <app-login></app-login>
            <a href="" @click.prevent="isLogin = false">No tienes Cuenta? Registrate</a>
        </template>

        <template v-else>            
            <app-register></app-register>
            <a href="" @click.prevent="isLogin = true">Ya tienes Cuenta? Inicia Sesion</a>
        </template>
    </div>
</template>

<script>
import AppLogin from './AppLogin.vue';
import AppRegister from './AppRegister.vue';

    export default {
        name: 'AppInit',
        components:{
            AppLogin,
            AppRegister
        },
        data(){
            return{
                isLogin: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>