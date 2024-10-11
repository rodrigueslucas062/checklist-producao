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
    <div className="flex flex-col justify-center items-center bg-gray-300 dark:bg-zinc-900 py-12">
      <div className="space-y-8 p-4 border border-violet-400 rounded-xl">
        {checklistItems.map((group, index) => (
          <div key={index} className="space-y-2">
            <h2 className="font-semibold text-2xl">{group.category}</h2>
            {group.items.map((item) => (
              <div key={item.text} className="flex flex-col space-y-1">
                <label
                  htmlFor={item.text}
                  className="flex cursor-pointer items-center"
                >
                  <input
                    type="checkbox"
                    id={item.text}
                    value=""
                    className="size-4 appearance-none border cursor-pointer border-gray-300 rounded-md mr-2 hover:border-violet-500 checked:bg-no-repeat checked:bg-center checked:border-violet-500 checked:bg-violet-100"
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
        <div className="sticky bottom-4 w-full bg-zinc-950/90 p-2 backdrop-blur-sm rounded-2xl">
          <div className="h-5 bg-violet-300 rounded-full relative">
            <div
              className="h-full bg-purple-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
            <p className="absolute inset-0 flex items-center justify-center text-zinc-900 text-sm font-semibold">
              {Math.round(progress)}% concluído
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
