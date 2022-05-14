<template>
   <form class="card-body" action="#">
      <div class="witness-infos">
          <div>
              <h3 class="card-title">Informations personnelles</h3>
          </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label for="nom">Nom :</label>
            <input type="text" class="form-control" id="nom" name="nom">
          </div>
          <div class="form-group col-md-6">
            <label for="prenom">Prénom(s) :</label>
            <input type="text" class="form-control" id="prenom" name="prenom">
          </div>
        </div>
        
        <div class="form-group">
          <label for="mail">Mail :</label>
          <input type="mail" class="form-control" id="mail" name="mail">
        </div>
        <div class="form-group">
          <label for="pwd">Photo :</label>
          <input type="file" class="form-control" name="photo">
        </div>
        <div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control">
          </div>
          <div class="form-group">
              <label for="pwd">Mots de passe :</label>
              <input type="password" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label for="conf-pwd">Confirmer votre mot de passe :</label>
          <input type="password" class="form-control" id="conf-pwd">
        </div>
      </div>
    </form> 
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>