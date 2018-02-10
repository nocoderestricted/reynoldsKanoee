<template>
<v-app id="banner">
    <v-content>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card>
              <v-toolbar color="pink" darken-4>
                <v-toolbar-title class="white--text">Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="login">
                  <v-text-field prepend-icon="person" color="pink" name="login" v-model="email" label="Email" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock"  color="pink" name="password" v-model="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1 white--text" type="submit">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
  
</template>

<script>
    import firebase from 'firebase'
    export default {
        name : "login",
        data () {
            return {
                email : null,
                password : null
            }
        },
        created () {
            
        },
        computed : {
            
        },
        methods : {
            login(){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then( () => {
                    console.log("You've been logged in.")
                })
                .catch(err => {
                    console.log(err)
                    
                })
            }
        }
    }
</script>
