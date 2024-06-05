<template>
  <div class="patient-dashboard">
    <header>
      <h1>bienvenue patient .... sur Psymatch, trouvez votre psy adapté</h1>
    </header>
    <div class="search-section">
      <input type="text" v-model="postalCode" placeholder="ex code postale" />
      <button @click="search">rechercher</button>
    </div>
    <div class="results-section">
      <div class="psy-list">
        <h2>psy disponible autour de vous</h2>
        <ul>
          <li v-for="psy in psychologists" :key="psy.id">
            <h3>{{ psy.name }}</h3>
            <p>{{ psy.details }}</p>
          </li>
        </ul>
      </div>
      <div class="map-section">
        <img src="map-placeholder.png" alt="Map" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientDashboard",
  data() {
    return {
      postalCode: '',
      psychologists: [
        // Dummy data for example
        {id: 1, name: 'psy 1', details: 'details about psy 1'},
        {id: 2, name: 'psy 2', details: 'details about psy 2'},
      ],
    };
  },
  methods: {
    search() {
      // Implement the search logic based on the postal code
      console.log(`Searching psychologists near postal code: ${this.postalCode}`);
      // Update the `psychologists` data based on search results
    },
  },
};
</script>

<style scoped>
.patient-dashboard {
  font-family: Arial, sans-serif;
}
header {
  text-align: center;
  margin-bottom: 20px;
}
.search-section {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.search-section input {
  padding: 8px;
  font-size: 16px;
}
.search-section button {
  padding: 8px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
.results-section {
  display: flex;
  justify-content: space-around;
}
.psy-list {
  width: 60%;
}
.psy-list h2 {
  background-color: #d3e0ea;
  padding: 10px;
}
.psy-list ul {
  list-style-type: none;
  padding: 0;
}
.psy-list li {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}
.map-section {
  width: 35%;
  text-align: center;
}
.map-section img {
  width: 100%;
  height: auto;
}
</style>