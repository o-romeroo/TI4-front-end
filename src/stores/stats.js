import { defineStore } from 'pinia';
import axios from 'axios';
import API_URL from '@/config/api';
import StatsService from '@/services/StatsService';
import { ref } from 'vue';

export const useStatsStore = defineStore('stats', {
    state: () => ({
        stats: null,
    }),
    actions: {
        async fetchStats() {
        try {
            this.stats = await StatsService.getStats();
        } catch (error) {
            console.error('Error trying to fetch stats: ', error);
        }
        },
    },
    getters: {
        getStats: (state) => state.stats,
    },
});