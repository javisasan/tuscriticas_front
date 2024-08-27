export type Invoice = {
  id: string;
  slug: string;
  title: string;
  originalTitle: string;
  providerId: string;
  releaseDate: string;
  overview: string;
  averageDate: number;
  date: string;
};
/*
export interface Movie {
  id: string;
  slug: string;
  title: string;
  originalTitle: string;
  releaseDate: string;
  overview: string;
  thumbImage: string;
  profileImage: string;
  averageRate: number;
  createdAt: string
};
*/

export interface Movie {
  id: string;
  slug: string;
  title: string;
  originalTitle: string;
  providerId: string;
  releaseDate: string;
  overview: string;
  thumbImage: string;
  profileImage: string;
  timesViewed: number;
  averageRate: number;
};
