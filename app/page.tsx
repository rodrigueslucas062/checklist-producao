"use client";

import { checklistItems } from "@/app/utils/ckecklists";
import { useState } from "react";

export default function Home() {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleCheckboxChange = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalItems = checklistItems.reduce(
    (total, group) => total + group.items.length,
    0
  );
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (checkedCount / totalItems) * 100;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="space-y-4 py-12">
        <div className="sticky bottom-4 w-full ">
          <div className="h-4 bg-gray-300 rounded-full">
            <div
              className={`h-full bg-indigo-500 rounded-full w-[${progress}%]`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center mt-2">{Math.round(progress)}% concluído</p>
        </div>
        {checklistItems.map((group, index) => (
          <div key={index} className="space-y-2">
            <h2 className="font-semibold text-2xl">{group.category}</h2>
            {group.items.map((item) => (
              <div key={item.text} className="flex flex-col space-y-2">
                <label
                  htmlFor={item.text}
                  className="flex cursor-pointer items-center"
                >
                  <input
                    type="checkbox"
                    id={item.text}
                    value=""
                    className="size-4 appearance-none border cursor-pointer border-gray-300  rounded-md mr-2 hover:border-indigo-500 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                    onChange={() => handleCheckboxChange(item.text)}
                  />
                  {item.text}
                </label>
                <span className="peer-checked/done:hidden text-xs pl-6">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
