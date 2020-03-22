<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/baner2.png" />
    <div class="card-container">
      <v-card class="mx-auto mb-4 pa-3" max-width="500" color="blue lighten-4" outlined>
        <v-card-title>Image-Shrinker Team</v-card-title>

        <p>Team Members:</p>
        <div>
          <div>
            <img src="../assets/joe.jpeg" alt="Joe" />
            <p>Josep VanWagoner</p>
          </div>
          <div>
            <img src="../assets/erp.jpeg" alt="Joe" />
            <p>Edmundo Rubio</p>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>
<style scoped>
.card-container {
  padding: 10px;
  margin: 0 10px;
}
</style>
