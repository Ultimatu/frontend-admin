// src/store/auth.js
import { defineStore } from 'pinia';
import axios, { all } from 'axios'
export const useAuthStore = defineStore('auth', {
  state: () => ({
    userToken: null,
    userInfo: null,
  }),

  getters:{
      // getUserInfo(){
      //     return this.userInfo;
      // }
  },
  actions: {
    setUserToken(token) {
      this.userToken = token;
      localStorage.setItem('userToken', token);
    },

    setUserInfo(info){
      this.userInfo = info;
      localStorage.setItem('userInfo',info);
    },


   
    async login(credentials) {
      try {
        const response = await axios.post('https://lesinnovateurs.me/api/auth/login', credentials);
        const userToken = response.data.Authorization.token;
        const allInfo = response.data.user;
        this.setUserToken(userToken);
        this.setUserInfo(allInfo);
        return true; // Login successful
      } catch (error) {
        console.error('Login failed:', error);
        return false; // Login failed
      }
    },
  },
});
