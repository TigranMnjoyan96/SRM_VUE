<template>
<div class="app-main-layout">
   

 <Navbar @hideSidebar="hideSidebar" />
 <Sidebar :isOpen="isOpen" />

    <main class="app-content" :class="{full: !isOpen}">
        <div class="app-page">

            <router-view />

        </div>
    </main>

    <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record">
            <i class="large material-icons">add</i>
        </router-link>
    </div>
</div>
</template>

<script>
import Navbar from './partials/Navbar'
import Sidebar from './partials/Sidebar'


export default {
 name: 'MainLayout',
 data() {
  return {
   isOpen: true
  }
 },
 components: {
  Navbar, Sidebar
 },
 methods: {
  hideSidebar() {
   this.isOpen = !this.isOpen
  }
 }
}
</script>
