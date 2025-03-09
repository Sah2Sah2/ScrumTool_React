export default class Task {
    constructor(name, status = 'ToDo', priority = 'Medium', description = '') {
      this.id = Date.now(); 
      this.name = name;
      this.status = status; 
      this.priority = priority; 
      this.description = description;
    }
  }
  