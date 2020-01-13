import React from 'react';

const Task = props => {
    console.log(props.task.completed);
    return (
        <div
            className={`task${props.task.completed ? ' completed':''}`}
            onClick={() => props.toggleTask(props.task.id)}
        >
            <p>{props.task.name}</p>
        </div>
    );
};

export default Task;

// import React from 'react';

// const Item = props => {
//   return (
//     <div
//       className={`item${props.item.purchased ? ' purchased' : ''}`}
//       onClick={() => props.toggleItem(props.item.id)}
//     >
//       <p>{props.item.name}</p>
//     </div>
//   );
// };

// export default Item;