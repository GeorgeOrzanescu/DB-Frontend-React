export interface BlogArticle {
  id: number;
  title: string;
  tag: string;
  author: string;
  date: string;
  imgUrl: string;
  saying: string;
  summary: string;
  content: string;
}

export interface IpageFooterProps {
  clickPrev: () => void;
  clickNext: () => void;
}

export interface AddedArticle {
  title: string;
  tag: string;
  author: string;
  date: string;
  imgUrl: string;
  content: string;
}

export interface fetchProp {
  reRend: () => Promise<void>;
}
