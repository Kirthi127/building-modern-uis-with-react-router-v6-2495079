const categories = [
  {
    name: "Information Technology",
    id: "3d-printing-and-design",
    sessions: [
      {
        name: "C218 UI/UX Design for Apps",
        id: "ui-ux-design-for-apps",
        desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
        speaker: {
          name: "Azhar Kamar",
          title: "Lecturer",
          org: "RP",
        },
      },
      {
        name: "C346 Mobile App Development",
        id: "mobile-app-development",
        desc: "In this module, students will learn the basics of creating Android Applications.",
        speaker: {
          name: "Derek Lee",
          title: "Lecturer",
          org: "RP",
        },
      },
    ],
  },
  {
    name: "Financial Technology",
    id: "ai-and-robotics",
    sessions: [
      {
        name: "C237 Software Application Development",
        id: "automating-user-testing",
        desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
        speaker: {
          name: "Hannah Lim",
          title: "Lecturer",
          org: "RP",
        },
      },
      {
        name: "C372 Payment Technologies",
        id: "security-in-age-of-ai",
        desc: "This module introduces students to different payment technologies and systems.",
        speaker: {
          name: "Magdalene Lim",
          title: "Senior Lecturer",
          org: "RP",
        },
      },
    ],
  },
];

export function getSession({ sessionId, catId }) {
  return categories
    .find(({ id }) => id === catId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getCategory(catId) {
  return categories.find(({ id }) => id === catId);
}

export function getCategories() {
  return categories.map(({ name, id }) => ({ name, id }));
}
