export const filterTasks1 = (tasks) => {
    const filteredTasks = [];

    tasks.forEach(task => {
        if (task.state === 'completed' && task.id % 2 !== 0) filteredTasks.push(task);
    });

    return filteredTasks;
};

export const filterTasks2 = (tasks) => {
    const filteredTasks = [];

    tasks.forEach(task => {
        if (filteredTasks.find(addedTasks => addedTasks.id === task.id) === undefined) { 
            filteredTasks.push(task);
        }
    });

    return filteredTasks;
};