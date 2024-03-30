import { useState } from "react";
import { TrelloListItem } from "./data/constant";

interface BoardItemProps {
  data: TrelloListItem[];
  addCard: (name: string) => void;
  listId: string;
}

const BoardItem = ({ data, addCard, listId }: BoardItemProps) => {
  const [showButton, setShowButton] = useState<boolean>(true);
  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    console.log("drag start", e);
    e.dataTransfer.setData("text/plain", JSON.stringify({ listId, id }));
  };

  return (
    <>
      {data.map((card) => (
        <div
          key={card.id}
          className="bg-white p-2 mb-3"
          draggable
          onDragStart={(e) => dragStartHandler(e, card.id)}
        >
          <span className="inline px-2 bg-[#f7a41d] py-1 rounded-lg mb-2">
            {card.title}
          </span>
          <p className="mt-2">{card.description}</p>
        </div>
      ))}
      {showButton && (
        <button
          className="text-xl bg-transparent text-left"
          onClick={() => setShowButton((v) => !v)}
        >
          {" "}
          + Add another card
        </button>
      )}
      {!showButton && (
        <input
          ref={(input) => input?.focus()}
          type="text"
          className="w-full border-2 border-gray-300 p-2 mt-2"
          placeholder="Add a card"
          onKeyUp={(e: React.KeyboardEvent<HTMLElement>) => {
            if (e.key === "Enter") {
              setShowButton(true);
              // Add card to the list
              addCard((e.target as HTMLInputElement).value);
              console.log(
                "Add card to the list",
                (e.target as HTMLInputElement).value
              );
            }
          }}
          onBlur={() => setShowButton(true)}
        />
      )}
    </>
  );
};

export default BoardItem;
