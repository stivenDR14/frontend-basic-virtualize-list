import { ReactNode, FC } from "react";
import { Card, CardContent, Box, useTheme, useMediaQuery } from "@mui/material";
import {
  AccountCircle,
  BusinessCenter,
  LightbulbOutlined,
  Notifications,
  Star,
} from "@mui/icons-material";

interface CardGenericProps {
  children: ReactNode;
  isSmall?: boolean;
}

const CardGenericComponent: FC<CardGenericProps> = ({
  children,
  isSmall = true,
}) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const maxHeight = isMdUp ? 300 : 200;

  const icons = [
    <AccountCircle fontSize="large" />,
    <BusinessCenter fontSize="large" />,
    <LightbulbOutlined fontSize="large" />,
    <Notifications fontSize="large" />,
    <Star fontSize="large" />,
  ];

  const randomIcon = icons[Math.floor(Math.random() * icons.length)];

  if (isSmall) {
    return (
      <Card
        sx={{
          display: "flex",
          maxHeight: `${maxHeight}px`,
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "33%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
            p: 2,
          }}
        >
          {randomIcon}
        </Box>
        <Box
          sx={{
            width: "67%",
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
          }}
        >
          <CardContent
            sx={{
              flex: "1 0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
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
