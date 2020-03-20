import styled from 'styled-components';

export const Search = styled.div`
  .search {
    display: flex;
    width: 100%;
  }

  .search.search--sm {
    font-size: 1.4rem;
  }

  .search.search--lg {
    font-size: 2rem;
  }

  .search .search__input {
    padding: 1em;
    flex-grow: 1;
    font-size: inherit;
    border: none;
    background-color: #EEE;
    border-radius: 3px;

  }

  .search .search__input:focus {
    outline: 0;
    background: #fff;
    box-shadow: 0 0 2px rgba(0,0,0,.8) inset;
  }

  .search .search__input::-webkit-input-placeholder {
    color: #999;
    font-weight: normal;
    font-style: italic;
  }

  .search .search__input:-moz-placeholder {
    color: #999;
    font-weight: normal;
    font-style: italic;
  }

  .search .search__input:-ms-input-placeholder {
    color: #999;
    font-weight: normal;
    font-style: italic;
  }
`;
