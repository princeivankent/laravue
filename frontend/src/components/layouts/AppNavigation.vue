<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link 
          class="nav-item"
          tag="li" 
          to="/home"
          active-class="active"
        >
          <a class="nav-link">Home</a>
        </router-link>
        <router-link 
          class="nav-item"
          tag="li" 
          to="/about"
          active-class="active"
        >
          <a class="nav-link">About</a>
        </router-link>
        
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <div class="btn-group">
          <button 
            class="btn btn-outline-secondary dropdown-toggle" 
            data-toggle="dropdown" 
            data-display="static" 
            aria-haspopup="true" 
            aria-expanded="false"
          >
            {{ $store.getters['user/userDetails']['name'] }}
          </button>
          <div class="dropdown-menu dropdown-menu-lg-right">
            <button class="dropdown-item" type="button">Action</button>
            <button class="dropdown-item" type="button">Another action</button>
            <div class="dropdown-divider"></div>
            <button class="dropdown-item" type="button" @click="$store.dispatch('user/logoutAction')">Logout</button>
          </div>
        </div>
        <!-- <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul> -->
      </form>
    </div>
  </nav>
</template>
