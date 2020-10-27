/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";

const styleObj = {
  position: "absolute",
  top: ".5rem",
  right: ".5rem",
  zIndex: 1,
};

const ColorModeSelect = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <button
      sx={styleObj}
      onClick={(e) => {
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
    >
      Toggle {colorMode === "default" ? "Dark" : "Light"}
    </button>
  );
};

export default ColorModeSelect;
