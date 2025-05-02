import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import CardGenericComponent from "../components/card-generic.component";
import LoginForm from "../components/login-form";
import BlurredContainer from "../components/blurred-container.component";

export default function AuthPage() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        p: 2,
      }}
    >
      {isMdUp ? (
        <Grid container sx={{ maxWidth: "1200px" }}>
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BlurredContainer>
              <img
                src="/images/listas-image.webp"
                alt="Login illustration"
                style={{
                  maxWidth: "100%",
                  maxHeight: "500px",
                  objectFit: "contain",
                  display: "block",
                  maskImage:
                    "radial-gradient(circle at center, black 90%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, black 90%, transparent 100%)",
                }}
              />
            </BlurredContainer>
          </Grid>

          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardGenericComponent isSmall={false}>
              <LoginForm />
            </CardGenericComponent>
          </Grid>
        </Grid>
      ) : (
        <CardGenericComponent isSmall={false}>
          <LoginForm />
        </CardGenericComponent>
      )}
    </Box>
  );
}
