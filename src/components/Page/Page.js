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
  .container{
    display:inline-block;
  }
  .ItSAMe{
    margin:10px;
    position:relative;
    float:left;
    padding-left:750px;
    margin-top:2em;
  }
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
        position:absolute;
        float: left;
        width:50%;
        height:100%;
        padding-left:350px;
        padding-bottom:200px;


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
              padding-left:100px;
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
              padding-left:20px;


            }
          }

          p {
            @media(max-width:900px){
              padding-left:100px;
              font-size:0.8rem;

            }
            @media(max-width:576px){
              padding-left:20px;
              font-size:0.8rem;



            }

          }
        }








`;

export default Page;
