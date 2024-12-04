<template>
    <v-card class="mx-auto" elevation="1" max-width="500">
        <v-card-title class="py-5 font-weight-black">Register or Login in Massa Software</v-card-title>

        <v-card-text>
            To download your tax form from GitHub Sponsors on Stripe Express, you must also verify the Tax ID number
            used on your tax forms, as they contain sensitive personal information.
        </v-card-text>

        <v-card-text>
            <div class="text-subtitle-2 font-weight-black mb-1">Username</div>

            <v-text-field v-model="username" prepend-inner-icon="mdi-account-outline" :rules="[rules.required, rules.usernameValid]"
                label="Insert your username" variant="outlined" single-line>
            </v-text-field>
            <div style="margin-bottom: 0.5rem;"></div>

            <div class="text-subtitle-2 font-weight-black mb-1 d-flex align-center justify-space-between">Password
                <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer"
                    target="_blank">Forgot login password?</a>
            </div>
            <v-text-field v-model="password" :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'" class="input-group--focused" hint="At least 8 characters"
                label="Insert your password" variant="outlined" name="input-10-2" single-line
                @click:append-inner="show1 = !show1"></v-text-field>

            <div style="margin-bottom: 0.5rem;"></div>

            <v-btn :disabled="loading" :loading="loading" class="text-none mb-4" color="indigo-darken-3" size="x-large"
                variant="flat" block @click="handleLogin()" to='/'>
                Login
            </v-btn>

            <v-btn class="text-none" color="grey-lighten-3" size="x-large" variant="flat" block to="/register">
                Register
            </v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

export default {
    setup() {
        const authStore = useAuthStore();

        return { authStore }
    },
    data() {
        return {
            show1: false,
            username: '',
            password: '',
            loading: false,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                usernameValid: value => {
                    const pattern = /^[a-zA-Z0-9_-]{4,16}$/
                    return pattern.test(value) || 'Invalid username.'
                }
            },
        }
    },
    methods: {
        async handleLogin() {
            this.loading = true;

            try {
                this.authStore.login(this.username, this.password);
            } catch (error) {
                console.error("Login error:", error);
            } finally {
                this.loading = false;
            }

        }
    }
}
</script>

<style></style>