<template>
  <div class="psychologist-list">
    <div class="scroll-container">
      <table>
        <thead>
        <tr>
          <th>Nom</th>
          <th>Adresse</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="psy in filteredPsychologists" :key="psy.id">
          <td>{{ psy.name }}</td>
          <td>{{ psy.address }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PsychoListRecherche",
  props: {
    psychologists: {
      type: Array,
      required: true
    },
    searchQuery: {
      type: String,
      required: true
    }
  },
  computed: {
    filteredPsychologists() {
      if (this.searchQuery) {
        return this.psychologists.filter(psy =>
            psy.address.includes(this.searchQuery)
        );
      }
      return this.psychologists;
    }
  }
};
</script>

<style scoped>
.scroll-container {
  max-height: 400px;
  overflow-y: auto;
  padding: 20px;
  background-color: #fff;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}
</style>
