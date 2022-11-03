import { v4 as uuidv4 } from 'uuid';

const dummyData = [
  {
    id: uuidv4(),
    title: 'todo1',
    tasks: [
      { id: uuidv4(), title: 'react' },
      { id: uuidv4(), title: 'react' },
      { id: uuidv4(), title: 'react' },
    ],
  },
  {
    id: uuidv4(),
    title: 'todo2',
    tasks: [
      { id: uuidv4(), title: 'react' },
      { id: uuidv4(), title: 'react' },
      { id: uuidv4(), title: 'react' },
    ],
  },
  {
    id: uuidv4(),
    title: 'todo3',
    tasks: [
      { id: uuidv4(), title: 'react' },
      { id: uuidv4(), title: 'react' },
      { id: uuidv4(), title: 'react' },
    ],
  },
];

export default dummyData;
