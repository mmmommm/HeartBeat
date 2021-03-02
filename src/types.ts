export type NavItem = {
  name: string;
  as?: string;
  href: string;
};
export type NavItems = NavItem[];

export type Artist = {
  name: string;
  img: string;
};

export type Song = {
  artist: string;
  name: string;
  img: string;
};
