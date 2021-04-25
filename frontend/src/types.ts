export type NavItem = {
  name: string;
  as?: string;
  href: string;
};
export type NavItems = NavItem[];

export type Artist = {
  name: string;
  content?: string;
  viewcount?: number;
  url: string;
};

export type Artists = Artist[];

export type Song = {
  artist: string;
  name: string;
  content?: string;
  viewcount?: number;
  url: string;
};

export type Songs = Song[];

export type Request = {
  name: string;
  artist?: string;
  song?: string;
  content?: string;
}

export type Requests = Request[]
