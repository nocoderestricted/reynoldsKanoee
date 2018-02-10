<template>
<v-app id="banner" app>
    <v-container>
        <v-layout row wrap>
            <v-flex v-for="(store, index) in storeItems" :key="store.id" xs12 md4 l4>
                <v-card >
                    <v-card-media :src="storeItemsWithImages.main_images[index].link.href" height="200px"></v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{store.name}}</h3>
                            <div>{{store.description}}</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange" @click.native="addToCart(store.id)">Add To Cart</v-btn>
                    </v-card-actions>

                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    <v-snackbar v-model="snackBar" :bottom="y === 'bottom'" :timeout="6000">
      {{snackBarText}}
      <v-btn flat color="pink" @click.native="snackBar = false">Close</v-btn>
    </v-snackbar>
    
</v-app>
  
</template>

<script>
    import storeDB from '../moltininit'
    export default {
        name : "store-view",
        data () {
            return {
                storeItems : null,
                storeItemsWithImages : null,
                snackBar : false,
                y: 'bottom',
                snackBarText : ""
            }
        },
        created () {
            storeDB.Products.With('main_image').All().then(res => {
                this.storeItems = res.data
                this.storeItemsWithImages = res.included
            })
        },
        methods : {
            addToCart (id){
                console.log(id)
                storeDB.Cart().AddProduct(id, 1).then(res => {
                    for(var i=0; i < res.data.length; i++){
                        if(res.data[i].product_id === id){
                            this.snackBar = true
                            this.snackBarText = `${res.data[i].name} has been added to your cart.`
                        }
                    }
                    
                });
            }
        }
    }
</script>
