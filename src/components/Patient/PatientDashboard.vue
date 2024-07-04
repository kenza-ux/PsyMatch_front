<template>
  <div class="patient-dashboard">
    <div class="header">
      <img src="@/assets/logo_doctor.png" alt="Logo Psymatch" class="logo-doctor">
      <div class="welcome-message">Bienvenue patient... sur Psymatch, trouvez votre psy adapté</div>
      <div class="user-menu">
        <img src="@/assets/logo_user.png" alt="User Logo" class="logo-user" @click="toggleMenu">
        <ul v-if="menuVisible" class="dropdown-menu">
          <li @click="goToProfile">Mon profil patient</li>
          <li @click="goToAppointments">Mes rendez-vous</li>
          <li @click="goToHelp">Aide</li>
          <li @click="logout">Se déconnecter</li>
        </ul>
      </div>
    </div>
    <div class="search-bar">
      <input
          type="text"
          placeholder="Recherchez un psychologue..."
          v-model="searchQuery"
          @input="searchPsychologists"
      />
      <button @click="searchPsychologists">Rechercher</button>
    </div>
    <div class="container">
      <h3>Psy dispo autour de vous</h3>
      <div class="scroll-container">
        <div
            v-for="psy in filteredPsychologists"
            :key="psy.id"
            class="psychologist-item"
            @click="goToPsychologist(psy.id)"
        >
          <div><strong>Nom:</strong> {{ psy.name }}</div>
          <div><strong>Adresse:</strong> {{ psy.address }}</div>
          <div><strong>Description:</strong> {{ psy.description }}</div>
          <div><strong>Domaine:</strong> {{ psy.domain }}</div>
        </div>
      </div>
    </div>
    <div class="map-container">
      <GMapMap :center="mapCenter" :zoom="6" style="width: 100%; height: 100%;"/>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
// import { GMapMap } from '@fawmi/vue-google-maps';

export default {
  name: "PatientDashboard",
  components: {
    // GMapMap
  },
  setup() {
    const router = useRouter();
    const menuVisible = ref(false);
    const searchQuery = ref('');
    const psychologists = ref([
      { id: 1, name: 'Dr. Smith', address: '123 Main St', description: 'Expert in cognitive therapy', domain: 'Cognitive Therapy' },
      { id: 2, name: 'Dr. Jones', address: '456 Elm St', description: 'Specialist in family therapy', domain: 'Family Therapy' },
      { id: 3, name: 'Dr. Williams', address: '789 Oak St', description: 'Focus on anxiety and depression', domain: 'Anxiety and Depression' },
      { id: 4, name: 'Dr. Brown', address: '101 Pine St', description: 'Child psychologist', domain: 'Child Psychology' },
      { id: 5, name: 'Dr. Taylor', address: '202 Birch St', description: 'Addiction specialist', domain: 'Addiction Therapy' },
      { id: 6, name: 'Dr. kenza', address: '101 Pine St', description: 'Child psychologist', domain: 'Child Psychology' },
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

    const filteredPsychologists = computed(() => {
      if (!searchQuery.value) {
        return psychologists.value;
      }
      return psychologists.value.filter(psy =>
          psy.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          psy.address.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          psy.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          psy.domain.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const searchPsychologists = () => {
      // La logique de recherche est déjà gérée par la propriété computed
    };

    const goToPsychologist = (id) => {
      // Ajoutez la logique pour naviguer vers les détails du psychologue
      console.log("Naviguer vers le psychologue avec l'id:", id);
    };


    return {
      menuVisible,
      searchQuery,
      psychologists,
      mapCenter,
      filteredPsychologists,
      toggleMenu,
      goToProfile,
      goToAppointments,
      goToHelp,
      logout,
      searchPsychologists,
      goToPsychologist,
    };
  }
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
  width: 70px;
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

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.scroll-container {
  max-height: 400px;
  overflow-y: auto;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.psychologist-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.psychologist-item:hover {
  background-color: #f0f0f0;
}
</style>
