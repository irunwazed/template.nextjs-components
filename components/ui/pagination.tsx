import * as React from "react";

import { cn } from "@/lib/utils";

interface PaginationProps extends React.HTMLAttributes<HTMLUListElement> {
  totalPage: number,
  pageCurrent: number,
  setPageCurrent: any,
}

const Pagination = React.forwardRef<
  HTMLUListElement,
  PaginationProps
>(({ className, totalPage, pageCurrent, setPageCurrent  }, ref) => {

  const pageList = () => {
    let data = [];

    if (pageCurrent > 1) {
      data.push(
        <li
          key={0}
          className="px-2 py-2 text-[10px] bg-slate-200 hover:bg-slate-300/80 cursor-pointer rounded-l-md"
          onClick={() => setPageCurrent(pageCurrent - 1)}
        >
          Prev
        </li>
      );
    } else {
      data.push(
        <li
          key={0}
          className="px-2 py-2 text-[10px]  bg-slate-100  cursor-pointer rounded-l-md"
        >
          Prev
        </li>
      );
    }



    if (pageCurrent - 2 > 1) {
      data.push(
        <li
          key={1}
          className="px-4 py-2 text-[10px] bg-slate-100 hover:bg-slate-300/80 cursor-pointer "
        >
          1
        </li>
      );
    }

    if (pageCurrent - 3 > 1) {
      data.push(
        <li
          key={-1}
          className="px-4 py-2 text-[10px] bg-slate-100  cursor-pointer "
        >
          ...
        </li>
      );
    }

    for (let i = pageCurrent - 2; i <= pageCurrent + 2 && i <= totalPage; i++) {
      if (i < 1) continue;
      if (i == pageCurrent) {
        data.push(
          <li
            key={i}
            className="px-4 py-2 text-[10px] bg-slate-200 hover:opacity-80 text-slate-800 cursor-pointer"
          >
            {i}
          </li>
        );
      } else {
        data.push(
          <li
            key={i}
            className="px-4 py-2 text-[10px] bg-slate-100 hover:bg-slate-300/80 cursor-pointer "
            onClick={() => setPageCurrent(i)}
          >
            {i}
          </li>
        );
      }
    }

    if (pageCurrent + 3 < totalPage) {
      data.push(
        <li
          key={totalPage + 2}
          className="px-4 py-2 text-[10px] bg-slate-100  cursor-pointer "
        >
          ...
        </li>
      );
    }

    if (pageCurrent + 2 < totalPage) {
      data.push(
        <li
          key={totalPage}
          className="px-4 py-2 text-[10px] bg-slate-100 hover:bg-slate-300/80 cursor-pointer "
          onClick={() => setPageCurrent(totalPage)}
        >
          {totalPage}
        </li>
      );
    }

    if (pageCurrent < totalPage) {
      data.push(
        <li
          key={totalPage + 1}
          className="px-2 py-2 text-[10px] bg-slate-200 hover:bg-slate-300/80 cursor-pointer rounded-r-md"
          onClick={() => setPageCurrent(pageCurrent + 1)}
        >
          Next
        </li>
      );
    } else {
      data.push(
        <li
          key={totalPage + 1}
          className="px-2 py-2 text-[10px]  bg-slate-100  cursor-pointer rounded-l-md"
        >
          Next
        </li>
      );
    }

    return data;
  };

  return (
    <ul
      ref={ref}
      className={cn("flex gap-[2px] text-slate-500 my-1 text-[10px]", className)}
    >
      {pageList()}
    </ul>
  );
});
Pagination.displayName = "Pagination";

export { Pagination };
