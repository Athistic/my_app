import { Box } from "@mui/material";
interface MainImageDisplayProps {
  url: string;
}
const MainImageDisplay = ({ url }: MainImageDisplayProps) => {
  return (
    <Box>
      <img src={url} width="500px" height="200px" />
    </Box>
  );
};

export default MainImageDisplay;
