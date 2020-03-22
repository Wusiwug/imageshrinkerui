<template>
  <v-app>
    <div id="app">
      <div>
        <v-card class="mx-auto" height="1500">
          <v-app-bar color="blue lighten-2" dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>Image Shrinker</v-toolbar-title>
          </v-app-bar>

          <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
              <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                <router-link to="/">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                  </v-list-item>
                </router-link>

                <router-link to="/about">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-book</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>About</v-list-item-title>
                  </v-list-item>
                </router-link>

                <router-link to="/before">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-adjust</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Before</v-list-item-title>
                  </v-list-item>
                </router-link>

                <router-link to="/after">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-loupe</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>After</v-list-item-title>
                  </v-list-item>
                </router-link>

                <router-link to="/email">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-email</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Email</v-list-item-title>
                  </v-list-item>
                </router-link>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
          <router-view class="mt-3" />
        </v-card>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
    bottom: true
  })
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
