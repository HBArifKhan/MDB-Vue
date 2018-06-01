<template>
    <navbar dark position="top" class="default-color" name="MDB Vue" href="#/" scrolling>
      <navbar-collapse>
        <navbar-nav right>
          <navbar-item href="#/" waves-fixed>Home</navbar-item>
          <navbar-item href="#/css" waves-fixed>CSS</navbar-item>
          <navbar-item href="#/components" waves-fixed>Components</navbar-item>
          <navbar-item href="#/advanced" waves-fixed>Advanced</navbar-item>
        </navbar-nav>
      </navbar-collapse>
    </navbar>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import NavbarItem from '@/components/NavbarItem.vue';
import NavbarNav from '@/components/NavbarNav.vue';
import NavbarCollapse from '@/components/NavbarCollapse.vue';


export default {
  name: 'app',
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
  }
};
</script>