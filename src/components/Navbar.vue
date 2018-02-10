<template>
<div>
    <v-navigation-drawer v-model="sideNav" app>

    </v-navigation-drawer>
    <v-toolbar dark color="pink " app>
        <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">Kanoee Reynolds</v-toolbar-title>
        <v-spacer></v-spacer>
        
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn to="/" flat>Home</v-btn>
            <v-btn to="/requestPastor" flat>Request Pastor</v-btn>
            <v-btn to="/login" flat>Login</v-btn>
            <v-btn to="/register" flat>Register</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</div>
    
    
</template>
<script>
export default {
  data () {
    return {
      sideNav : false
    }
  }
}
</script>

<style>
    #nav-wrapper{
        padding: 0 1em;
    }
    *{
        font-family: 'Roboto', sans-serif;
    }
</style>
