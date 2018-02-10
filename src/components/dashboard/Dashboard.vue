<template>
<v-app id="banner" app>
    <v-container>
        <v-layout>
            <v-flex xs12 sm612>
                <v-card>
                    <v-list two-line v-for="(item,index) in requestSpeakerData" :key="index">
            
                    <v-list-tile avatar>
                        <v-list-tile-content>
                        <v-list-tile-title>{{item.fName}} {{item.lName}}  / <span>{{item.email}} </span></v-list-tile-title>
                        <v-list-tile-sub-title><span>Phone Number : {{item.phoneNumber}}</span> </v-list-tile-sub-title>
                        <v-list-tile-sub-title><span>Type of Request : {{item.typeRequest}} /  Date : {{item.date}}</span> </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                    </v-list>
                </v-card>
            </v-flex>
           
        </v-layout>
    </v-container>
    
</v-app>
  
</template>

<script>
    import db from '../firebaseinit'
    export default {
        name : "dashboard",
        data () {
            return {
                requestSpeakerData : []
            }
        },
        created () {
            db.collection("requestSpeaker").get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    console.log(doc.data())
                    this.requestSpeakerData.push(doc.data())
                });
            })
        },
        computed : {
            fullName : function(){
                return this.requestSpeakerData.fName + " " + this.requestSpeakerData.lName
            }
        },
        methods : {
            
        }
    }
</script>
