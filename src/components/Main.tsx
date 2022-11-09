import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import dummyData from '../dummyData';

const Main: React.FC = () => {
  const [data, setData] = useState(dummyData)
  const onDragEnd = () => {
    setData(data)
  }
  return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='trello'>
          {data.map(section => (
            <>
            {section.title}
            </>
          ))}
        </div>
    </DragDropContext>
  );
};

export default Main;
