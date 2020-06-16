<template>
 <div>
  <form class="card auth-card" @submit.prevent="submitHandler">
  <div class="card-content">
    <span class="card-title">Домашняя бухгалтерия</span>
    <div class="input-field">
            <input id="email" type="text"
             v-model.trim="email"
              :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
            <label for="email">Email</label>
            <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.required">email field is required</small>
            <small class="helper-text invalid" v-else-if="$v.email.$dirty && !$v.email.email">enter a correctly email</small>
        </div>
        <div class="input-field">
            <input id="password"
             v-model.trim="password"
              type="password"
              :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}">
              
            <label for="password">Пароль</label>
            <small class="helper-text invalid" v-if="$v.password.$dirty && !$v.password.required">password is required</small>
            <small class="helper-text invalid" v-else-if="$v.password.$dirty && !$v.password.minLength">min length must be {{ $v.password.$params.minLength.min }}  now it's {{ password.length }}</small>
        </div>
    <div class="input-field">
      <input
          id="name"
          type="text"
          class="validate"
      >
      <label for="name">Имя</label>
      <small class="helper-text invalid">Name</small>
    </div>
    <p>
      <label>
        <input type="checkbox" />
        <span>С правилами согласен</span>
      </label>
    </p>
  </div>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Зарегистрироваться
        <i class="material-icons right">send</i>
      </button>
    </div>

    <p class="center">
      Уже есть аккаунт?
      <router-link to="/login">Войти!</router-link>
    </p>
  </div>
</form>
 </div>
</template>



<script>
export default {
 name: 'register',
 data() {
  return {
   email: '',
   password: '',
   name: '',
   checked: false
  }
 }
}
</script>
