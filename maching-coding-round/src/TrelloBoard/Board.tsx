import { useState } from "react";
import { TrelloBoard, TrelloData } from "./data/constant";
import BoardItem from "./BoardItem";

const Board = () => {
  const [data, setData] = useState<TrelloBoard>(TrelloData);
  const addCardToList = (id: string, name: string) => {
    const newData = data.map((list) => {
      if (list.id === id) {
        list.cards.push({
          id: `card-${list.cards.length + 1}`,
          title: name,
          description: "Dummy description for now",
        });
      }
      return list;
    });
    setData(newData);
  };
  const dragoverHandler = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    console.log("drag over");
    ev.dataTransfer.dropEffect = "move";
  };

  const dropHandler = function (
    ev: React.DragEvent<HTMLDivElement>,
    dropListId: string
  ) {
    ev.preventDefault();
    const { listId: currentListId, id } = JSON.parse(
      ev.dataTransfer.getData("text/plain")
    );
    // handle case of dropping in the same list
    if (dropListId === currentListId) return;

    const newData = [...data];
    const currentListIdx = data.findIndex((list) => {
      return list.id === currentListId;
    });
    const targetListIdx = data.findIndex((list) => {
      return list.id === dropListId;
    });
    const elementToMove = newData[currentListIdx].cards.filter(
      (card) => card.id === id
    )[0];
    newData[targetListIdx].cards.push(elementToMove);
    newData[currentListIdx].cards = newData[currentListIdx].cards.filter(
      (card) => card.id !== id
    );
    setData(newData);
  };

  const addNewCategory = () => {
    const newData = [...data];
    newData.push({
      id: `list-id-${data.length}`,
      name: "New Category",
      cards: [],
    });
    setData(newData);
  };

  return (
    <div className="flex gap-2 p-2">
      {data.map((list) => (
        <div
          key={list.id}
          className="flex flex-col w-[repeat(3fr)] bg-[#ebeeef] p-5 flex-1"
          onDragOver={dragoverHandler}
          onDrop={(e) => dropHandler(e, list.id)}
        >
          <h3 className=" text-black mb-3">{list.name}</h3>
          <BoardItem
            listId={list.id}
            data={list.cards}
            addCard={(name: string) => {
              addCardToList(list.id, name);
            }}
          />
        </div>
      ))}
      <div className="flex-[0.5]">
        <button
          className="px-2 py-1 flex-[0.5] bg-slate-950 text-lg text-white border-1 rounded-lg inline"
          onClick={addNewCategory}
        >
          Add a new catergory
        </button>
      </div>
    </div>
  );
};

export default Board;
