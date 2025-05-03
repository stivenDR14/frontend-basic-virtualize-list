import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ratingsService } from "../services/ratings.services";
import { Rating } from "../models";
import CardGenericComponent from "./card-generic.component";
import { useVirtualize } from "../hooks/virtualize.hook";
import { virtualizedListLabels } from "../utils/labels";

export const VirtualizedList = () => {
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const itemHeight = isMdUp ? 216 : 166;

  const { containerRef, visibleItems, totalHeight, getItemIndex } =
    useVirtualize({
      items: ratings,
      itemHeight,
    });

  useEffect(() => {
    ratingsService
      .getRatingsWithCache()
      .then((data) => {
        setRatings(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error loading ratings data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          margin: 2,
          marginTop: {
            xs: 6,
            md: 2,
          },
        }}
      >
        {virtualizedListLabels.reviews}
      </Typography>
      <Box
        sx={{
          height: "100%",
          overflow: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: 800,
          p: 2,
        }}
        ref={containerRef}
      >
        <Box sx={{ height: `${totalHeight}px`, position: "relative" }}>
          {visibleItems.map((rating, index) => {
            const itemIndex = getItemIndex(rating);
            const top = itemIndex * itemHeight;

            return (
              <Box
                key={`${rating.product_name}-${rating.reviewer_name}-${index}`}
                sx={{
                  position: "absolute",
                  top: `${top}px`,
                  width: "100%",
                  height: `${itemHeight}px`,
                }}
              >
                <CardGenericComponent
                  isSmall={true}
                  ratingScore={rating.review_rating}
                >
                  <Box sx={{ height: "100%" }}>
                    <Typography variant="h6" gutterBottom>
                      <strong>{rating.product_name}</strong>
                    </Typography>
                    <Typography variant="subtitle2">
                      <strong>
                        {virtualizedListLabels.by} {rating.reviewer_name}
                      </strong>
                    </Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                      {rating.review_title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {rating.review_text}
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      sx={{ mt: 1 }}
                    >
                      {new Date(rating.review_date).toLocaleDateString()}
                    </Typography>
                  </Box>
                </CardGenericComponent>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
