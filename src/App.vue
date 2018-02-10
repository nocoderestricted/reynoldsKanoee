<template>
  <v-app id="app">
      <v-navigation-drawer v-model="sideNav" fixed clipped disable-resize-watcher disable-route-watcher app>
        <v-divider></v-divider>
        <v-list dense class="pt-0">
        <v-list-tile ripple v-for="item in items" :key="item.title" @click.stop="gotToLink(item)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title > {{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
        
      </v-navigation-drawer>
      <v-toolbar dark color="pink" fixed app>
        <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">Kanoee Reynolds</v-toolbar-title>
        <v-spacer></v-spacer>
        
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat v-for="item in items" :key="item.title" @click.stop="gotToLink(item)">{{item.title}}</v-btn>
        </v-toolbar-items>
    </v-toolbar>
      <v-content>
      <router-view/>
      </v-content>
      <Footer />
    
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  name: 'app',
  data () {
    return {
      sideNav : false,
      items: [
        { title: 'Register', icon: 'person', link : 'register' },
        { title: 'Login', icon: 'person', link : 'login' },
        { title: 'Home', icon: 'home', link : '/' },
        { title: 'Request Pastor', icon: 'person', link : 'requestPastor' }
      ]
    }
  },
  components : {
    Navbar,
    Footer
  },
  methods : {
    gotToLink (item){
      this.$router.push(item.link)
    }
  }
}
</script>
