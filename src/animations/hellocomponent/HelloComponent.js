import React from 'react';
import './HelloComponent.css'

function HelloComponent() {
  return (
    <div className="hello-parent">
         <svg className="hello-word" viewBox="0 0 365 365">
           <g id="H-letter">
             <line className="H-left-stroke" x1={17} y1={0} x2={17} y2={124} stroke="#fffaf0" fill="none" strokeWidth={34} />
             <line className="H-mid-stroke" x1={33} y1={62} x2={68} y2={62} stroke="#fffaf0" fill="none" strokeWidth={34} />
             <line className="H-right-stroke" x1={84} y1={0} x2={84} y2={124} stroke="#fffaf0" fill="none" strokeWidth={34} />
           </g>
           <g id="E-letter">
             <line className="E-left-stroke" x1={138} y1={0} x2={138} y2={124} stroke="#fffaf0" fill="none" strokeWidth={34} />
             <line className="E-top-stroke" x1={154} y1={13} x2={201} y2={13} stroke="#fffaf0" fill="none" strokeWidth={34} />
             <line className="E-mid-stroke" x1={154} y1={62} x2={196} y2={62} stroke="#fffaf0" fill="none" strokeWidth={30} />
             <line className="E-bottom-stroke" x1={154} y1={109} x2={201} y2={109} stroke="#fffaf0" fill="none" strokeWidth={30} />
           </g>
           <g id="L-one-letter">
             <line className="L-one-long-stroke" x1={17} y1={153} x2={17} y2={277} stroke="#fffaf0" fill="none" strokeWidth={34} />
             <line className="L-one-short-stroke" x1={33} y1={260} x2={77} y2={260} stroke="#fffaf0" fill="none" strokeWidth={34} />
           </g>
           <g id="L-two-letter">
             <line className="L-two-long-stroke" x1={104} y1={153} x2={104} y2={277} stroke="#fffaf0" fill="none" strokeWidth={34} />
             <line className="L-two-short-stroke" x1={120} y1={260} x2={164} y2={260} stroke="#fffaf0" fill="none" strokeWidth={34} />
           </g>
           <g id="O-letter">
             <circle className="O-stroke" cx={231} cy={215} r={48} stroke="#fffaf0" fill="none" strokeWidth={31} />
           </g>
           <g id="red-dot">

             <line x1={325} y1={260} x2={325} y2={260} stroke="#8e1c00" className="red-dot" />
           </g>
         </svg>
       </div>
  );
}

export default HelloComponent;
