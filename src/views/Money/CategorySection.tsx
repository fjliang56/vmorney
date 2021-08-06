import styled from 'styled-components';

const CategorySection = styled.section`
  font-size: 24px; 
    > ul{
      display: flex;
      background: #C4C4C4;
      > li {
        width: 50%;text-align: center;padding: 16px 0;
        position: relative;
        &.selected::after{
          content: '';
          display: block;
          height: 3px;
          background: #333;
          position: absolute;
          bottom:0;
          width: 100%;
          left: 0;
        }
      }
    }
`;

export {CategorySection};