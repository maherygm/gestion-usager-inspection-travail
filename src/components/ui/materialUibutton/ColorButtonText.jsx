import { Button } from "@mui/material";
import styled from "styled-components";

const ColorButtonText = styled(Button)(({ theme }) => ({
  color: "var(--primaryColor-alpha-08)",
  backgroundColor: "var(--primaryColor-alpha-002)",
  "&:hover": {
    backgroundColor: "var(--primaryColor-alpha-01)",
  },
  textTransform: "capitalize",
}));
export default ColorButtonText;
