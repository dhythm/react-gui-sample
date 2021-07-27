import React from "react";
import { useHover } from "react-gui/use-hover";
import { StyledView } from "./components/View";

const App: React.FunctionComponent = () => {
  const [hovered, onHoverChange] = React.useState(false);
  const ref = useHover({ onHoverChange });
  return (
    <div className="App">
      <StyledView>Hello, World!</StyledView>
      <div
        ref={ref}
        style={{
          width: 200,
          height: 200,
          margin: "50px auto",
          border: "1px solid black",
          backgroundColor: hovered ? "orange" : null,
        }}
      />
    </div>
  );
};

export default App;
