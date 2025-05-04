import { Box } from "@mui/material";
import LogoutButtonComponent from "../components/logout-button.component";
import { VirtualizedList } from "../components/virtualized-list";
export default function HomePage() {
  return (
    <Box
      sx={{
        width: "100vw",
      }}
    >
      <LogoutButtonComponent />
      <VirtualizedList />
    </Box>
  );
}
