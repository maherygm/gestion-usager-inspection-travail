import { Button } from "@mui/material";
import styled from "styled-components";

const SimpleButtonText = styled(Button)(({ theme }) => ({
  color: "var(--fds)",
  backgroundColor: "var(--darkColorTransparent)",
  "&:hover": {
    backgroundColor: "var(--darkColorTransparent)",
  },
  textTransform: "capitalize",
}));
export default SimpleButtonText;
