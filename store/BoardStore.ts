import { getExercisesGroupedByColumn } from "@/lib/getExercisesGroupedByColumn";
import { create } from "zustand";

type BoardState = {
  board: Board;
  getBoard: () => void;
};

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getExercisesGroupedByColumn();
    // set({ board });
  },
}));
