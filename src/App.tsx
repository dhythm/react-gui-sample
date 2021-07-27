import React from "react";
import { Text } from "react-gui/dist/exports/text";
import { useHover } from "react-gui/use-hover";

const App: React.FunctionComponent = () => {
  const [hovered, onHoverChange] = React.useState(false);
  const ref = useHover({ onHoverChange });
  return (
    <div className="App">
      <Text>Hello, World!</Text>
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
