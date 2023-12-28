const TaskManager = (() => {
  let instance: { tasks: string[] } | null = null;

  const getInstance = () => {
      if (!instance) {
          instance = { tasks: [] };
      }
      return instance;
  };

  const addTask = (task: string) => {
      const manager = getInstance();
      manager.tasks.push(task);
  };

  const getTasks = () => {
      const manager = getInstance();
      return manager.tasks;
  };

  return { getInstance, addTask, getTasks };
})();

export default TaskManager;
