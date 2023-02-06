<template>
  <h1>List Of Cities</h1>
  <div class="wrapper">
    <div class="reqStatus">
      <p>{{loading}}</p>
      <p class="red">{{error}}</p>
    </div>
    <city
        v-for="item in cities"
        :name="item.name"
        :weather="item.weather"
        :description="item.description"
        :temperature="item.temperature"
        :url="this.img"
        :updated-at="item.updatedAt"
        :time-ago="this.t">
    </city>
  </div>

</template>

<script>
  import City from "@/components/City.vue";
  import {format} from 'timeago.js';
  import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";


  export default {
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
        img:'',

        cities: []
      }
    },
    mounted() {
      setInterval(() => {
        this.t = this.timeAgo()
      }, 1000)
    },
    created() {

      this.getCityWeather("Annecy")

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
          this.loading = "Wait for request"

            const data = await this.getCityGeo(city);
            this.cityGeo = data
            const res = await fetch("http://api.openweathermap.org/data/2.5/forecast?lat=" + data[0]
                + "&lon=" + data[1] + "&units=metric" + "&appid=" + this.apiKey)
            console.log("data",res.status)
            const json = await res.json()
            this.img = await "http://openweathermap.org/img/wn/" + json.list[0].weather[0].icon + "@2x.png";
            this.cities.push({
              name: json["city"].name,
              weather: json.list[0].weather[0].main,
              description: json.list[0].weather[0].description,
              temperature: json.list[0].main["temp"],
              updatedAt:  json.list[0]["dt_txt"] ,
            })
            this.loading = "Request done"

        } catch (error) {
          console.log("err", error)
          this.loading = ""
          this.error = "Oops we have an error"
        }
      },

    }
  }
</script>

<style scoped>
  .wrapper {
    height: fit-content;
    width: 100%;
    display: flex;
  }
.red {
  color: red;
}
  @media screen and (max-width: 800px) {
    .wrapper {
      flex-direction: column;
    }
  }
</style>