import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --primary: #af4138;
    --text: #3d3d3d;
    --blue: #2c47f3;
    --light-blue: #f0f5f7;
    --grey: rgba(204, 204, 204, .3);

    --bpLarge: 991px;
  }
  html {
    font-size: 62.5%;
    @media (max-width: 600px) {
      font-size: 55%;
    }
  }
  body {
    color: var(--text);
    font-family: Montserrat-Medium;
    font-size: 2rem;
    background-color: #fff;
    overflow-x: hidden;
  }
  img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: Montserrat-Bold;
  }
  h1 {
    font-size: 4.8rem;
    line-height: 6rem;
  }
  h2 {
    font-size: 3rem;
    line-height: 1.1;
  }
  h3 {
    font-size: 2.6rem;
    line-height: 1.1;
  }
  h4 {
    font-size: 2rem;
    line-height: 1.1;
  }
  p {
    font-family: Montserrat-Medium;
    font-size: 14px;
    color: var(--text);

    &.big {
      font-size: 2.4rem;
      font-size: 2.4rem;
      line-height: 1.4;
    }

  }
  .white {
    color: #fff;
  }
  .blue {
    color: #2c48f3;
  }
  .black {
    color: #000;
  }
  a {
    color: inherit;
    text-decoration: none;
    transition: all 300ms;
    font-family: Montserrat-Medium;
  }

  .btn {
    text-transform: uppercase;
    padding: 1.5rem 2.5rem;
    font-size: 1.5rem;
    border-radius: 0;

    &-transparent {
      background-color: transparent;
      border: 1px solid #fff;
      color: #fff;
  
      &:hover {
        background-color: var(--primary);
        border: 1px solid var(--primary);
        color: #fff;
      }
    }

    &-full-transparent {
      background-color: transparent;
      border: 1px solid transparent;
    
      &:hover, &.active {
        border: 1px solid var(--primary);
      }
    }

    &-transparent-primary {
      background-color: transparent;
      border: 1px solid var(--primary);
      color: var(--text);
  
      &:hover {
        background-color: var(--primary);
        color: #fff;
      }
    }

    &-full-primary {
      background-color: var(--primary);
      border: 1px solid var(--primary);
      color: #fff;

      &:hover {
        border: 1px solid var(--primary);
        background-color: transparent;
      }
    }

    &-sm {
      padding: 1rem 2.5rem;
    }
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }
 
  img {
    max-width: 100%;
  }
.center {
  width: 100%;
  text-align: center;
}
hr {
  border: none;
  height: 1px;
  background-color: #e5e5e5;
}
.primary {
  color: var(--primary);
}
.caps {
  text-transform: uppercase;
}
.link {
  font-size: 14px;
  font-family: Montserrat-Medium;
  letter-spacing: 0;
  transition: color 300ms;
  &:hover {
    color: #000;
  }

  &.back {
    display: flex;
    align-items: center;

    span {
      display: block;
      width: 5px;height: 5px;
      border-top: 1px solid var(--primary);
      border-left: 1px solid var(--primary);
      transform: rotate(-45deg);
      margin-right: 5px;
      transition: all 300ms;
    }

    &:hover {

      span {
        border-top: 1px solid #000;
        border-left: 1px solid #000;
      }
    }
  }
}
.grey-bg {
    background-color: var(--grey);
}
.bg-primary {
  background-color: var(--primary) !important;
}
.white-bg {
  background-color: #fff;
}
.read-more {
  color: #2c47f3;
}
.text-center {
  text-align: center;
}
.padding{
    padding: 4rem 0;
}
.padding-large {
  padding: 8rem 0;
}
.mb-xs {
  margin-bottom: 1rem;
}
.mb-sm {
  margin-bottom: 2rem;
}
.mb-md {
  margin-bottom: 3rem;
}
.mb-lg {
  margin-bottom: 4rem;
}
.mb-xl {
  margin-bottom: 7rem;
}
.mb-xxl {
  margin-bottom: 9rem;

  @media screen and(max-width: $bp-xs) {
      margin-bottom: 5rem;
  }
}
.mt-xs {
  margin-top: 1rem;
}
.mt-sm {
  margin-top: 2rem;
}
.mt-md {
  margin-top: 3rem;
}
.mt-lg {
  margin-top: 4rem;
}
.mt-xl {
  margin-top: 7rem;
}
.mt-xxl {
  margin-top: 9rem;
}
.container, .container-lg {
  padding: 0 2rem;
  &-md {
    max-width: 950px;
    margin: 0 auto;
  }
}

// .container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
//   width: 100% !important;
// }
// .row>* {
//   padding-right: 2rem;
//   padding-left: 2rem;
// }

.hidden {
  display: none;
}

.navbar-light .navbar-nav .dropdown-toggle.nav-link {
  color: #000;
}

.dropdown-item.active, .dropdown-item:active {
  color: inherit;
  text-decoration: none;
  background-color: inherit;
}
`;

export default GlobalStyles;
