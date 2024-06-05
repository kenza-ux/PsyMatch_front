import {createWebHistory, createRouter} from 'vue-router';

import HomePage from '@/components/HomePage';
import PatientDashboard from './components/Patient/PatientDashboard.vue';

// Add other components here (SearchPsychologist, AppointmentBooking, etc.)

const routes = [
    { path: '/', component: HomePage },
    { path: '/Patient/patientdashboard', component: PatientDashboard },
    // Add routes for other components here (SearchPsychologist, AppointmentBooking, etc.)
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;