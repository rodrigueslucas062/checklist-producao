import { checklistItems } from "@/app/utils/ckecklists";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="space-y-4 py-12">
        {checklistItems.map((group, index) => (
          <div key={index} className="space-y-2">
            <h2 className="font-semibold text-2xl">{group.category}</h2>
            {group.items.map((item) => (
              <div key={index} className="flex flex-col space-y-2">
                <label
                  htmlFor={item.text}
                  className="flex cursor-pointer items-center"
                >
                  <input
                    type="checkbox"
                    id={item.text}
                    value=""
                    className="size-4 appearance-none border cursor-pointer border-gray-300  rounded-md mr-2 hover:border-indigo-500 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
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