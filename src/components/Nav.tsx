import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  background: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    padding: 0;
    margin: 0;
    display: flex;

    > li {
      list-style-type: none;
      width: 33.333%;
      text-align: center;

      > a {
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: center;
        align-items: center;

        .icon {
          width: 30px;
          height: 30px;
        }

        &.selected {
          color: #0d4470;
          .icon{
            fill: #0d4470;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
      <NavWrapper>
          <ul>
              <li>
                  <NavLink to="/tags" activeClassName="selected">
                      <Icon name="labels"/>标签页</NavLink>
              </li>
              <li>
                  <NavLink to="/money" activeClassName="selected">
                      <Icon name="money"/>记账页</NavLink>
              </li>
              <li>
                  <NavLink to="/statistics" activeClassName="selected">
                      <Icon name="statistics" />统计页</NavLink>
              </li>
          </ul>
      </NavWrapper>
  )
}

export default Nav;