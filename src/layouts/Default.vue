<template>
  <div class="layout">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <g-link class="navbar-brand" :to="'/'"> 姚旺 </g-link>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <g-link class="nav-link" :to="'/'"> Home </g-link>
            </li>
            <li class="nav-item">
              <g-link class="nav-link" :to="'/about'"> About </g-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="post.html">Sample Post</a>
            </li>
            <li class="nav-item">
              <g-link class="nav-link" :to="'/contact'"> Contact </g-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- 子组件出口 -->
    <slot />
    <!-- Footer-->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <span class="yw-icon-font share-icon share-icon-qq">
                  &#xe600;
                </span>
              </li>
              <li class="list-inline-item">
                <span class="yw-icon-font share-icon share-icon-weixin">
                  &#xe665;
                </span>
              </li>
              <li class="list-inline-item">
                <span class="yw-icon-font share-icon share-icon-pengyouquan">
                  &#xe634;
                </span>
              </li>
            </ul>
            <p class="copyright text-muted">
              Copyright &copy; Your Website 2021
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
