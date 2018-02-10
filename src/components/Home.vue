<template>
    <v-app id="banner" app>
        <div class="s12 grey darken-3 section">
            <div class="container ">
            <div class="row">
                <div class="col s12 m12">
                    <h1 class="white--text">To God Be The Glory</h1>
                </div>
                
            </div>
        </div>
        </div>
        
        <div id="image-header">
            <div class="container">
                <div class="row">
                    <div class="col s12 m12 l12">
                        <img src="~@/assets/kanoee-reynolds.png" id="image" class="responsive-img">
                        <div class="verbiage">
                            <blockquote class="blockquote mb-5 line-height">
                                Kanoee Reynolds is a Mother, Realtor, Author, Mentor and Pastor who has dedicated herself to fulfilling God's Great Commission, to "Go into all the world and preach the gospel to all creation." (Mark 16:15). She has an Eternal "YES" in her heart to serve God anytime and in anyway. She truly loves Jesus and shows her love for His redemptive work on the Cross by being a true-born again, Spirit filled, believer and witness in these last days. She is a native of Newport News, Virginia and She now resides in the great state of Maryland. She has 3 handsome sons Charles, Donte' and Jelon Trumble all on their way to success. She also has a grandson Jaiden Joesph Trumble who brings her great joy.​
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <div class="section grey darken-3">
            <div class="container">
            <h4 class="display-1 white--text header">Reoccurring Events</h4>
            <v-layout row wrap>
                <v-flex xs12 md4 l4>
                <v-card ml-2 mr-2>
                    <v-card-media
                    :src="require('@/assets/PRAYER-DEVOTIONAL.png')"
                    height="200px"
                    >
                    </v-card-media>
                    <v-card-title primary-title>
                    <div>
                        <div class="headline">Prayer &amp; Devotional Call</div>
                        <span class="grey--text">Let's Touch &amp; Agree</span>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                    <v-btn icon @click.native="show = !show">
                        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                    <v-slide-y-transition>
                    <v-card-text v-show="show">
                        <p>For where two or three are gathered together in My name, I am there in the midst of them. -Matthew 18:20</p>
                        <p>Monday's 12 noon (est)</p>
                        <p> <span class="bold">Dial In:</span> 641-715-3680 <span class="bold">Access Code:</span>  1031579#</p>
                    </v-card-text>
                    </v-slide-y-transition>
                </v-card>
                </v-flex>
                <v-flex xs12 md4 l4>
                <v-card ml-2 mr-2>
                    <v-card-media
                    :src="require('@/assets/test-tues.jpg')"
                    height="200px"
                    >
                    </v-card-media>
                    <v-card-title primary-title>
                    <div>
                        <div class="headline">Testimony Tuesday</div>
                        <span class="grey--text">Hear from one another!</span>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon @click.native="show2 = !show2">
                        <v-icon>{{ show2 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                    <v-slide-y-transition>
                    <v-card-text v-show="show2">
                        <p>EWCC Testimony Tuesday Tele-Conference Call</p>
                        <p>Every last Tuesday of the month. It's encouraging to hear from one another! Your story is the key that can unlock someone else's prison... So join us and share your testimony!</p>
                        <p> <span class="bold">Dial In:</span> 641-715-3680 <span class="bold">Access Code:</span>  1031579#</p>
                    </v-card-text>
                    </v-slide-y-transition>
                </v-card>
                </v-flex>
                <v-flex xs12 md4 l4>
                <v-card ml-2 mr-2>
                    <v-card-media
                    :src="require('@/assets/2018-Ambassador-of-Hope.jpg')"
                    height="200px"
                    >
                    </v-card-media>
                    <v-card-title primary-title>
                    <div>
                        <div class="headline">Ambassador of Hope</div>
                        <span class="grey--text">JOIN THE MOVEMENT</span>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    
                    <v-btn icon @click.native="show3 = !show3">
                        <v-icon>{{ show3 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                    <v-slide-y-transition>
                    <v-card-text v-show="show3">
                        <p>Pastor Kanoee is inviting people all around the world to join in on a movement as Ambassadors Of Hope, sharing God's love &amp; goodness in your corner of the earth, to your tribe, in your daily walk!</p>
                        <p>Let your light shine before men in such a way that they may see your good works, and glorify your Father who is in heaven.  Matthew 5:16</p>
                        <p>It's time to seize the moment and spread the love &amp; goodness of our faithful God---- and with your help, we will.<p>
                        <p>Call Me, 240-300-4278, for more information on becoming an Ambassador of Hope and receive your free gift.</p>
                        <p>How much is it to join?  <span class="bold">"NO CHARGE"</span> </p>
                    </v-card-text>
                    </v-slide-y-transition>
                </v-card>
                </v-flex>
            </v-layout>
            </div>
        </div>
        <div class="section grey lighten-3">
            <div class="container">
                <h4 class="display-1 grey--text header">Upcoming Events</h4>
                <v-layout row wrap>
                <v-flex xs12 md4 l4>
                <v-card ml-2 mr-2>
                    <v-card-media
                    :src="require('@/assets/2018-RE-Prayer-Breakfast.jpg')"
                    height="200px"
                    >
                    </v-card-media>
                    <v-card-title primary-title>
                    <div>
                        <div class="headline">Real Estate Breakfast</div>
                        <span class="grey--text">First Annual Real Estate Prayer Breakfast.</span>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    
                    <v-btn icon @click.native="show4 = !show4">
                        <v-icon>{{ show4 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                    <v-slide-y-transition>
                    <v-card-text v-show="show4">
                        <p><span class="bold">What Is It?</span>  The Real Estate Prayer Breakfast is a fellowship: the gathering of people and conversation with others in our industry while coming together in prayer and thanksgiving.</p>
                        <p><span class="bold">Our Goal?</span>  We wish to bring God to the center of our activity. With this prayer breakfast, we hope to bring God's bounty to the table and reach out to each other in simple prayer.</p>
                        <p><span class="bold">Is This For Me?</span>  Yes, if you are looking to grow in your relationship with Jesus Christ, while standing in prayer/agreement with your fellow colleague.</p>
                        <p>**The Annual Real Estate Prayer Breakfast is a Christ-centered but not just a Christian event. It does not seek to convert people to Christianity. Rather, the aim is simply to meet in the spirit of Jesus and pray together. This means that we seek to love those around us just as Jesus loved those who were around him.</p>
                        <p>Ft, Washington MD, Saturday, March 10th, 2018, 9:00am-12:00pm</p>
                        <a href="https://maryland-real-estate-prayer-breakfast-2018.eventbrite.com" target="_blank">Register Today</a>

                        <p>Newport News, VA, Saturday, March 17th, 2018, 9:00am-12:00pm </p>
                        <a href="https://virginia-real-estate-prayer-breakfast-2018.eventbrite.com" target="_blank">Register Today</a>
                    </v-card-text>
                    </v-slide-y-transition>
                </v-card>
                </v-flex>

                <v-flex xs12 md4 l4>
                <v-card ml-2 mr-2>
                    <v-card-media
                    :src="require('@/assets/2018-prayer-walk.jpg')"
                    height="200px"
                    >
                    </v-card-media> 
                    <v-card-title primary-title>
                    <div>
                        <div class="headline">Prayer Walk</div>
                        <span class="grey--text">Peace &amp; Unity</span>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    
                    <v-btn icon @click.native="show7 = !show7">
                        <v-icon>{{ show7 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                    <v-slide-y-transition>
                    <v-card-text v-show="show7">
                        <p>God is pressing us to bring our prayers beyond the church buildings, right into the neighborhoods, campuses, workplaces, where He desires to bring the hope of His Kingdom.  </p>
                        <p>Prayerwalking is intercession on location with information in cooperation against opposition for the glorification of our God.  It's simply praying in the very places where we expect God to bring forth His answers.</p>
                        <p>May Your Kingdom Come.. in this zip code..as it is in Heaven</p>
                        <p>Virginia Game Changer Registration</p>
                        <a href="https://virginia-prayer-walk-peace-unity.eventbrite.com">Register Today</a>
                        <p>Maryland Game Changer Registration</p>
                        <a href="https://maryland-prayer-walk-peace-unity.eventbrite.com">Register Today</a>
                    </v-card-text>
                    </v-slide-y-transition>
                </v-card>
                </v-flex>
                <v-flex xs12 sm4 md4>
                <v-card ml-2 mr-2>
                    <v-card-media
                    :src="require('@/assets/2018-ewcc-conference.jpg')"
                    height="200px"
                    >
                    </v-card-media>
                    <v-card-title primary-title>
                    <div>
                        <div class="headline">Women's EWCC Conference</div>
                        <span class="grey--text">Theme: Denim &amp; Diamonds</span>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    
                    <v-btn icon @click.native="show6 = !show6">
                        <v-icon>{{ show6 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                    <v-slide-y-transition>
                    <v-card-text v-show="show6">
                        <p class="bold">What is the Chat &amp; Chew Empowers Your City One-Day Lunch &amp; Learn Conference?</p>
                        <p>A Meet &amp; Greet for Women to get together to encourage, equip, engage &amp; empower each other to excel in personal, business, spiritual growth &amp; development.</p>
                        <p class="bold">Chat &amp; Chew Empowers Your City One-Day Lunch &amp; Learn Conference Program Includes:</p>
                        <p>Prayer, Dynamic Praise &amp; Worship, Anointed Biblical Teaching, Impartation, Round Table Discussion, Delicious Lunch and so much more.</p>
                        <p class="bold">RESERVE YOUR COMPLIMENTARY TICKET TODAY!!!</p>
                        <p>Ft, Washington MD, Saturday, April 21st, 2018, 8:30am-5:00pm</p>
                        <a href="https://maryland-chat-chew-one-day-conference.eventbrite.com" target="_blank">Register Today</a>
                        <p>Newport News, VA, Saturday, April 28th, 2018, 8:30am-5:30pm</p>
                        <a href="https://newport-news-chat-chew-one-day-conference.eventbrite.com" target="_blank">Register Today</a>
                    </v-card-text>
                    </v-slide-y-transition>
                </v-card>
                </v-flex>

                </v-layout>
                </div>
            </div>
            <div class="section">
            <div class="container">
            <h4 class="display-1 grey--text header">Programs</h4>
            <v-layout row wrap>
                <v-flex xs12 sm4 md4 >
                <v-card >
                    <v-card-media
                    :src="require('@/assets/realtor-realtor.jpg')"
                    height="200px"
                    >
                    </v-card-media>
                    <v-card-title primary-title>
                    <div>
                        <div class="headline">Realtor to Realtor</div>
                        <span class="grey--text">For All Real Estate Professionals</span>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    
                    <v-btn icon @click.native="show5 = !show5">
                        <v-icon>{{ show5 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                    <v-slide-y-transition>
                    <v-card-text v-show="show5">
                        <p>Hello Real Estate SUCCESS Partners, I am proud to announce the launch of Realtor To Realtor.  A hub for Prayer, Conversation, Showcasing Industry Shining Stars and other activities, via social media, tele-conference, gatherings and so much more.</p>
                        <p><span class="bold">Call:</span> 240-300-4278</p>
                        <p>Associate Broker GRE</p>
                        <p>Prayer For Real Estate</p>
                        <a href="https://soundcloud.com/realtor2realtor" target="_blank">Click Here To Listen</a>
                    </v-card-text>
                    </v-slide-y-transition>
                </v-card>
                </v-flex>
                <v-flex xs12 md4 l4>
                <v-card ml-2 mr-2>
                    <v-card-media
                    :src="require('@/assets/spiritual.jpg')"
                    height="200px"
                    >
                    </v-card-media>
                    <v-card-title primary-title>
                    <div>
                        <div class="headline">Spiritual Care Program</div>
                        <span class="grey--text">interfaith outreach ministry</span>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon @click.native="show9 = !show9">
                        <v-icon>{{ show2 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                    <v-slide-y-transition>
                    <v-card-text v-show="show9">
                        <p>The Spiritual Care Program is an interfaith outreach ministry that offers spiritual support to all.  We minister to persons from every faith, background, including those who do not have a particular faith. The Spiritual Care Program is staffed by qualified spiritual leaders and an ordained Pastor.</p>
                    </v-card-text>
                    </v-slide-y-transition>
                </v-card>
                </v-flex>
                <v-flex xs12 md4 l4>
                <v-card ml-2 mr-2>
                    <v-card-media
                    :src="require('@/assets/God-Magnificent-Jewels.jpg')"
                    height="200px"
                    >
                    </v-card-media>
                    <v-card-title primary-title>
                    <div>
                        <div class="headline">God's Magnificent Jewels</div>
                        <span class="grey--text">Teach, Nuture and Empower Women</span>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon @click.native="show10 = !show10">
                        <v-icon>{{ show2 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                    <v-slide-y-transition>
                    <v-card-text v-show="show10">
                        <p>God's Magnificent Jewels Mentoring Program is designed to Teach, Nuture and Empower Women to grow spiritually and to reach their maximum potential in Christ Jesus.  To bring to fruition the vision &amp; dreams that God has given each Jewel, through the power of Knowledge, Networking and Guidance.</p>
                    </v-card-text>
                    </v-slide-y-transition>
                </v-card>
                </v-flex>
            </v-layout>
            </div>
        </div>
    </v-app>
    
</template>

<script>
import db from './firebaseinit'
export default {
    name: 'home',
    data () {
        return {
            
            msg: 'Welcome to Your Vue.js App',
            show: false,
            show2 : false,
            show3 : false,
            show4 : false,
            show5 : false,
            show6 : false,
            show7 : false,
            show9 : false,
            show10 : false
        }
    }
}
</script>
<style>
    #image { 
        display: block;
        margin: 0 auto;
        max-width: 35%;
    }
    .card{
        background: #fff;
        margin-bottom: 10px;
    }
    *{
        font-family: 'Roboto', sans-serif;
    }
    .line-height{
        line-height: 30px;
    }
    .header{
        padding: .5em 0;
    }
    .card__text > p{
        line-height: 1.8;
    }
</style>

