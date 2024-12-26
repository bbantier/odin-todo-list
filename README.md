# The Odin Project - Todo List App

This project is built as a part of learning JavaScript with [The Odin Project](https://www.theodinproject.com).

## Expected features

### Creating todo items

Every todo item should have the following properties:

- Mandatory:
  - title
  - description
  - duedate (_could be optional maybe?_)
  - priority (_should have a default option_)
- Optional:
  - notes
  - checklist

### Separate projects or lists of todos

The app should allow users to create new projects/lists in which the todos will reside. When first opening the app, the user should be presented with a 'default' project.

## User interface capabilities

### View all projects

The application should allow the user to view all todo items no matter what project they're a part of.

### View all the todos in each project

When a project is selected, the user should be presented with the list of the todo items whithin that project, displaying their title and duedate.

There shoud be a colored element that reflects the priority of each item.

### Expand a single todo

The user shoud be able to expend a todo item to see its details and edit them.

### Delete a todo item

The user should be able to delete any existing todo item.

## Extra tools

### date-fns

The formatting and manipulation of dates and times could be done by using the [date-fns](https://github.com/date-fns/date-fns) library.

### Local storage

As a basic way of making things somewhat persistent, the app will use localStorage. This will allow the todos to be saved, although only in the browser and device that was used to create them.
