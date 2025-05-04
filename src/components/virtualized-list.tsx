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
import { useListGradient } from "../hooks/list-gradent.hook";

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

  const { showTopGradient, showBottomGradient } = useListGradient();

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
        className="virtualized-container"
        sx={{
          height: "100%",
          overflow: "auto",
          width: "100%",
          maxWidth: 800,
          p: 4,
          position: "relative",
        }}
        ref={containerRef}
      >
        <Box
          sx={{
            position: "sticky",
            top: "-32px",
            left: 0,
            right: 0,
            height: "60px",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            zIndex: 2,
            display: showTopGradient ? "block" : "none",
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
        />
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
                    <a href={rating.url} target="_blank">
                      {virtualizedListLabels.link}
                    </a>
                  </Box>
                </CardGenericComponent>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            position: "sticky",
            bottom: "-32px",
            left: 0,
            right: 0,
            height: "60px",
            background:
              "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            zIndex: 2,
            display: showBottomGradient ? "block" : "none",
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
        />
      </Box>
    </Box>
  );
};
