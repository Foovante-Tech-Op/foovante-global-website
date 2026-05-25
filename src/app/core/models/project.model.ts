export interface Project {
  id: string;
  name: string;
  place: string;
  type: string;
  standard: string;
  vintage: string;
  price: number;
  available: number;
  target: number;
  raised: number;
  irr: number;
  sdg: number[];
  img?: string;
}
