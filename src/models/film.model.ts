import Base from "./base.model";

export default interface Film extends Base {
  title: string;
  descript: string;
  genres: string;
  id_user: number;
  director: string;
  art: string;
  sound: string;
  cast: string;
  poster: string;
  resource: string;
  film_rating: number;
  rating: number;
  views: number;
}
