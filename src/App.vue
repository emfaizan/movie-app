<template>
  <div>
    <HeaderComponent />

    <router-view />

    <FooterComponent />
  </div>
</template>


<script>
import HeaderComponent from '@/components/Header.vue'
import FooterComponent from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>