import { URLBody, URLParams } from "./url";

type GetOptions = {
  params?: URLParams;
};

type PostOptions = {
  body?: URLBody;
  params?: URLParams;
};

export type { GetOptions, PostOptions };
