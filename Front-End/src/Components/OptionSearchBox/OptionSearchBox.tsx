import { FunctionComponent } from "react";
type props = {
  searchOptionBorderRadiusValue: string;
  searchOptionWidthValue: string;
  searchOptionHeightValue: string;
  searchOptionPlaceholderValue: string;
  searchOptionListValue: string;
  searchOptionBorderOrNot: string;
  searchOptionBoxPaddingLeft: string;
  searchOptions: any;
  fontFamily: string;
  fontSize: string;
  searchColor: any
  
  
  
  // BoxColor: any;
  // searchColor:any;
};
const OptionSearchBox: FunctionComponent<props> = ({
  searchOptionBorderRadiusValue,
  searchOptionWidthValue,
  searchOptionHeightValue,
  searchOptionPlaceholderValue,
  searchOptionListValue,
  searchOptionBorderOrNot,
  searchOptionBoxPaddingLeft,
  searchOptions,
  fontFamily,
  fontSize,
  searchColor,
  
   
  // BoxColor,
 
  // searchColor,
}) => {
  return (
    <>
      <input
        className="searchBox"
        list={searchOptionListValue}
        type="text"
        placeholder={searchOptionPlaceholderValue}
        style={{
          borderRadius: ` ${searchOptionBorderRadiusValue}`,
          width: `${searchOptionWidthValue}`,
          height: `${searchOptionHeightValue}`,
          border: `${searchOptionBorderOrNot}`,
          paddingLeft: `${searchOptionBoxPaddingLeft}`,
          fontFamily: `${fontFamily}`,
          fontSize: `${fontSize}`,
          color: `${searchColor}`,
      
          // color: `${BoxColor}`,
          
          // color: `${searchColor}`
        }}
      />
      <datalist id={searchOptionListValue}>
        {searchOptions.map((Optionsvalue: any, key: number) => (
          <option key={key} value={Optionsvalue} />
        ))}
      </datalist>
    </>
  );
};

export default OptionSearchBox;
