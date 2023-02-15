<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #e3f2fd;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Blogger</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/createpost">Create Post</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/notification">Notification</router-link> 
        </li>
      </ul>
      <form class="d-flex" role="search">
        <router-link class="nav-link" to="/login"><button type="button" class="btn btn-outline-primary" :disabled="isAuthenticated">Login</button></router-link>
        <router-link class="nav-link" to="/register"><button type="button" class="btn btn-outline-danger" :disabled="isAuthenticated">Register</button></router-link>
      </form>
    </div>
  </div>
</nav>

  <router-view/>
</template>

<script>
export default {
  computed: {
    isAuthenticated(){
      return localStorage.getItem("isAuthenticated") ==="true"
    }
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
