import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ArticleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "1rem 0",
  backgroundColor: "#f7f7f7",
  "& .MuiLink-root": {
    display: "block",
    textAlign: "right",
  },
}));

export default ArticleWrapper;
