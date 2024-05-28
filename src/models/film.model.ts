import Base from "./base.model";

export default interface Film extends Base {
  title: string;
  description: string;
  genres: number[];
  id_user: number;
  director: string;
  art: string;
  sound: string;
  poster: string;
  resource: string;
  film_rating: number;
  rating: number;
  views: number;
}
