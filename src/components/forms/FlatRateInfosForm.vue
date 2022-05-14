<template>
   <form class="card-body" action="#">
      <div class="flat-rate-infos">
          <div>
              <h3 class="card-title">Nos forfaits</h3>
          </div>
        <div class="flat-rate-choice">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" value="free" v-model="forfait">
              <label class="form-check-label" for="inlineCheckbox1">Free</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" id="inlineCheckbox2" value="copper" v-model="forfait">
              <label class="form-check-label" for="inlineCheckbox2">Copper</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" id="inlineCheckbox3" value="silver" v-model="forfait">
              <label class="form-check-label" for="inlineCheckbox3">Silver</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" id="inlineCheckbox3" value="gold" v-model="forfait">
              <label class="form-check-label" for="inlineCheckbox3">Gold</label>
            </div>
        </div>
        <div class="flat-rate-details">

        </div>
      </div>
    </form> 
</template>

<script>
export default {
    data() {
      return {
          forfait: '',
          details: []
      }
    },
    created() {
      
    }

}
</script>

<style scoped>

</style>