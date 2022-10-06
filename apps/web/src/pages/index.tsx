import classNames from "classnames";
import { useState } from "react";

import { BookIcon, ChevronDownIcon, ChevronUpIcon } from "../assets";

export default function Web() {
  const [openTab, setOpenTab] = useState<"changes" | "history">("changes");
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);
  return (
    <div className="flex min-h-screen">
      <div className="border-r w-[350px] border-border-1 flex flex-col">
        <button
          onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
          className={classNames("p-2 border-border-1 gap-4 flex items-center", {
            "bg-dark-2": dropdownIsOpen,
            "bg-dark-3 border-b": !dropdownIsOpen,
          })}
        >
          <BookIcon />
          <div className="flex flex-col flex-1 items-start">
            <div className="text-[11px] text-text-secondary leading-tight">
              Current Repository
            </div>
            <div className="text-[12px] text-text-primary leading-tight font-bold">
              kaktus-superstore
            </div>
          </div>
          {dropdownIsOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        {dropdownIsOpen ? (
          <div className="bg-dark-2 flex-1 p-2 flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 rounded-md text-xs bg-dark-3 px-2 focus:outline-none focus:ring-1 focus:ring-blue-1 text-white border border-border-1"
                placeholder="Summary (required)"
              />
              <button className="flex gap-2 items-center border-border-1 border px-2 py-1 text-xs hover:ring-1 hover:ring-white rounded-md">
                <div className="text-text-primary">Add</div>
                <ChevronDownIcon />
              </button>
            </div>
            <div className="text-xs font-bold text-text-primary pt-2">
              Recent
            </div>
          </div>
        ) : (
          <>
            <div className="flex border-b border-border-1">
              <button
                onClick={() => setOpenTab("changes")}
                className={classNames(
                  "flex justify-center items-center flex-1 pt-2 pb-1 text-xs bg-dark-2 text-white border-b-2",
                  {
                    "border-b-transparent": openTab === "history",
                    "border-b-blue-1": openTab === "changes",
                  }
                )}
              >
                Changes
              </button>
              <div className="w-px bg-black" />
              <button
                onClick={() => setOpenTab("history")}
                className={classNames(
                  "flex justify-center items-center flex-1 pt-2 pb-1 text-xs bg-dark-2 text-white border-b-2",
                  {
                    "border-b-transparent": openTab === "changes",
                    "border-b-blue-1": openTab === "history",
                  }
                )}
              >
                History
              </button>
            </div>
            <div className="py-2 bg-dark-1 text-xs flex justify-center items-center text-white border-b border-border-1">
              0 changed files
            </div>
            <div className="flex-1 border-b border-border-1 bg-dark-2"></div>
            <div className="flex flex-col gap-4 p-2 bg-dark-1">
              <div className="flex gap-2">
                <div className="rounded-full h-6 w-6 bg-black"></div>
                <input
                  type="text"
                  className="flex-1 rounded-md text-xs bg-dark-3 px-2 focus:outline-none focus:ring-1 focus:ring-blue-1 text-white border-border-1 border"
                  placeholder="Summary (required)"
                />
              </div>
              <textarea
                placeholder="Description"
                className="h-20 p-1 rounded-md text-xs w-full bg-dark-3 resize-none focus:outline-none focus:ring-1 focus:ring-blue-1 text-white border border-border-1"
              ></textarea>
              <button className="flex justify-center items-center bg-blue-1 text-sm text-text-primary rounded-md py-1">
                Commit to<span className="font-bold">&nbsp;main</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
