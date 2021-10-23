<template>
  <div class="home">
    <MyHeader :lastUpdate="lastUpdate" :confirmed="confirmed" :deaths="deaths" />
    <MyCountries v-on:getCountryData="getCountryData" :countries="countries" />
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from '../components/Header.vue';
import MyCountries from '../components/Countries.vue';
const moment = require('moment');

export default {
  name: 'Home',
  components: {
    MyHeader,MyCountries
  },
  data: function(){
    return {
      countries: [],
      dataCovid: [],
      fillterByCountry : '',
      confirmed: '',
      deaths: '',
      lastUpdate : ''
    }
  }, 
  methods: {
    getDataCovid: async function(){
      const formater = new Intl.NumberFormat('en')
      let data = await fetch("https://covid19.mathdro.id/api")
      data = await data.json()
      this.confirmed = formater.format(data.confirmed.value)
      this.deaths = formater.format(data.deaths.value)
      this.lastUpdate = moment(data.lastUpdate).format('DD MMM YYYY hh:mm')
    },
    getCountry: async function(){
      let data = await fetch("https://covid19.mathdro.id/api/countries")
      data = await data.json()
      this.countries = data.countries
    },
    getCountryData: async function(event){
      if (event != '0') {
        const formater = new Intl.NumberFormat('en')
        this.fillterByCountry = event
        let data = await fetch("https://covid19.mathdro.id/api/countries/" + event)
        data = await data.json()
        this.confirmed = formater.format(data.confirmed.value)
        this.deaths = formater.format(data.deaths.value)
        this.lastUpdate = moment(data.lastUpdate).format('DD MMM YYYY hh:mm')
      }else{
        await this.getDataCovid();
      }
    }
  },
  async created(){
    await this.getCountry(); 
    await this.getDataCovid();
  }
}
</script>
