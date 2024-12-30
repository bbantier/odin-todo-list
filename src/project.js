class Project {
  constructor(name) {
    this.name = name;
  }
}

export default createProject = (name) => {
  const newProject = new Project(name);
}