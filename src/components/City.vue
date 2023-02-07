<template>
  <div id="city">
    <ul>
      <li><img :src=url /></li>
      <li><span style="padding-left: 7px"><font-awesome-icon icon="fa-solid fa-location-dot" class="icon"/></span>
        {{ name }}
      </li>
      <li><span><font-awesome-icon icon="fa-solid fa-hat-wizard" class="icon"/></span> {{ weather }}</li>
      <li><span style="padding-left: 2px"><font-awesome-icon icon="fa-solid fa-circle-info" class="icon"/></span>
        {{ description }}
      </li>
      <li><span style="padding-left: 11px"><font-awesome-icon icon="fa-solid fa-temperature-half" class="icon"/></span>
        {{ temperature }}C°
      </li>
      <li><span style="padding-left: 7px"><font-awesome-icon icon="fa-regular fa-calendar" class="icon"/></span>
        {{ updatedAt }}
      </li>
      <li><span></span>{{ timeAgo }}</li>
    </ul>
  </div>
</template>

<script>


  export default {
    name: "City",
    props: {
      name: String,
      weather: String,
      description: String,
      url: String,
      temperature: Number,
      updatedAt: String,
      timeAgo: String
    },
  }
</script>

<style scoped>
  div {
    height: fit-content;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    color: #344a53;
    font-size: calc(0.5rem + 1vh);
    margin: 1vw;
  }

  ul {
    list-style: none;
    margin: auto;
    width: 100%;
    height: 100%;
    padding: 1vh;
  }

  li {
    padding: 5px 0;
  }

  span {
    font-weight: bold;
  }

  img {
    background: #18be69;
    border-radius: 10px;
  }

  .icon {
    font-size: 40px;
  }

</style>