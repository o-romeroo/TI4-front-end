import { defineStore } from 'pinia';
import LoginService from '@/services/LoginService';
import RegisterService from '@/services/RegisterService';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    token: localStorage.getItem('token') || null,
  }),
  getters: {
  },
  actions: {
    async login(username, password) {
      try {
        const token = await LoginService.login(username, password);
        this.token = token;
        this.isAuthenticated = true;
      } catch (error) {
        this.isAuthenticated = false;
        this.token = null;
        throw error;
      }
    },
    async register(userData) {
      try {
        const user = await RegisterService.register(userData)
        return user
      } catch (error) {
        throw error;
      }
    },
    logout() {
      LoginService.logout();
      this.isAuthenticated = false;
      this.token = null;
      this.user = null;
    },
  },
});