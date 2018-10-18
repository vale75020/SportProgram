import React from "react";
import { Input, Button } from "antd";

const inputStyle = {
  minWidth: "240px",
  width: "calc(1/3*100%)",
  maxWidth: "320px"
};

const Exercice = () => (
  <div className="exercise" style={{ marginBottom: "20px" }}>
    <Input addonBefore="exercice" style={{ maxWidth: "400px" }} />
    <Input addonBefore="series" style={inputStyle} />
    <Input addonBefore="repetitions" style={inputStyle} />
    <Input addonBefore="repos" addonAfter="secondes" style={inputStyle} />
  </div>
);

const Formulaire = ({ number }) => {
   // console.log(num)
    const exercises = []
    for(let i =0; i<number; i++){
        exercises.push(<Exercice key={i}/>)
    }
  return (
    <form>
      {exercises}
      <Button type="primary" htmlType="submit">
        Envoyer le pdf
      </Button>
    </form>
  );
};

export default Formulaire;
