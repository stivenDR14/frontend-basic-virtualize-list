import axios from "axios";
import { Rating } from "../models";
import { errorMessages } from "../utils/labels";

export const ratingsService = {
  getRatingsWithCache: async (): Promise<Rating[]> => {
    try {
      //get from local storage
      const ratings = localStorage.getItem("ratings");
      if (ratings) {
        return JSON.parse(ratings);
      } else {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }?type=json_records&sql=select * from csvgetter limit 2000`
        );
        if (!response) {
          throw new Error(errorMessages.errorEndpoint);
        }
        localStorage.setItem("ratings", JSON.stringify(response.data));
        return response.data;
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new Error(errorMessages.errorEndpoint);
    }
  },
};
