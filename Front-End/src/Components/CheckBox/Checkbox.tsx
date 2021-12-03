import React from "react";
import "./Checkbox.css"

// interface Props {
// border: string;
// color: string;
// height: string;
// radius: string;
// width: string;
// boxShadow:string
// }

function Checkbox() {
  // border,
  // color,
  // height,
  // radius,
  // width,
  // boxShadow


  return (
    // <div className="toppings-list-item">
    
        <input style={{
          "height": "20px",
          "width": "19px",
          "border": "0.5px solid red",
          "borderRadius":"15px",
          "backgroundColor":"inherit",
          "boxShadow":   "inset -1px -1px 12px #9a9a9a61",
          "cursor": "default",
          "appearance": "auto",
          "boxSizing": "border-box"}}
          type="checkbox"


          // style={{
            // backgroundColor: color,
            // border,
            // boxShadow,
            // borderRadius: radius,
            // height,
            // width,   
        //  }}
        />
      //  </div>
  

  );
}

export default Checkbox;




















// import React from "react";

// interface Props {
//   isChecked: boolean;
//   border?:string;
//   height:string;
//   width:string;
//   radius:string;
//   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   label: string;
// }

// const Checkbox = (props: Props) => {
//   return (
//     <div>
//       <label htmlFor={props.label}>{props.label}</label>
//       <input
//         type="checkbox"
//         checked={props.isChecked}
//         onChange={props.handleChange}

//       />
//     </div>
//   );
// };
// export default Checkbox;



