import { Link } from "./link";
import { Extent } from "./extent";

interface Collection {
  id: string;
  title?: string;
  description?: string;
  links: Link[];
  extent: Extent;
  itemType: string;
  crs: string[];
}

interface Collections {
  links: Link[];
  collections: Collection[];
}

export type { Collection, Collections };
