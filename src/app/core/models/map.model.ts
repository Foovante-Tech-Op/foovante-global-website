export interface MapPoint {
  name: string;
  country: string;
  type: 'forestry' | 'energy' | 'agri' | 'waste';
  lat: number;
  lng: number;
}
