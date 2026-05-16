export const FORM_CONFIG = {
  users: {
    title: "Add New User",
    fields: [
      { name: "name", type: "text" },
      { name: "email", type: "email" },
      { name: "address", type: "text" },
      { name: "phone", type: "text" },
    ],
  },

  projects: {
    title: "Add New Project",
    fields: [
      { name: "title", type: "text" },
      { name: "description", type: "text" },
      { name: "status", type: "text" },
      { name: "deadline", type: "date" },
    ],
  },

  developers: {
    title: "Add New Developer",
    fields: [
      { name: "name", type: "text" },
      { name: "email", type: "email" },
      { name: "role", type: "text" },
      { name: "stack", type: "text" },
    ],
  },
};