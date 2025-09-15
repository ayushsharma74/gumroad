import * as React from "react";

import { classNames } from "$app/utils/classNames";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={classNames(
        "file:text-foreground flex w-full min-w-0 rounded-sm border border-black bg-transparent px-4 py-9 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[16px] placeholder:text-zinc-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-600 dark:bg-black",
        "focus-visible:border-black focus-visible:ring-[#FF90E8]",
        "aria-invalid:ring-[#DC341E] dark:aria-invalid:ring-[#DC341E] aria-invalid:border-[#DC341E] dark:aria-invalid:border-[#DC341E]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
