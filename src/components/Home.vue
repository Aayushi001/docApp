<template>
  <div class="container vertical-center">
    <div class="row">
      <div class="offset-md-3">
        <p class="size-50">Select Your Role:</p>
      </div>
    </div>
    <div class="row">
      <button class="offset-md-4 col-md-3 btn btn-primary btn-lg btn-block btn-font" @click="goTo('docView')">Doctor</button>
      <button class="offset-md-4 col-md-3 btn btn-secondary btn-lg btn-block btn-font" @click="goTo('patientView')">Patient</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goTo(path) {
      this.$router.push({ path: `/${path}`});
    }
  }
}
</script>

<style scoped>
  .vertical-center {
    margin-top: 20%;
  }
  .size-50 {
    font-size: 70px;
  }
  .btn-font {
    font-size: 50px;
  }

</style>