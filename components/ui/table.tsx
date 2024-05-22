import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div>
    <table ref={ref} className={cn("w-full", className)} {...props} />
  </div>
));
Table.displayName = "Table";

const Thead = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("", className)} {...props} />
));
Thead.displayName = "Thead";

const Tbody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("", className)} {...props} />
));
Tbody.displayName = "Tbody";

const Theadr = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn("border-slate-300/60 border-b-[2px] bg-slate-200", className)}
    {...props}
  />
));
Theadr.displayName = "Theadr";

const Tr = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "odd:bg-white even:bg-slate-100  hover:bg-slate-300/60",
      className
    )}
    {...props}
  />
));
Tr.displayName = "Tr";

const Th = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th ref={ref} className={cn("py-4 px-5", className)} {...props} />
));
Th.displayName = "Th";

const Td = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td ref={ref} className={cn("py-4 px-5", className)} {...props} />
));
Td.displayName = "Td";

export { Table, Thead, Theadr, Tbody, Tr, Th, Td };
