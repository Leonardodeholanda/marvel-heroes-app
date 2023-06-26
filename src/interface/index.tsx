export interface Hero {
    id: number;
    name: string;
    thumbnail: {
      path: string;
      extension: string;
    };
    description: string;
    comics: {
      available: number;
    };
    series: {
      available: number;
    };
    events: {
      available: number;
    };
  }