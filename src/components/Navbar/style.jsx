import styled from 'styled-components';

export const Nav = styled.div`
  .navbar-custom {
    background: #2c3e50;
    font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    border: none;

    a:&focus {
      outline: none;
    }

    .navbar-brand {
      color: white;

      &:hover,
      &:focus,
      &:active {
        color: white;
      }
    }
  }

  @media (min-width: 768px) {
    .navbar-custom {
      padding: 10px 0;
      -webkit-transition: padding 0.3s;
      -moz-transition: padding 0.3s;
      transition: padding 0.3s;

      .navbar-brand {
        font-size: 2em;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
      }

      &.affix {
        padding: 10px 0;

        .navbar-brand {
          font-size: 1.5em;
        }
      }
    }
  }
`;

