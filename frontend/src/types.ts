export type NavItem = {
  name: string;
  as?: string;
  href: string;
};
export type NavItems = NavItem[];

export type Artist = {
  name: string;
  detail: string;
  img: string;
};

export type Artists = Artist[]

export type Song = {
  artist: string;
  name: string;
  detail: string;
  img: string;
};
