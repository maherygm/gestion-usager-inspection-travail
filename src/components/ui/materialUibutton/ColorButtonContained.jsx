import { Button } from "@mui/material";
import styled from "styled-components";

const ColorButtonContained = styled(Button)(({ theme }) => ({
  color: "#ffff",
  backgroundColor: "var(--primaryColor-alpha-09)",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#9034ff",
  },
}));

export default ColorButtonContained;
