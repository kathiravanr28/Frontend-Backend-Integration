import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useTasks } from "../context/TaskContext";

const statuses = ["TODO", "IN_PROGRESS", "COMPLETED"];

const TaskBoard = () => {
  const { tasks, updateTaskStatus } = useTasks();

  const onDragEnd = (result) => {
    const { destination, draggableId } = result;
    if (!destination) return;

    const task = tasks.find((t) => t.id === parseInt(draggableId));
    if (task && task.status !== destination.droppableId) {
      updateTaskStatus(task.id, destination.droppableId);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4">
        {statuses.map((status) => (
          <Droppable droppableId={status} key={status}>
            {(provided) => (
              <div
                className="bg-gray-100 p-4 rounded w-1/3 min-h-[400px]"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className="font-bold mb-2">{status.replace("_", " ")}</h2>
                {tasks
                  .filter((t) => t.status === status)
                  .map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="bg-white p-2 mb-2 rounded shadow cursor-pointer"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="font-semibold">{task.title}</div>
                          {task.description && (
                            <div className="text-sm text-gray-600">
                              {task.description}
                            </div>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;