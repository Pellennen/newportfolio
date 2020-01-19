import styled from "styled-components";

const Page = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .slide-content {
        display:block;
        width:50%;
        height:100%;


        .txt-wrapper {
          position:relative;
          display:table-cell;
          vertical-align:middle;

          h2 {
            margin:0;
            font-size:4.3rem;
            margin-bottom:2rem;
            line-height:1;
            font-weight:600;
          }

          h3 {
            margin:0;
            font-size:2rem;
            margin-bottom:2rem;
            line-height:1;
            font-weight:400;

            span {color:#ccc;}
          }


`;

export default Page;
