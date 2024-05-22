"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Popover } from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calender";
import {
  dateDBToDate,
  dateDBToDateText,
  dateToDateDB,
  dateToDateText,
} from "@/lib/helpers";
import { ControlTheme } from "@/components/layouts/theme";
import { cn } from "@/lib/utils";
import { Search, SearchDropDown } from "@/components/ui/search";
import { Table, Tbody, Td, Th, Thead, Theadr, Tr } from "@/components/ui/table";
import { Pagination } from "@/components/ui/pagination";

export default function Components() {
  return (
    <>
      <div className="flex bg-background dark:text-white">
        <div className="fixed h-screen border-r border-slate-600/50 w-[250px] p-5">
          <div className="text-2xl font-bold my-4">Menu</div>
          <div className="my-4">
            <ControlTheme />
          </div>

          <ul className="mt-3 ">
            <li className="hover:text-primary/50">
              <a href="https://lucide.dev/icons/">Icons</a>
            </li>
          </ul>

          {/* <label className="bg-red-500 relative rounded-full w-20 h-10 cursor-pointer" htmlFor="switch-theme2">
              <input onChange={()=> {}} id="switch-theme2" type="checkbox" className="sr-only peer"  />
              <div className="absolute size-[10px] bg-secondary-foreground rounded-full top-1 left-1 peer-checked:left-11 peer-checked:bg-red-300 transition-all duration-500"></div>
          </label> */}
        </div>
        <div className="w-full p-3 mb-[300px] ml-[250px]">
          <h2 className="font-bold my-3 text-4xl">Component</h2>
          <ButtonComponent />
          <DialogComponent />
          <PopoverComponent />
          <FormComponent />
          <DatePickerComponent />
          <SwitchComponent />
          <SearchComponent />
          <TableComponent />
        </div>
      </div>
    </>
  );
}

const ButtonComponent = () => {
  return (
    <>
      <section className="mt-8 pt-2 border-t border-slate-300">
        <h3 className="text-xl font-semibold my-1">Button</h3>
        <Button>My Button</Button>
      </section>
    </>
  );
};

const DialogComponent = () => {
  const [isDialog, setIsDialog] = useState(false);

  return (
    <>
      <section className="mt-8 pt-2 border-t border-slate-300">
        <h3 className="text-xl font-semibold my-1">Dialog</h3>
        <Button onClick={() => setIsDialog(true)}>Show Dialog</Button>
        <Dialog isShow={isDialog} setIsShow={setIsDialog} className="w-[640px]">
          <DialogHeader>
            <DialogTitle>Modal Title</DialogTitle>
            <DialogDescription>Modal Desxription</DialogDescription>
          </DialogHeader>
          <DialogContent>Content</DialogContent>
          <DialogFooter>Footer</DialogFooter>
        </Dialog>
      </section>
    </>
  );
};

const PopoverComponent = () => {
  const [isPopover, setIsPopover] = useState(false);
  return (
    <>
      <section className="mt-8 pt-2 border-t border-slate-300">
        <h3 className="text-xl font-semibold my-1">Popover</h3>
        <Button onClick={() => setIsPopover(true)}>Show Popover</Button>
        <Popover
          isShow={isPopover}
          setIsShow={setIsPopover}
          className="w-[300px]"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus autem
          cum debitis harum, laborum est corrupti deleniti, velit tempore quam
          veniam assumenda pariatur molestias, cupiditate expedita illo placeat!
          Maxime, inventore.
        </Popover>
      </section>
    </>
  );
};

const FormComponent = () => {
  const [isPopover, setIsPopover] = useState(false);
  return (
    <>
      <section className="mt-8 pt-2 border-t border-slate-300">
        <h3 className="text-xl font-semibold my-1">Form</h3>
        <div className="flex justify-center">
          <div className="w-[320px] border border-slate-100 p-6 rounded-md shadow-md">
            <form action="">
              <h5 className="text-xl font-semibold justify-center items-center flex mt-3">
                Login Form
              </h5>
              <div className="grid grid-flow-row mt-2">
                <div className="grid grid-flow-row mt-3">
                  <label
                    className="text-sm text-secondary-foreground mb-1"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <Input id="username" />
                </div>
                <div className="grid grid-flow-row mt-3">
                  <label
                    className="text-sm text-secondary-foreground mb-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Input id="password" type="password" />
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <Button type="submit">Masuk</Button>
                <Button type="button" variant={"outline"}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

const DatePickerComponent = () => {
  const [isPopover, setIsPopover] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    onChangeDatePicker(date);
  }, [date]);

  let dateTest = [new Date(2017, 0, 1)];

  const onChangeDatePicker = (_date?: Date) => {};

  const onChangeDateDefault = (e: any) => {
    console.log("targer", e.target.value);
  };
  return (
    <>
      <section className="mt-8 pt-2 border-t border-slate-300">
        <h3 className="text-xl font-semibold my-1">Date Picker</h3>
        <div className="flex justify-center">
          <div className="w-[500px] border border-slate-100 p-6 rounded-md shadow-md">
            <label
              className="text-sm text-secondary-foreground mb-1"
              htmlFor=""
            >
              Pilih date picker
            </label>
            <Input
              readOnly
              onClick={() => setIsPopover(true)}
              value={date ? dateToDateDB(date) : ""}
            />
            <Popover
              isShow={isPopover}
              setIsShow={setIsPopover}
              className="w-[280px] p-0"
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </Popover>
            <hr className="my-5" />

            <label
              className="text-sm text-secondary-foreground mb-1"
              htmlFor=""
            >
              Ubah Date Picker ke Text
            </label>
            <div>{date ? dateToDateText(date) : "Pilih date"}</div>
            <hr className="my-5" />

            <label
              className="text-sm text-secondary-foreground mb-1"
              htmlFor=""
            >
              Date picker default
            </label>
            <Input type="date" onChange={onChangeDateDefault} />
            <hr className="my-5" />

            <label
              className="text-sm text-secondary-foreground mb-1"
              htmlFor=""
            >
              Ubah Date DB ke Text
            </label>
            <div>{date ? dateDBToDateText("2024-04-02") : "Pilih date"}</div>

            <label
              className="text-sm text-secondary-foreground mb-1"
              htmlFor=""
            >
              Ubah Date DB ke Date ke Text
            </label>
            <div>{dateToDateText(dateDBToDate("2024-05-02"))}</div>
          </div>
        </div>
      </section>
    </>
  );
};

const SwitchComponent = () => {
  const [isMustCheck, setIsMustCheck] = useState<boolean | undefined>();

  const handleChange = (e: any) => {
    // console.log("tes", e.target.checked)
  };

  const handleChangeMust = (e: any) => {
    setIsMustCheck(!e.target.checked);
  };
  return (
    <>
      <section className="mt-8 pt-2 border-t border-slate-300">
        <h3 className="text-xl font-semibold my-1">Switch</h3>
        <div className="flex justify-center items-center flex-col">
          <div className="w-[500px]">
            <div className="flex justify-center flex-col items-center">
              <label htmlFor="">Check</label>
              <label
                className="bg-secondary rounded-full w-20 h-10 relative cursor-pointer"
                htmlFor="check"
              >
                <input
                  onChange={handleChange}
                  id="check"
                  type="checkbox"
                  className="sr-only peer"
                />
                <div className="w-2/5 h-4/5 bg-secondary-foreground rounded-full relative top-1 left-1 peer-checked:left-11 peer-checked:bg-green-500 transition-all duration-500"></div>
              </label>
            </div>
            <hr className="my-3" />
            <div className="flex justify-center flex-col items-center">
              <label htmlFor="">Check with null</label>
              <label
                className="bg-secondary rounded-full w-[100px] h-10 relative cursor-pointer"
                htmlFor="must-check"
              >
                <input
                  onChange={handleChangeMust}
                  id="must-check"
                  type="checkbox"
                  className="sr-only peer"
                />
                <div
                  className={cn(
                    "size-[30px] bg-secondary-foreground rounded-full relative top-1 left-[34px] transition-all duration-500" +
                      (isMustCheck == undefined
                        ? ""
                        : isMustCheck == true
                        ? " left-[66px] bg-green-500"
                        : " left-[4px] bg-red-500")
                  )}
                ></div>
              </label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const SearchComponent = () => {
  let data: Array<SearchDropDown> = [
    {
      id: 1,
      name: "aka213123",
    },

    {
      id: 2,
      name: "aka22222",
    },
  ];

  const [result, setResult] = useState<SearchDropDown>();
  return (
    <>
      <section className="mt-8 pt-2 border-t border-slate-300">
        <h3 className="text-xl font-semibold my-1">Search Component</h3>
        <Search data={data} setResult={setResult} className="w-full" />
      </section>
    </>
  );
};


const TableComponent = () => {

  const [pageCurrent, setPageCurrent] = useState(1);

  return (
    <>
      <section className="mt-8 pt-2 border-t border-slate-300">
        <h3 className="text-xl font-semibold my-1">Table</h3>

        <div className="w-[1000px]">
        <Input className="w-[30%] focus:w-full transition-all duration-500 " />
        <Table className="w-full">
          <Thead>
            <Theadr>
              <Th className="w-[10px]">No</Th>
              <Th>Name</Th>
              <Th>Nip</Th>
            </Theadr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Aka</Td>
              <Td>1997</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Aka</Td>
              <Td>1997</Td>
            </Tr>
          </Tbody>
        </Table>


        <div className="flex justify-between px-3 py-2">
          <div className="mt-4 text-slate-500">Show 1 of 100</div>
          <Pagination pageCurrent={pageCurrent} setPageCurrent={setPageCurrent} totalPage={10} />
        </div>

        </div>
      </section>
    </>
  );
};

