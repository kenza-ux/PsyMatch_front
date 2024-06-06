<template>
  <div class="home-page">
    <div class="header">
      <img src="@/assets/logo_doctor.png" alt="Logo Psymatch" class="logo">
      <h1 class="title">Psymatch</h1>
      <p class="subtitle">Choisissez votre profil et votre mode d'accès</p>
    </div>

    <div class="profile-buttons">
      <button @click="onPatientProfile"
              :class="{ 'profile-btn': selectedProfile !== 'patient', 'profile-btn--selected': selectedProfile === 'patient' }"
              class="profile-btn">Patient</button>
      <button @click="onPsychologistProfile"
              :class="{ 'profile-btn': selectedProfile !== 'psychologist', 'profile-btn--selected': selectedProfile === 'psychologist' }"
              class="profile-btn">Psychologue</button>
    </div>

    <div class="auth-section" v-if="selectedProfile">
      <div class="login-container">
        <p>Si vous avez déjà un compte, veuillez vous authentifier</p>
        <form @submit.prevent="onLogin">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>

          <label for="password">Mot de passe</label>
          <input type="password" id="password" v-model="password" required>

          <button type="submit">Se connecter</button>
        </form>
      </div>

      <div class="signup-container">
        <p>vous n'avez pas encore de compte? crééez en un ici</p>
        <button class="signup-button" @click="onSignup">S'inscrire</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      selectedProfile: null,
      email: '',
      password: '',
    };
  },
  methods: {
    onPatientProfile() {
      this.selectedProfile = 'patient';

    },
    onPsychologistProfile() {
      this.selectedProfile = 'psychologist';

    },
    onLogin() {
      if (this.selectedProfile === 'patient') {
        this.$router.push('/Patient/patientdashboard');
      } else if (this.selectedProfile === 'psychologist') {
        // Redirection ou logique de connexion pour les psychologues
        alert("Login pour psychologue n'est pas encore implémenté.");
      } else {
        alert("Veuillez sélectionner un profil.");
      }
    },
    onSignup() {
      // Redirection vers la page "Authentification"
      this.$router.push({ name: 'Authentification' });
    },
    toggleLoginForm() {
      this.showLoginForm = !this.showLoginForm;
    },
  },
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #f0f0f0; /* Fond global */
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.logo {
  width: 200px;
  height: auto;
  margin-bottom: 10px;
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 18px;
  margin-bottom: 20px;
}

.profile-buttons {
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin-bottom: 20px;
}

.profile-btn {
  background-color: #4CAF50;
  color: white;
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}

.profile-btn--selected {
  background-color: #4CAF50;
  cursor: pointer;
}

.profile-btn:not(.profile-btn--selected) {
  background-color: #cccccc;
}

.auth-section {
  display: flex;
  justify-content: space-between;
  width: 80%; /* Ajustez la largeur selon vos besoins */
  margin-top: 20px;
}

.login-container,
.signup-container {
  width: 45%; /* Les containers occupent chacun 45% de la largeur */
  padding: 20px;
  background-color: #e0e0e0; /* Couleur de fond plus intégrée */
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Ombre moins prononcée */
}

.login-container form,
.signup-container {
  display: flex;
  flex-direction: column;
}

.login-container label {
  margin-bottom: 5px;
  font-weight: bold;
}

.login-container input[type="email"],
.login-container input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.login-container button[type="submit"],
.signup-button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.login-container button[type="submit"]:hover,
.signup-button:hover {
  background-color: #45a049;
}

.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.signup-button {
  margin-top: 20px;
}
</style>



