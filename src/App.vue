<template>
  <v-app style="background-image: url(https://www.mural-wallpaper.com/wp-content/uploads/2019/03/M11-World-map-on-grunge-background.jpg)">
    <!-- ****************** SIDEBAR ********************* -->
    <v-navigation-drawer
            v-model="drawer"
            app
            dark
            color="primary"
    >

      <v-list dense >

        <v-list-item v-if="this.userIsAuthenticated">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
          <v-list-item-content>
        <v-list-item-title>{{user.firstname}} {{user.lastname}}</v-list-item-title>
        <v-list-item-subtitle>You're logged in</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <template v-if="!this.userIsAuthenticated">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                PERKS
              </v-list-item-title>
              <v-list-item-subtitle>
                Please sign in!
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="{name: 'Login'}">
            <v-list-item-action >
              <v-icon>mdi-lock</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="{name: 'Register'}">
            <v-list-item-action>
              <v-icon>mdi-export-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </template>


        <v-divider class="ma-5"></v-divider>


        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Find Perks
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

        <v-list-group
                prepend-icon="mdi-map-marker"
                :value="false"
        >
        <template v-slot:activator>
          <v-list-item-title>Continents</v-list-item-title>
        </template>

          <v-list-group
                  no-action
                  sub-group
                  :value="false"
                  v-for="(continent, i) in countries.Continents"
                  :key="i"
          >
            <template v-slot:activator>
              <v-list-item link>
                <v-list-item-action>
                  <v-icon></v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{continent.name}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>

            <v-list-item link
                         v-for="(continent1, x) in countries.Continents[i].country"
                         :key="x"
            >
              <v-list-item-action>
                <v-icon></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{continent1.name}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list-group>
        </v-list-group>

        <v-list-group
                prepend-icon="mdi-dns"
                :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>Categories</v-list-item-title>
          </template>

              <v-list-item link>
                <v-list-item-action>
                  <v-icon></v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Politics</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

            <v-list-item link>
              <v-list-item-action>
                <v-icon></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Nature</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list-group>




<template  v-if="this.userIsAuthenticated">
  <v-divider class="ma-5"></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Your Perks
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item link >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Show your Perks</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{name: 'BeitragErstellen'}">
          <v-list-item-action>
            <v-icon>mdi-pencil</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Create a new Perk</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
</template>


      <template v-slot:append>
        <v-divider class="ma-5"></v-divider>

          <v-list-item v-if="this.userIsAuthenticated" @click="onLogout">
          <v-list-item-action >
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

          <v-list-item link :to="{name: 'Help'}">
            <v-list-item-action>
              <v-icon>mdi-help</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Help</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

      </template>

</v-list>

    </v-navigation-drawer>


    <!-- ****************** TOP NAVIGATION ********************* -->
    <v-app-bar app
               color="primary"
               dark
               src="https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    >

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-app-bar-nav-icon left>
        <v-img />
      </v-app-bar-nav-icon>

      <v-toolbar-title left>
        <router-link to="/" tag="span" style="cursor: pointer">PERKS - Find the News you'r looking for</router-link>
      </v-toolbar-title>
      <v-spacer/>

   <!--
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="px-6" v-for="item in menuItems" :key="item.title" text router :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    -->

      <!-- If user not auth -->
      <v-toolbar-items class="hidden-sm-and-down" v-if="!this.userIsAuthenticated">
        <v-btn text :to="{name:'Login'}">
          <v-icon left>mdi-lock</v-icon> Login
        </v-btn>

        <v-btn text :to="{name:'Register'}">
          <v-icon left>mdi-export-variant</v-icon> Register
        </v-btn>
      </v-toolbar-items>

      <!-- If user auth-->
      <v-toolbar-items class="hidden-sm-and-down" v-if="this.userIsAuthenticated">

        <v-btn icon @click.stop="openSearch = !openSearch">
          <v-icon >mdi-magnify</v-icon>
        </v-btn>

        <v-container>
        <v-text-field
                solo-inverted
                flat
                hide-details
                label="Search"
                prepend-inner-icon="mdi-magnify"
                v-show="openSearch"
        />
      </v-container>

       <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-x
        >
          <template v-slot:activator="{ on }">
            <v-btn icon >
              <v-avatar>
                <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                        v-on="on"
                >
              </v-avatar>
            </v-btn>

          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-list-item-avatar>

                <v-list-item-content link>
                  <v-list-item-title>{{user.firstname}} {{user.lastname}}</v-list-item-title>
                  <v-list-item-subtitle>You're logged in!</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>

              <v-subheader>
                What are you up to?
              </v-subheader>

                  <v-list-item link to='/profilanzeigen'>
                    <v-list-item-action>
                      <v-icon>mdi-tooltip-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>My Profil</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

              <v-list-item link :to="{name:'EditProfil'}">
                <v-list-item-action>
                  <v-icon>mdi-pencil</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Edit your Profil</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

                  <v-list-item link>
                    <v-list-item-action>
                      <v-icon>mdi-keyboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>My Perks</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

              <v-list-item link>
                <v-list-item-action>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Messages</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-subheader>
                See you later!
              </v-subheader>
              <v-list-item  @click="onLogout">
                <v-list-item-action>
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

            </v-list>
          </v-card>
        </v-menu>

      </v-toolbar-items>

    </v-app-bar>

    <v-content>
        <router-view />
    </v-content>


    <v-footer
            dark
            app
            padless
    >
      <v-card
              class="flex"
      >
        <v-card-title class="primary">
          &copy; {{ new Date().getFullYear() }} — Perks

          <v-spacer></v-spacer>
          <v-btn text link to="/legal-notice"><v-icon size="24px"></v-icon> Legal Notice </v-btn>
          <v-btn text link to="/privacy-policy"><v-icon size="24px"></v-icon> Privacy policy </v-btn>
        </v-card-title>

      </v-card>
    </v-footer>



  </v-app>
</template>

<script>
  import Home from './components/Home'
  import Template from "./views/Template";



  export default {
    name: 'App',
    data: () => ({
      countries: {},
      drawer: false,
      menu: false,
      openSearch: false,
      search: '',
      userData: {}
      //
    }),
    components: {
      Template,
      Home,
    },
    computed: {
      user() {
        return this.$store.getters.user
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }

    },
    methods: {
      onLogout() {
        console.log("Hello")
        this.$store.dispatch('logout')
      }
    },
  created() {
  this.countries = require('./assets/country.json');
  }
}
</script>
