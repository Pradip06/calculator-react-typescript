import "../CheckBox/Checkbox.css";

export default function Checkbox() {
  return (
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                  />
                </div>
              </div>
    
  );
}





















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



