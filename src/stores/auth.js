import { defineStore } from 'pinia';
import LoginService from '@/services/LoginService';
import RegisterService from '@/services/RegisterService';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: !!localStorage.getItem('token'),
    token: localStorage.getItem('token') || null,
  }),
  getters: {
  },
  actions: {
    async login(username, password) {
      try {
        const token = await LoginService.login(username, password);
        this.token = token;
        localStorage.setItem('token', this.token);
        this.isAuthenticated = true;
      } catch (error) {
        this.isAuthenticated = false;
        this.token = null;
        throw error;
      }
    },
    async register(userData) {
      try {
        const token = await RegisterService.register(userData);
        this.token = token;
        localStorage.setItem('token', this.token);
        this.isAuthenticated = true;
        return user
      } catch (error) {
        throw error;
      }
    },
    async getUserLogged() {
      if (this.token !== null) {
        return true;
      }else {
        return false;
      }
    },
    logout() {
      LoginService.logout();
      this.isAuthenticated = false;
      this.token = null;
    },
  },
});