<template>
  <header class="header">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-between">
        <div class="left-col col-auto">

          <div class="header-logo">
            <router-link to="/" class="navbar-brand">
              <img src="@/assets/images/logo.png" alt="Movie" />
            </router-link>
          </div>

          <div class="primary-menu">
            <ul class="nav">
              <li class="menu-item"><router-link to="/">Home</router-link></li>
              <li class="menu-item"><router-link to="/stats">Movies</router-link></li>
              <li class="menu-item"><a href="#tv-shows/">TV Shows</a></li>
              <li class="menu-item"><a href="#blog/">Blog</a></li>
            </ul>
          </div>
        </div>


        <div class="right-col col-auto">

          <div class="search-box me-5">
            <form role="search" method="get" class="search-form" action="#">
              <input type="search" id="masvideos-search-field-0" class="search-field" placeholder="Search …" value="" name="s">
              <button type="submit" class="search-submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path d="M7 0C11-0.1 13.4 2.1 14.6 4.9 15.5 7.1 14.9 9.8 13.9 11.4 13.7 11.7 13.6 12 13.3 12.2 13.4 12.5 14.2 13.1 14.4 13.4 15.4 14.3 16.3 15.2 17.2 16.1 17.5 16.4 18.2 16.9 18 17.5 17.9 17.6 17.9 17.7 17.8 17.8 17.2 18.3 16.7 17.8 16.4 17.4 15.4 16.4 14.3 15.4 13.3 14.3 13 14.1 12.8 13.8 12.5 13.6 12.4 13.5 12.3 13.3 12.2 13.3 12 13.4 11.5 13.8 11.3 14 10.7 14.4 9.9 14.6 9.2 14.8 8.9 14.9 8.6 14.9 8.3 14.9 8 15 7.4 15.1 7.1 15 6.3 14.8 5.6 14.8 4.9 14.5 2.7 13.6 1.1 12.1 0.4 9.7 0 8.7-0.2 7.1 0.2 6 0.3 5.3 0.5 4.6 0.9 4 1.8 2.4 3 1.3 4.7 0.5 5.2 0.3 5.7 0.2 6.3 0.1 6.5 0 6.8 0.1 7 0ZM7.3 1.5C7.1 1.6 6.8 1.5 6.7 1.5 6.2 1.6 5.8 1.7 5.4 1.9 3.7 2.5 2.6 3.7 1.9 5.4 1.7 5.8 1.7 6.2 1.6 6.6 1.4 7.4 1.6 8.5 1.8 9.1 2.4 11.1 3.5 12.3 5.3 13 5.9 13.3 6.6 13.5 7.5 13.5 7.7 13.5 7.9 13.5 8.1 13.5 8.6 13.4 9.1 13.3 9.6 13.1 11.2 12.5 12.4 11.4 13.1 9.8 13.6 8.5 13.6 6.6 13.1 5.3 12.2 3.1 10.4 1.5 7.3 1.5Z"></path>
                </svg>
              </button>
            </form>
          </div>

          <div class="user-account">
            <a href="#my-account/" class="site-header__user-account--link" data-toggle="dropdown">
              <svg width="32px" height="32px">
                <image x="0px" y="0px" width="32px" height="32px" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACB1BMVEW7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu7vLu3t7eys7KztLO4uLi6u7q0tbSxsrG2t7awsrC7vLu8vLy1trW8vby1tbWysrK6urq3uLe5urm9vr24ubitrq2wsbCsrazV1dXs7Oz29vb39/fw8PDe3t6vsK/v7+/////5+vnLy8urrKuxsbHGx8aur67k5OT4+Pizs7P9/f3R0tGurq7Oz87j4+OsrqzU1NTo6OiusK7+/v7k5eT4+fjGyMa7u7v6+vrMzMyrq6u+vr7Ky8ri4uLt7e3u7u7m5+bT1NOwsLC+v77Q0NDe397f39/T09O/v7/FxsX5+fn09PS9vb37+/v09fTNzs3g4ODh4uHX2Nf8/PzY2djIyMjIycjU1dTl5uXx8fHm5ubV1tVi3+TsAAAAUnRSTlMADleWxOHwxphZESftmiuDiBvN0iAq8TAW9xzX340dI5ymCPj9VV+lydDl5/P05srRnqdjCvr+EKCqipTd5Pb7IfI31NmLkAQvojIVn+PLoWIYYNJBTgAAAAFiS0dEca8HXOIAAAAHdElNRQfjBQECDwMxTbKCAAACG0lEQVQ4y21T90PTQBQ+RKpY3FisExcuEHEvFPdeXLikJLnakjbVgjESSEutqIiKIo66R90L/SNtbzTp+H66e9/37r17A4ACqqZUT63xeGqmTa+dAcrhra7rhEIXQl2iFPDMnFXKz0bdoqzIBIosdqM5RfTceYKKZRdwUJhf7/AL6iD35lAU6Gvg/ELfJe4eCgd62FGT/IuYYDGkPI5E9RASYiK9anAJyw8yFx1evhLv7buKYwoJqMCleX4ZUskVG+iaSXC936ICFS3PCRoHyItKUOw1OQZtYsMDKwBYuUqgEaxEgTeTQxFiE1dXgTWdlFdxyhGYN9LM2gQaJVoB46aLN4ctWg19LVjH/nDrtltwJ42IFa4HG8JUMFLpBTm8ETSHeA53K+SAmkELE8jWqMPfY7/ICzYFWHfcdbhv40KIVok3Z+RBH6XHHj7ivYWbQZvOL+N6+vHEk6fPnoejCh8dfQuo5SHkjB158fLV6zdvg3aGj4e6FWzbTkqtida74SQN8T4xGBM0UuodOwHYlW+WZosT7jok1HROgfXduW7WI1HRoviDWYT4eEzLtdubH4g98GOmZ8wsQVY2NLiXjtQ+Q/pkliE+ZLTzod/fb1bA5wMdfKwbDn4p57/6DzmL0XH42/diOvXjiLdot47+TLgkqdFfx46XLOeJtpbffyaT2Wxy8u8//8lTFfb7dNOZ1rMeX/u58xcuOtb/keQ/CDzeyUsAAAAASUVORK5CYII="></image>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      mobileMenu: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.header {
  padding:10px 25px;
  margin:0 0;
  background:white;
  box-shadow: 0 0 8px rgb(51 51 51 / 30%);
  position: relative;
  z-index: 3;


  .left-col {
    display:flex;
    align-items:center;
  }

  .right-col {
    display:flex;
    align-content: center;
  }

  .header-logo {
    margin:0 40px 0 0;
    img {
      max-height:60px;
    }
  }

  .search-box {
    .search-form {
      display:flex;
      border:1px solid #aaa;
      border-radius:50px;
      overflow:hidden;
      min-width: 400px;

      input {
        height: 54px;
        border:0;
        outline:0;
        padding: 10px 0 10px 25px;
        flex-grow:1;
      }

      .search-submit {
        border:0;
        background:none;
        outline:0;
        padding:15px 20px;
      }
    }
  }
}


.primary-menu {

  .nav {
    display:flex;

    .menu-item a {
      padding:10px 16px;
      border-radius:4px;
      font-weight:500;
      font-size:15px;
      text-decoration:none;

      &.active {
        background: #402254;
        background: -moz-linear-gradient(45deg,  #402254 0%, #5c2966 100%);
        background: -webkit-linear-gradient(45deg,  #402254 0%,#5c2966 100%);
        background: linear-gradient(45deg,  #402254 0%,#5c2966 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#402254', endColorstr='#5c2966',GradientType=1 );
        color:#fff;
      }
    }
  }
}
</style>
