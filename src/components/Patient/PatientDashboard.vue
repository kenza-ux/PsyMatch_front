<template>
  <div class="patient-dashboard">
    <div class="header">
      <img src="@/assets/logo_doctor.png" alt="Logo Psymatch" class="logo-doctor">
      <div class="welcome-message">Bienvenue patient... sur Psymatch, trouvez votre psy adapté</div>
      <div class="user-menu">
        <img src="@/assets/logo_user.png" alt="User Logo" class="logo user" @click="toggleMenu">
        <ul v-if="menuVisible" class="dropdown-menu">
          <li @click="goToProfile">Mon profil patient</li>
          <li @click="goToAppointments">Mes rendez-vous</li>
          <li @click="goToHelp">Aide</li>
          <li @click="logout">Se déconnecter</li>
        </ul>
      </div>
    </div>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="ex code postale" />
      <button @click="search">searchPsychologists</button>
    </div>
    <div class="content">
      <div class="propositions">
        <h2>Psy dispo autour de vous</h2>
        <ul class="psy-list">
          <li v-for="psy in psychologists" :key="psy.id">
            {{ psy.name }} - {{ psy.address }}
          </li>
        </ul>
      </div>
      <div class="map-container">
        <GMapMap :center="mapCenter" :zoom="6" style="width: 100%; height: 100%;"/>

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { GMapMap } from '@fawmi/vue-google-maps';

export default {
  name: "PatientDashboard",
  components: {
    GMapMap,
  },
  setup() {
    const router = useRouter();
    const menuVisible = ref(false);
    const searchQuery = ref('');
    const psychologists = ref([
      { id: 1, name: 'Dr. Smith', address: '123 Main St' },
      { id: 2, name: 'Dr. Jones', address: '456 Elm St' },
      // Ajoutez plus de psychologues ici
    ]);
    const mapCenter = ref({ lat: 46.603354, lng: 1.888334 });

    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };

    const goToProfile = () => {
      router.push('/patient/profile');
    };

    const goToAppointments = () => {
      router.push('/patient/appointments');
    };

    const goToHelp = () => {
      router.push('/help');
    };

    const logout = () => {
      // Ajoutez la logique de déconnexion ici
    };

    const searchPsychologists = () => {
      // Ajoutez la logique de recherche ici
    };

    return {
      menuVisible,
      searchQuery,
      psychologists,
      mapCenter,
      toggleMenu,
      goToProfile,
      goToAppointments,
      goToHelp,
      logout,
      searchPsychologists,
    };
  },
};
</script>

<style scoped>
.patient-dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #f0f0f0;
}

.logo-doctor {
  width: 100px;
}

.welcome-message {
  flex-grow: 1;
  text-align: center;
  font-size: 20px;
}

.user-menu {
  position: relative;
}

.logo-user {
  width: 50px;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  right: 0;
  top: 100%;
  background-color: white;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f0f0f0;
}

.search-bar {
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-bar input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.search-bar button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.search-bar button:hover {
  background-color: #45a049;
}

.content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
}

.propositions {
  width: 50%;
}

.psy-list {
  list-style: none;
  padding: 0;
}

.psy-list li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.map-container {
  width: 50%;
  height: 500px;
}
</style>