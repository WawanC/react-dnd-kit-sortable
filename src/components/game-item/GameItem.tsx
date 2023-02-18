import { useSortable } from "@dnd-kit/sortable";
import { FC } from "react";
import styles from "./GameItem.module.css";
import { CSS } from "@dnd-kit/utilities";

interface IGameItem {
  children: string;
}

const GameItem: FC<IGameItem> = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.children });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={styles.item}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition
      }}
    >
      {props.children}
    </div>
  );
};

export default GameItem;
