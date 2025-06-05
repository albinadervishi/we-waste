import { useQuery } from "@tanstack/react-query";
import { Skip } from "../types";
import { SKIPS_API_URL } from "../constants";
import { fourYarderImage, fortyYarderImage } from "../assets";

export interface SkipsApiParams {
  postcode: string;
  area?: string;
}

const attachSkipImage = (skip: Skip): Skip => {
  return {
    ...skip,
    image: skip.size < 20 ? fourYarderImage : fortyYarderImage,
  };
};

const fetchSkips = async ({
  postcode,
  area,
}: SkipsApiParams): Promise<Skip[]> => {
  const url = new URL(SKIPS_API_URL);
  url.searchParams.append("postcode", postcode);
  if (area) {
    url.searchParams.append("area", area);
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Failed to fetch skips: ${response.statusText}`);
  }

  const apiResponse: Skip[] = await response.json();

  return apiResponse.map(attachSkipImage);
};

export const useGetSkips = (params: SkipsApiParams) => {
  return useQuery({
    queryKey: ["skips", params.postcode, params.area],
    queryFn: () => fetchSkips(params),
    enabled: !!params.postcode,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
