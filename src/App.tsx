import styles from "./App.module.css";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { useState } from "react";
import GameItem from "./components/game-item/GameItem";

const App = () => {
  const [gamesList, setGamesList] = useState([
    "Dota 2",
    "League of Legends",
    "CS:GO",
    "World of Warcraft",
    "The Witcher 3"
  ]);

  const reorderGamesList = (e: DragEndEvent) => {
    if (!e.over) return;

    if (e.active.id !== e.over.id) {
      setGamesList((gamesList) => {
        const oldIdx = gamesList.indexOf(e.active.id.toString());
        const newIdx = gamesList.indexOf(e.over!.id.toString());
        return arrayMove(gamesList, oldIdx, newIdx);
      });
    }
  };

  return (
    <DndContext onDragEnd={reorderGamesList}>
      <main className={styles.main}>
        <h1>Favorite Games List</h1>
        <ul className={styles.list}>
          <SortableContext items={gamesList}>
            {gamesList.map((game) => (
              <GameItem key={game}>{game}</GameItem>
            ))}
          </SortableContext>
        </ul>
      </main>
    </DndContext>
  );
};

export default App;
