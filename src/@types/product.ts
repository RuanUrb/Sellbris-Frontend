export type Product = {
  title: string;
  description: string;
  id: string;
  images: Image[];
  price: number;
  location: string;
  date: Date
};

type Image = {
  url: string
  filename: string
}
