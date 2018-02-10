<template>
<v-app app>
  <v-form>
      <div class="s12 grey darken-3 section">
        <div class="container ">
          <div class="row">
              <div class="col s12 m12">
                  <h1 class="white--text">Request Pastor Kanoee Reynolds</h1>
              </div>
          </div>
        </div>
      </div>
      <div>
        <v-progress-linear v-bind:indeterminate="true" color="pink " v-if="loading"></v-progress-linear>
      <div class="container">
        <p class="center-align veriage">To Request Pastor Kanoee Reynolds For Your Next Inspirational Event / Experience or To Request a (Press Kit) promotional video, biography, and or picture</p>
        <form @submit.prevent="saveEventRequest">
          <v-layout row wrap>
            <v-flex xs12 md4 l4>
              <v-text-field
                name="First Name"
                label="First Name"
                id="first_name"
                v-model="requestFName"
                color="pink"
                :error-messages="errors.collect('First Name')"
                v-validate="'required'"
                data-vv-name="First Name"
                required
              ></v-text-field>
            </v-flex>

             <v-flex xs12 md4 l4>
              <v-text-field
                name="LName"
                label="Last Name"
                id="last_name"
                v-model="requestLName"
                color="pink"
                :error-messages="errors.collect('Last Name')"
                v-validate="'required'"
                data-vv-name="Last Name"
                required
              ></v-text-field>
             </v-flex>

              <v-flex xs12 md4 l4>
                <v-menu
                  lazy
                  :close-on-content-click="false"
                  v-model="menu"
                  transition="scale-transition"
                  offset-y
                  full-width
                  :nudge-right="40"
                  max-width="290px"
                  min-width="290px"
                >
                <v-text-field
                  slot="activator"
                  label="Select Date of Event"
                  v-model="requestDate"
                  readonly
                  :error-messages="errors.collect('Date')"
                  v-validate="'required'"
                  data-vv-name="Date"
                  required
                  color="pink"
                ></v-text-field>
                <v-date-picker v-model="requestDate" no-title scrollable actions>
                  <template slot-scope="{ save, cancel }">
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                      <v-btn flat color="primary" @click="save">OK</v-btn>
                    </v-card-actions>
                  </template>
                </v-date-picker>
                </v-menu>
              </v-flex>
            
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 md4 l4>
              <v-text-field
                name="phoneNumber"
                label="Phone Number"
                id="phoneNumber"
                v-model="requestPhoneNumber"
                color="pink"
                :error-messages="errors.collect('Phone Number')"
                v-validate="'required|numeric'"
                data-vv-name="Phone Number"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md4 l4>
              <v-select
                v-bind:items="items"
                v-model="requestType"
                label="Pick your event type."
                single-line
                color="pink"
                :error-messages="errors.collect('Event')"
                v-validate="'required'"
                data-vv-name="Event"
                bottom
                required
              ></v-select>
            </v-flex>

              <v-flex xs12 md4 l4>
                <v-text-field
                  name="E-mail"
                  label="E-Mail"
                  id="email"
                  color="pink"
                  v-model="requestEmail"
                  :error-messages="errors.collect('email')"
                  v-validate="'required|email'"
                  data-vv-name="email"
                  required
                ></v-text-field>
              </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
                  name="Notes"
                  label="Leave Pastor Kanoee any relavant details to your event."
                  id="notes"
                  v-model="requestNotes"
                  color="pink"
                  multi-line
                ></v-text-field>
            </v-flex>
          </v-layout>
          <v-btn color="success" type="submit"><i class="material-icons left">send</i>Submit</v-btn>
          <v-btn color="error" @click.native.stop="formDialog = true"><i class="material-icons left">cancel</i>Clear Form</v-btn>
        </form>
        
      </div>
    </div> 
    
  </v-form>
  <v-snackbar v-model="snackbar" :bottom="y === 'bottom'">
      Successfully sent your request.
      <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-layout row justify-center>
    <v-dialog v-model="formDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Do you want to clear this form?</v-card-title>
        <v-card-text>Clearing the form will clear out all of your data. All user input data will be lost.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="clearForm">Clear Form</v-btn>
          <v-btn color="error" flat="flat" @click.native="formDialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  </v-app>
  
</template>

<script>
import db from './firebaseinit'
export default {
  name: 'request-form',
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      requestFName : null,
      requestLName : null,
      requestPhoneNumber : null,
      requestEmail : null,
      requestNotes : null,
      requestDate : null,
      requestType : null,
      menu: false,
      modal: false,
      items: [],
      loading : false,
      snackbar: false,
      y: 'bottom',
      formDialog : false
    }
  },
  created() {
    db.collection('events').get().then(querySnapshot => {
      querySnapshot.forEach( doc => {
        this.items.push(doc.data())
      })
    })
  },
  methods : {
    saveEventRequest (){
      this.$validator.validateAll().then(res => {
        if(res){
            this.loading = true
            db.collection('requestSpeaker').add({
              fName : this.requestFName,
              lName : this.requestLName,
              phoneNumber : this.requestPhoneNumber,
              email : this.requestEmail,
              notes : this.requestNotes,
              date : this.requestDate,
              typeRequest : this.requestType.text
            })
            .then( docRef => {
              this.loading = false
              this.snackbar = true
            })
            .catch(error => {
              this.loading = false
            })
        }
      })
      
    },
    clearForm (){
      this.requestFName = ""
      this.requestLName  = ""
      this.requestPhoneNumber = ""
      this.requestEmail = ""
      this.requestNotes = ""
      this.requestDate = ""
      this.requestType = ""
      this.formDialog = false;
    }
  }
}
</script>

<style scoped>
  .veriage{
    font-size: 20px;
    text-align: center;
    line-height: 2em;
    padding: 1em 0;
  }
</style>

