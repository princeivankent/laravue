<template>
  <div class="sidebar sidebar-dark sidebar-main sidebar-expand-md" >
    <div class="sidebar-mobile-toggler text-center">
      <a href="#" class="sidebar-mobile-main-toggle">
        <i class="icon-arrow-left8"></i>
      </a>
      Navigation
      <a href="#" class="sidebar-mobile-expand">
        <i class="icon-screen-full"></i>
        <i class="icon-screen-normal"></i>
      </a>
    </div>

    <div class="sidebar-content">
      <div class="sidebar-user-material">
        <div class="sidebar-user-material-body">
          <div class="card-body text-center">
            <a href="#">
              <img src="../assets/images/dealer.png" class="img-fluid rounded-circle shadow-1 mb-3" width="80" height="80" alt="">
            </a>
            <h6 class="mb-0 text-white text-shadow-dark">Victoria Baker</h6>
            <span class="font-size-sm text-white text-shadow-dark">Santa Ana, CA</span>
          </div>
                        
          <div class="sidebar-user-material-footer">
            <a href="#user-nav" class="d-flex justify-content-between align-items-center text-shadow-dark dropdown-toggle" data-toggle="collapse"><span>My account</span></a>
          </div>
        </div>

        <div class="collapse" id="user-nav">
          <ul class="nav nav-sidebar">
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="icon-user-plus"></i>
                <span>My profile</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="icon-coins"></i>
                <span>My balance</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="icon-comment-discussion"></i>
                <span>Messages</span>
                <span class="badge bg-success-400 badge-pill align-self-center ml-auto">58</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="icon-cog5"></i>
                <span>Account settings</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="icon-switch2"></i>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="card card-sidebar-mobile">
        <ul class="nav nav-sidebar" data-nav-type="accordion">
          <li class="nav-item-header"><div class="text-uppercase font-size-xs line-height-xs">Main</div> <i class="icon-menu" title="Main"></i></li>
          <li class="nav-item">
            <a href="index.html" class="nav-link active">
              <i class="icon-home4"></i>
              <span>
                Dashboard
                <span class="d-block font-weight-normal opacity-50">No active orders</span>
              </span>
            </a>
          </li>
          <li class="nav-item nav-item-submenu">
            <a href="#" class="nav-link"><i class="icon-copy"></i> <span>Layouts</span></a>

            <ul class="nav nav-group-sub" data-submenu-title="Layouts">
              <li class="nav-item"><a href="" class="nav-link">Default layout</a></li>
              <li class="nav-item"><a href="" class="nav-link active">Layout 2</a></li>
              <li class="nav-item"><a href="" class="nav-link">Layout 3</a></li>
              <li class="nav-item"><a href="" class="nav-link">Layout 4</a></li>
              <li class="nav-item"><a href="" class="nav-link">Layout 5</a></li>
              <li class="nav-item"><a href="" class="nav-link disabled">Layout 6 <span class="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li>
            </ul>
          </li>
          <li class="nav-item nav-item-submenu">
            <a href="#" class="nav-link"><i class="icon-color-sampler"></i> <span>Themes</span></a>

            <ul class="nav nav-group-sub" data-submenu-title="Themes">
              <li class="nav-item"><a href="../../../LTR/default/full/index.html" class="nav-link">Default</a></li>
              <li class="nav-item"><a href="index.html" class="nav-link active">Material</a></li>
              <li class="nav-item"><a href="../../../LTR/dark/full/index.html" class="nav-link disabled">Dark <span class="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li>
              <li class="nav-item"><a href="../../../LTR/clean/full/index.html" class="nav-link disabled">Clean <span class="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li>
            </ul>
          </li>
          <li class="nav-item nav-item-submenu">
            <a href="#" class="nav-link"><i class="icon-stack"></i> <span>Starter kit</span></a>

            <ul class="nav nav-group-sub" data-submenu-title="Starter kit">
              <li class="nav-item"><a href="../seed/layout_nav_horizontal.html" class="nav-link">Horizontal navigation</a></li>
              <li class="nav-item"><a href="../seed/sidebar_none.html" class="nav-link">No sidebar</a></li>
              <li class="nav-item"><a href="../seed/sidebar_main.html" class="nav-link">1 sidebar</a></li>
              <li class="nav-item nav-item-submenu">
                <a href="#" class="nav-link">2 sidebars</a>
                <ul class="nav nav-group-sub">
                  <li class="nav-item"><a href="../seed/sidebar_secondary.html" class="nav-link">Secondary sidebar</a></li>
                  <li class="nav-item"><a href="../seed/sidebar_right.html" class="nav-link">Right sidebar</a></li>
                </ul>
              </li>
              <li class="nav-item nav-item-submenu">
                <a href="#" class="nav-link">3 sidebars</a>
                <ul class="nav nav-group-sub">
                  <li class="nav-item"><a href="../seed/sidebar_right_hidden.html" class="nav-link">Right sidebar hidden</a></li>
                  <li class="nav-item"><a href="../seed/sidebar_right_visible.html" class="nav-link">Right sidebar visible</a></li>
                </ul>
              </li>
              <li class="nav-item nav-item-submenu">
                <a href="#" class="nav-link">Content sidebars</a>
                <ul class="nav nav-group-sub">
                  <li class="nav-item"><a href="../seed/sidebar_content_left.html" class="nav-link">Left sidebar</a></li>
                  <li class="nav-item"><a href="../seed/sidebar_content_right.html" class="nav-link">Right sidebar</a></li>
                </ul>
              </li>
              <li class="nav-item"><a href="../seed/layout_boxed.html" class="nav-link">Boxed layout</a></li>
              <li class="nav-item-divider"></li>
              <li class="nav-item"><a href="../seed/navbar_fixed_main.html" class="nav-link">Fixed main navbar</a></li>
              <li class="nav-item"><a href="../seed/navbar_fixed_secondary.html" class="nav-link">Fixed secondary navbar</a></li>
              <li class="nav-item"><a href="../seed/navbar_fixed_both.html" class="nav-link">Both navbars fixed</a></li>
              <li class="nav-item"><a href="../seed/layout_fixed.html" class="nav-link">Fixed layout</a></li>
            </ul>
          </li>
          <li class="nav-item"><a href="../../../RTL/default/full/index.html" class="nav-link"><i class="icon-width"></i> <span>RTL version</span></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSideBar'
}
</script>
