<template>
    <div class="BeitragErstellen">

        <div id="app">

            <v-app id="inspire">

                <v-row
                        justify="center"
                >
                    <v-col
                            cols="12"
                            xs="10"
                            sm="10"
                            md="10"
                            lg="10"
                            xl="8"
                    >

                    <v-card>
                        <v-toolbar
                                flat
                                color="blue-grey"
                                dark
                        >
                            <v-toolbar-title>Create an article</v-toolbar-title>
                        </v-toolbar>

                        <v-card-text>
                            <v-text-field
                                    filled
                                    label="Title"
                                    outlined
                                    value="">
                            </v-text-field>

                            <v-row class="px-3">
                                <v-select
                                        :items="countries"
                                        prepend-inner-icon="mdi-map"
                                        menu-props="auto"
                                        class="input-group--focused px-5"
                                        label="Where did it happen? - Continent"
                                        outlined
                                ></v-select>
                                <v-select
                                        :items="countries"
                                        prepend-inner-icon="mdi-map"
                                        menu-props="auto"
                                        class="input-group--focused px-5"
                                        label="Where did it happen? - Country"
                                        outlined
                                ></v-select>
                            </v-row>

                            <v-textarea
                                    filled
                                    outlined
                                    label="Create an Article"
                                    value=""
                            ></v-textarea>

                            <v-divider class="my-2"></v-divider>

                            <v-file-input
                                    v-model="files"
                                    color="deep-purple accent-4"
                                    counter
                                    label="File input"
                                    multiple
                                    placeholder="Select your files"
                                    prepend-icon="mdi-paperclip"
                                    outlined
                                    :show-size="1000"
                            >
                                <template v-slot:selection="{ index, text }">
                                    <v-chip
                                            v-if="index < 2"
                                            color="deep-purple accent-4"
                                            dark
                                            label
                                            small
                                    >
                                        {{ text }}
                                    </v-chip>

                                    <span
                                            v-else-if="index === 2"
                                            class="overline grey--text text--darken-3 mx-2"
                                    >
                                        +{{ files.length - 2 }} File(s)
                                 </span>
                                </template>
                            </v-file-input>

                            <v-item-group multiple>
                                <v-subheader>Hashtags</v-subheader>
                                <v-item
                                        v-for="n in 8"
                                        :key="n"
                                        v-slot:default="{ active, toggle }"
                                >
                                    <v-chip
                                            active-class="purple--text"
                                            :input-value="active"
                                            @click="toggle"
                                    >
                                            Tag {{ n }}
                                    </v-chip>
                                </v-item>
                            </v-item-group>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-row class="justify-end mx-5" >
                                <v-btn type="submit" :disabled="loading" :loading="loading" color="primary"  large class="ml-5">
                                    Post <v-icon right>mdi-arrow-right</v-icon>
                                    <span slot="loader" class="custom-loader">
                                 <v-icon>mdi-cached</v-icon>
                             </span>
                                </v-btn>
                            </v-row>
                        </v-card-actions>
                    </v-card>

                    </v-col>
                </v-row>
            </v-app>

        </div>
    </div>
</template>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'BeitragErstellen',

        // benötigte Komponenten
        components: {},

        // entspricht den HTML-Attributen
        props: {},

        // Variablen-Speicher
        data() {
            return {}
        },

        // reagieren auf prop-Veränderung
        watch: {},

        // interne Methoden
        methods: [],

        // Initialisierung
        created() {}
    }
</script>

<style scoped>

    ul {
        list-style-type: lower-roman;
        display: block;
        color: dodgerblue;
        text-align: center;
        padding: 16px;
        margin: 0;
        overflow: hidden;
        background-color: dodgerblue;
    }
</style>
