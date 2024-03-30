export type TrelloListItem = {
  id: string;
  title: string;
  description: string;
};

export type TrelloList = {
  id: string;
  name: string;
  cards: TrelloListItem[];
};

export type TrelloBoard = TrelloList[];

export const TrelloData: TrelloBoard = [
  {
    id: "list-1",
    name: "To Do",
    cards: [
      {
        id: "card-1",
        title: "Learning React",
        description: "Learning React",
      },
      {
        id: "card-2",
        title: "Learning Angular",
        description: "Learning Angular",
      },
    ],
  },
  {
    id: "list-2",
    name: "Doing",
    cards: [
      {
        id: "card-3",
        title: "Learning Vue",
        description: "Learning Vue",
      },
    ],
  },
  {
    id: "list-3",
    name: "Done",
    cards: [
      {
        id: "card-4",
        title: "Learning Svelte",
        description: "Learning Svelte",
      },
    ],
  },
];
