<template>
    <v-card class="mx-auto" elevation="1" max-width="500">
        <v-card-title class="py-5 font-weight-black">Register in Massa Software</v-card-title>

        <v-card-text>
            To download your tax form from GitHub Sponsors on Stripe Express, you must also verify the Tax ID number
            used on your tax forms, as they contain sensitive personal information.
        </v-card-text>

        <v-card-text>
            <div class="text-subtitle-2 font-weight-black mb-1">Username</div>

            <v-text-field
                v-model="userData.username"
                prepend-inner-icon="mdi-email-outline" 
                :rules="[rules.required, rules.usernameValid]"
                label="Insert your username"
                variant="outlined"
                single-line>
            </v-text-field>
            <div style="margin-bottom: 0.5rem;"></div>

            <div class="text-subtitle-2 font-weight-black mb-1">Email</div>

            <v-text-field
                v-model="userData.email"
                prepend-inner-icon="mdi-email-outline" 
                :rules="[rules.required, rules.emailValid]"
                label="Insert your email" 
                variant="outlined"
                single-line>
            </v-text-field>
            <div style="margin-bottom: 0.5rem;">

            </div>

            <div class="text-subtitle-2 font-weight-black mb-1">Password</div>
            <v-text-field 
                v-model="userData.password"
                :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'" 
                class="input-group--focused" 
                hint="At least 8 characters"
                label="Insert your password" 
                variant="outlined" 
                single-line
                @click:append-inner="show1 = !show1">
            </v-text-field>

            <v-text-field 
                v-model="confirmPassword"
                :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" 
                :rules="[rules.required, rules.min, rules.passwordMatch]"
                :type="show2 ? 'text' : 'password'" 
                class="input-group--focused" 
                hint="At least 8 characters"
                label="Confirm your password" 
                variant="outlined" 
                single-line 
                @click:append-inner="show2 = !show2">
            </v-text-field>
            <div style="margin-bottom: 0.5rem;"></div>

            <v-btn :disabled="loading" :loading="loading" class="text-none mb-4" color="indigo-darken-3" size="x-large"
                variant="flat" block @click="handleRegister()" to='/'>
                Register
            </v-btn>

            <v-btn class="text-none" color="grey-lighten-3" size="x-large" variant="flat" block to='/'>
                Cancel
            </v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { getIpInfos } from '@/services/Geolocation';

export default {
    setup() {
        const authStore = useAuthStore();

        return { authStore }
    },
    data() {
        return {
            userData: {
                username: '',
                email: '',
                password: '',
                country: '',
                city: ''
            },
            show1: false,
            show2: false,
            confirmPassword: '',
            loading: false,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailValid: value => {
                    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                    return pattern.test(value) || 'Invalid e-mail.';
                },
                passwordMatch: value => value === this.userData.password|| 'Passwords do not match.',
                usernameValid: value => {
                    const pattern = /^[a-zA-Z0-9_-]{4,16}$/
                    return pattern.test(value) || 'Invalid username.'
                }
            },
        };
    },
    methods: {
        async handleRegister() {
            this.loading = true;

            const ipInfos = await getIpInfos();

            this.userData.country = ipInfos.country;
            this.userData.city = ipInfos.city;

            try {
                this.authStore.register(this.userData);
            } catch (error) {
                console.error("Register error:", error);
            } finally {
                this.loading = false;
            }
        }
    },
};
</script>

<style></style>