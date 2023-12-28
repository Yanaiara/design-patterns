interface Task {
  display(): void;
}

const createSimpleTask = (taskName: string): Task => ({
  display: () => console.log(`Simple Task: ${taskName}`)
});

const createImportantTask = (taskName: string): Task => ({
  display: () => console.log(`Important Task: ${taskName}`)
});

export { createSimpleTask, createImportantTask };  export type { Task };

