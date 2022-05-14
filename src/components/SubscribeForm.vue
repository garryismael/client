<template>
  <div class="card" id="subscribe-form">
      <FlatRateInfosForm/>
      <PersonalInfosForm/>
      <div class="card-footer">
          <div class="form-next-action">
            <button class="btn btn-primary">Suivant</button>
          </div>
          <div class="form-ending">
            <div class="form-previous-action">
              <button class="btn btn-secondary">Précédent</button>
            </div>
            <div class="form-subscribe-action">
              <button class="btn btn-success">S'abonner</button>
            </div>
          </div> 
      </div>
  </div>
</template>

<script>
import FlatRateInfosForm from "@/components/forms/FlatRateInfosForm.vue";
import PersonalInfosForm from "@/components/forms/PersonalInfosForm.vue";
export default {
    components : {
      FlatRateInfosForm,
      PersonalInfosForm
    },
    data() {
      return {

      }
    }
}
</script>

<style scoped>
  
</style>
