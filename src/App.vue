<template>
  <div id="app" class="flyout">
    <div>
 <navbar dark position="top" class="default-color" id="head1" name="BMW" href="#/" scrolling><!-- <img src="bmw10.jpg"> -->
      <navbar-collapse>
        <navbar-nav right>
          <navbar-item href="#/" waves-fixed>Log in</navbar-item>
          <navbar-item href="#/css" waves-fixed>Sign up</navbar-item>
          </navbar-nav>
      </navbar-collapse>
    </navbar>
    <main :style="{marginTop: '60px'}">
      <router-view></router-view>
    </main>
    </div>
    <div>
    <Ftr color="default-color">
      <p class="footer-copyright mb-0 py-3 text-center" id="head1">
        &copy; Copyright: <a href="https://www.cogzidel.com"> 2008-2018 Cogzidel Technologies Pvt Ltd All Rights Reserved. </a>
      </p>
    </Ftr>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import NavbarItem from '@/components/NavbarItem.vue';
import NavbarNav from '@/components/NavbarNav.vue';
import NavbarCollapse from '@/components/NavbarCollapse.vue';
import Ftr from '@/components/Footer.vue';
import EdgHd from '@/components/EdgeHeader.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Ftr,
    EdgHd,
  }
};
</script>

<style>
.flyout {
  display:flex;
  flex-direction: column;
  min-height:100vh;
  justify-content: space-between;
}

#head1 {
  background-color: #2d2d2d !important;
  font-family: verdana;
}

.body {
  padding: 20px;
  background: #2d2d2d;
  position: relative;
  color: #ffffff;
  font-family: verdana;
}

.btn-primary {
    background-color: #2d2d2d !important;
}
.btn-primary:hover, .btn-primary:active, .btn-primary:visited {
      background-color: #ffffff !important;
      color: #000000 !important;
} 

</style>
