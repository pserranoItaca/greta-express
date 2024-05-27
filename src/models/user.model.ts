export default interface UserModel {
  id: string;
  email: string;
  username: string;
  password: string;
  rating: number;
  films_saved: string[];
}
