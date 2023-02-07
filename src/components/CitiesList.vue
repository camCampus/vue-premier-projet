<template>
  <div class="reqStatus">
    <p>{{loading}}</p>
    <p class="red">{{error}}</p>
    <p>{{location}}</p>
  </div>

    <city
        v-for="item in cities"
        :name="item.name"
        :weather="item.weather"
        :description="item.description"
        :temperature="item.temperature"
        :url="item.url"
        :updated-at="item.updatedAt"
        :time-ago="this.t"
        class="wrapper">
    </city>

</template>

<script>
  import City from "@/components/City.vue";
  import {format} from 'timeago.js';
  import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";


  export default {
    props: {
      valForChild:String
    },
    watch: {
      valForChild(newInput){
        console.log(`new val ${newInput}`)
        this.getCityWeather(newInput)
      }
    },
    components: {
      FontAwesomeIcon,
      City
    },
    name: "CitiesList",
    data() {
      return {
        myDate: new Date().getTime(),
        t: null,
        loading: true,
        error: null,
        apiKey: "9c50ce1e0e5c3a730ddd10d27c04748a",
        cityGeo: '',
        searchCity: '',
        location:"",
        autoGeo:false,
        cities: []
      }
    },
    mounted() {
      setInterval(() => {
        this.t = this.timeAgo()
      }, 1000)
    },
    created() {
      this.getLocation()
    },

    methods: {
      getNewDate() {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date + ' ' + time
      },
      timeAgo() {
        return format(new Date(this.myDate))
      },

      // Fonction pour récupérer latitude et longitude d'une ville
      async getCityGeo(name) {
        const res = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + name + "&limit=1&appid=" + this.apiKey)
        const json = await res.json()
        return [json[0].lat, json[0].lon]
      },

      //Fonction pour récupérer les données météo
      async getCityWeather(city) {

        try {
          //Message pour le status de la requête
          this.loading = "Wait for request"

          //Récupération des coordonées lat et lon de la ville
            const data = await this.getCityGeo(city);
            this.cityGeo = data

          //Recherche météo en fonction des coordonées de la villes
            const res = await fetch("http://api.openweathermap.org/data/2.5/forecast?lat=" + data[0]
                + "&lon=" + data[1] + "&units=metric" + "&appid=" + this.apiKey)
            const json = await res.json()
            const img = await "http://openweathermap.org/img/wn/" + json.list[0].weather[0].icon + "@2x.png";

            //Ajout d'un objet dans la tableau cities avec les datas météo de la ville recherchée
            this.cities.push({
              name: json["city"].name,
              weather: json.list[0].weather[0].main,
              description: json.list[0].weather[0].description,
              temperature: json.list[0].main["temp"],
              updatedAt:  json.list[0]["dt_txt"] ,
              url: img
            })
            this.loading = "Request done"

        } catch (error) {
          console.log("err", error)
          this.loading = ""
          this.error = "Oops we have an error"
        }
      },
      //Fonction pour récuperer les coordonnées lat et lon du navigateur web
        getLocation(){
          this.location = "Unable to retrieve your location please check your browser permission"

          if(!navigator.geolocation) {
          this.location = 'Geolocation is not supported by your browser';
         } else {
            //Si l'utilisateur autorise le partage de sa position lance une recherche avec ses données
           navigator.geolocation.getCurrentPosition(async (pos) => {
             let city = await this.getCity(pos.coords.latitude, pos.coords.longitude)
             this.getCityWeather(city)
           })
         }
      },
      //Fonction pour récupérer le nom d'une ville en fonction de ses coordonnées lat et lon
      async getCity(lat, lon) {
        const city = await
            fetch("http://api.openweathermap.org/geo/1.0/reverse?lat="+ lat +
                "&lon=" + lon + "&limit=5&appid=" + this.apiKey)
        const resJson = await city.json()
        this.location = "Location: " + resJson[0].name
        return resJson[0].name
      },
    }
  }
</script>

<style scoped>
  .wrapper {
    height: fit-content;
    width: fit-content;
    padding: 0 1vh;
    max-width: 500px;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(0.5rem + 1vh);
    background: rgba(245,223,235,0.9);
    border-radius: 10px;
  }
.red {
  color: red;
}
</style>