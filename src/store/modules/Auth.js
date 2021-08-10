//Modulo de autenticacion
import { auth, db } from '@/firebase.js';
import { SET_USER } from '../types/MutationTypes';

const state = {
    user: {},
};


const getters = {
    // Los getters deben tener un tratamiento especial
    user: (state) => state.user
};


const mutations = {
    [SET_USER] (state, payload){
        state.user = payload ?? '';
    }
};


const actions = {
    // Trabajar con varios proveedores ya sea gmail, twitter, etc
    async doLogin({ commit, dispatch }, { user, password }){
        //Cuando hacemos el login debemos guardar el usuario en nuestra base de datos

    },

    async saveUser({ commit, dispatch } ){
        //Una vez se hace el login, debemos guardar los datos del usuario en nuestra base de datos
    },

    async doLogout({ commit }){
        //Aplication Logout
        await auth.signOut();
        commit(SET_USER, null);
    }
};

export default{
    namespaced: true,
    state, 
    getters,
    mutations,
    actions
}