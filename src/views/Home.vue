<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/baner2.png" />
    <div class="card-container">
      <v-card class="mx-auto mb-4 pa-3" max-width="500" color="blue lighten-4" outlined>
        <v-card-title>Faster Applications</v-card-title>

        <p>
          This service allows you to request images with specific dimentions,
          this will make load times faster, use fewer resources on the server
          and the network, and make your applications faster. Another benefit is
          that you can create E-Mails that will let you know if the user has
          open the E-Mail. These services will allow your application faster and
          will generate data that will help you to know the users that are
          reading your emails.
        </p>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {}
};
</script>
<style scoped>
.card-container {
  padding: 10px;
  margin: 0 10px;
}
</style>
