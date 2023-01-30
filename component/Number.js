import { useState } from "react";
import { Alert } from "react-native";

const NumberCount = (props) => {
    const [numberCount,setNumberCount] = useState(0);
    if (props.num != "" && props.num != numberCount) {
        setNumberCount(props.num)
    }
    if(props.num == 0){
      console.log("dead!!!");
    }
  return numberCount;
};

export default NumberCount;
