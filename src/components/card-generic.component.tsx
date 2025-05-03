import { ReactNode, FC } from "react";
import { Card, CardContent, Box, useTheme, useMediaQuery } from "@mui/material";
import { Star } from "@mui/icons-material";

interface CardGenericProps {
  children: ReactNode;
  isSmall?: boolean;
  ratingScore?: number;
}

const CardGenericComponent: FC<CardGenericProps> = ({
  children,
  isSmall = true,
  ratingScore,
}) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const maxHeight = isMdUp ? 200 : 150;
  const arrayOfStars = Array.from({ length: ratingScore ?? 0 }, (_, index) => (
    <Star key={index} fontSize={isMdUp ? "large" : "small"} />
  ));

  if (isSmall) {
    return (
      <Card
        sx={{
          display: "flex",
          height: `${maxHeight}px`,
          width: "100%",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            width: isMdUp ? "33%" : "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
            p: 2,
          }}
        >
          {arrayOfStars}
        </Box>
        <Box
          sx={{
            width: isMdUp ? "67%" : "55%",
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
            maxHeight: `${maxHeight}px`,
          }}
        >
          <CardContent
            sx={{
              flex: "1 0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxHeight: `${maxHeight}px`,
              overflow: "auto",
            }}
          >
            {children}
          </CardContent>
        </Box>
      </Card>
    );
  } else {
    return (
      <Card
        sx={{
          width: "100%",
          maxWidth: 450,
          margin: "0 auto",
          p: { xs: 2, sm: 3 },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </CardContent>
      </Card>
    );
  }
};

export default CardGenericComponent;
