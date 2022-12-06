<template>
  <b-container>
    <h1 class="display-5 fw-bolder">eunalog</h1>
    <div style="padding: 10px"></div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="nav-link"><router-link to="/">main</router-link></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/board/main"
                ><a class="nav-link" href="#">diary</a></router-link
              >
            </li>
            <li class="nav-item">
              <!--
              <router-link to="/about"><a class="nav-link" href="#">About</a></router-link>
                -->
              <router-link to="/about"
                ><a class="nav-link" href="#">about me</a></router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >more ..</a
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">guest book</a>
              </div>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </b-container>
</template>

<script>
export default {};
</script>

<style></style>
