import * as React from "react";
import { createCast } from "ts-safe-cast";

import { register } from "$app/utils/serverComponentUtil";

import { Button } from "../Button";

type Props = {
  avatar_url: string;
  title: string;
};

export const SubscribePreview = ({ avatar_url, title }: Props) => (
  <div className="flex h-full w-full flex-row items-center justify-start gap-5 p-5">
    <img className="w-1/4 rounded-full border border-border md:rounded-[8rem]" src={avatar_url} />
    <section className="flex flex-col gap-3">
      <span className="logo-full text-zinc-300" />
      <h1 className="text-ellipsis text-4xl">{title}</h1>
      <div>
        <Button color="accent">Subscribe</Button>
      </div>
    </section>
  </div>
);

export default register({ component: SubscribePreview, propParser: createCast() });
