    
import React from "react";

export default ({ id }) => {
    return (
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Lesson Review+</div>
      </a>

      <hr class="sidebar-divider my-0"></hr>


      <li class="nav-item">
        <a class="nav-link" href="/home">
          <i class="fas fa-fw fa-home "></i>
          <span>Home</span></a>
      </li>


      <hr class="sidebar-divider"></hr>

      <div class="sidebar-heading">
        Interface
      </div>

      <li class="nav-item ">
        <a class="nav-link" href="/find">
          <i class="fas fa-fw fa-search"></i>
          <span>Find lesson</span>
        </a>
      </li>


      <li class="nav-item">
        <a class="nav-link" href="/fill" >
          <i class="fas fa-fw fa-pen-alt"></i>
          <span>Give review</span>
        </a>
      </li>

      {/* <hr class="sidebar-divider"></hr>

      <div class="sidebar-heading">
        Addons
      </div>

      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
          <i class="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
      </li>


      <li class="nav-item">
        <a class="nav-link" href="charts.html">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Charts</span></a>
      </li> */}


      <hr class="sidebar-divider d-none d-md-block"></hr>

 
    </ul>
    
        
    );
};