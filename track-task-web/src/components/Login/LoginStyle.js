import { displayPartsToString } from "typescript";
import loginImg from "./loginbackground.png";

const loginBackgroundStyle = {
  backgroundImage: `url{${loginImg}}`,
  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  minWidth: "100%",
  minHeight: "100vh",
  backgroundAttachement: "fixed",
};

export default loginBackgroundStyle;
