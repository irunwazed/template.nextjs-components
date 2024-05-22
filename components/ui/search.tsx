import * as React from "react";

import { cn } from "@/lib/utils";
import { useScroll } from "framer-motion";
import { Popover } from "./popover";
import { Input } from "./input";

interface SearchProps extends React.HTMLAttributes<HTMLDivElement> {
    data: Array<SearchDropDown>,
    setResult: any
}

interface SearchDropDown {
  id: number;
  name: string;
}

const Search = React.forwardRef<HTMLDivElement, SearchProps>(
  ({ className, data, setResult, children, ...props }, ref) => {
    const [isPopover, setIsPopover] = React.useState(false);
    const [dataSearch, setDataSearch] = React.useState<Array<SearchDropDown>>(
      []
    );
    const [search, setSearch] = React.useState("");

    const onChange = (e: any) => {
      let _search = e.target.value;
      setSearch(_search);
      let dataSearchtemp = data.filter((e: any) => {
        return e.name.search(_search) > -1;
      });
      setDataSearch(dataSearchtemp);
    };

    return (
      <>
          <Input
            type="text"

            className={cn(
                "w-[500px] p-2 text-y-center",
                className
            )}
            value={search}
            onFocus={() => setIsPopover(true)}
            onChange={onChange}
          />
          <Popover
            isShow={isPopover}
            setIsShow={setIsPopover}
            className={cn(
                "w-[500px] relative",
                className
            )}
          >
            {dataSearch.length > 0 ? (
              <ul>
                {dataSearch.map((e: SearchDropDown) => {
                  return (
                    <li
                      className="hover:bg-slate-200 w-full py-3 px-6"
                      key={e.id}
                      onClick={() => {
                        setSearch(e.name);
                        setIsPopover(false);
                        setResult(e)
                      }}
                    >
                      {e.name}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="w-full py-3 px-6 bg-slate-300">
                Tidak Ada Data
              </div>
            )}
          </Popover>
      </>
    );
  }
);
Search.displayName = "Search";

export { Search };

export type { SearchDropDown }
