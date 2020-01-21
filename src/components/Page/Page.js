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
  ul {
    columns:2;
    width:100%;
    font-weight:600;
    font-size:20px;
    @media(max-width:870px){
      font-size:12px;
      margin-bottom:1rem;
      line-height:1;
      font-weight:600;
    }
    @media(max-width:760px){
      font-size:9px;
      margin-bottom:1rem;
      line-height:1;
      font-weight:600;
      padding-left:200px;
    }
    @media(max-width:576px){
      font-size:9px;
      margin-bottom:1rem;
      line-height:1;
      font-weight:600;
      padding-left:50px;


    }


  }
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

            @media(max-width:900px){
              font-size:2.3rem;
              margin-bottom:1rem;
              padding-left:200px;
              line-height:1;
              font-weight:600;
            }
            @media(max-width:700px){
              font-size:2.3rem;
              margin-bottom:1rem;
              line-height:1;
              font-weight:600;
            }
            @media(max-width:576px){
              margin:0;
              font-size:2.3rem;
              margin-bottom:1rem;
              line-height:1;
              font-weight:600;
              padding-left:50px;


            }
          }

          p {
            @media(max-width:900px){
              padding-left:200px;
              font-size:0.8rem;

            }
            @media(max-width:576px){
              padding-left:50px;
              font-size:0.8rem;



            }

          }
        }





`;

export default Page;
