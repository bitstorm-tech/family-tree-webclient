<template>
  <div class="container">
    <nav class="navbar is-dark">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/tree">Tree</nuxt-link>
        <nuxt-link class="navbar-item" to="/persons">Persons</nuxt-link>
      </div>
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/account">Account</nuxt-link>
        <nuxt-link class="navbar-item" to="/">Signout</nuxt-link>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>
