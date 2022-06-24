import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ArticleCard = styled(Box)(({ theme }) => ({
  img: {
    margin: "2rem 0",
  },
  textAlign: "right",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
  padding: "0.75rem",
  backgroundColor: "#f7f7f7",
  borderRadius: 5,
  cursor: "pointer",
  "&:hover, &:active": {
    backgroundColor: "#ff4",
    transition: "all 0.7s",
  },
}));

export default ArticleCard;
