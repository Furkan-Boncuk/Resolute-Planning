import { RP_Plans } from "../types/types";
import { RP_Topics } from "../types/types";

const initialPlans: RP_Plans = {
  directories: [
    {
      dirName: "General",
      files: [
        {
          content: "File Content",
          date: "18.03.2004-03:30",
          user: "Furkan Boncuk",
          template: "choosen template",
          fileName: "File Name",
        },
      ],
    },
    {
      dirName: "General-2",
      files: [
        {
          content: "File Content",
          date: "18.03.2004-03:30",
          user: "Furkan Boncuk",
          template: "choosen template",
          fileName: "File Name",
        },
      ],
    },
    {
      dirName: "General-3",
      files: [
        {
          content: "File Content",
          date: "18.03.2004-03:30",
          user: "Furkan Boncuk",
          template: "choosen template",
          fileName: "File Name",
        },
      ],
    },
    {
      dirName: "General-4",
      files: [
        {
          content: "File Content",
          date: "18.03.2004-03:30",
          user: "Furkan Boncuk",
          template: "choosen template",
          fileName: "File Name",
        },
      ],
    },
    {
      dirName: "General-5",
      files: [
        {
          content: "File Content",
          date: "18.03.2004-03:30",
          user: "Furkan Boncuk",
          template: "choosen template",
          fileName: "File Name",
        },
      ],
    },
    {
      dirName: "General-6",
      files: [
        {
          content: "File Content",
          date: "18.03.2004-03:30",
          user: "Furkan Boncuk",
          template: "choosen template",
          fileName: "File Name",
        },
      ],
    },
    {
      dirName: "General-7",
      files: [
        {
          content: "File Content",
          date: "18.03.2004-03:30",
          user: "Furkan Boncuk",
          template: "choosen template",
          fileName: "File Name",
        },
      ],
    },
    {
      dirName: "General-8",
      files: [
        {
          content: "File Content",
          date: "18.03.2004-03:30",
          user: "Furkan Boncuk",
          template: "choosen template",
          fileName: "File Name",
        },
      ],
    },
    {
      dirName: "General-9",
      files: [
        {
          content: "File Content",
          date: "18.03.2004-03:30",
          user: "Furkan Boncuk",
          template: "choosen template",
          fileName: "File Name",
        },
      ],
    },
    {
      dirName: "General-10",
      files: [
        {
          content: "File Content",
          date: "18.03.2004-03:30",
          user: "Furkan Boncuk",
          template: "choosen template",
          fileName: "File Name",
        },
      ],
    },
  ],
};

// localStorage'dan alınan değer her zaman bir string veya null olacaktır, bu nedenle tipi RP_Plans | null olarak belirtilmelidir.
export const plans: RP_Plans | null = JSON.parse(
  localStorage.getItem("plans") || "null"
);

// plans değişkeni null veya undefined ise kontrolü düzgün yapılmalıdır.
if (!plans) {
  localStorage.setItem("plans", JSON.stringify(initialPlans)); // plans nesnesini JSON formatına dönüştürün
}

const initialTopics: RP_Topics = {
  topics: [
    {
      topicId: "1",
      topicName: "Vize Sınavları",
      topicDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis maiores dolorem enim cum ab beatae veritatis molestiae ad vel, temporibus nam possimus sint fugiat facilis fugit officiis similique inventore voluptas dolore iusto! Vel ratione delectus enim illo, laudantium quae, eligendi voluptate quod possimus tenetur quaerat non officiis voluptatum accusamus iusto.",
      topicGoals:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis maiores dolorem enim cum ab beatae veritatis molestiae ad vel, temporibus nam possimus sint fugiat facilis fugit officiis similique inventore voluptas dolore iusto! Vel ratione delectus enim illo, laudantium quae, eligendi voluptate quod possimus tenetur quaerat non officiis voluptatum accusamus iusto.",
      topicSources: undefined,
      topicTodos: [
        { todoTitle: "Lorem ipsum dolor sit amet 1", isDone: false },
        { todoTitle: "Lorem ipsum dolor sit amet 2", isDone: false },
        { todoTitle: "Lorem ipsum dolor sit amet 3", isDone: false },
      ],
    },
    {
      topicId: "2",
      topicName: "Spor",
      topicDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis maiores dolorem enim cum ab beatae veritatis molestiae ad vel, temporibus nam possimus sint fugiat facilis fugit officiis similique inventore voluptas dolore iusto! Vel ratione delectus enim illo, laudantium quae, eligendi voluptate quod possimus tenetur quaerat non officiis voluptatum accusamus iusto.",
      topicGoals:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis maiores dolorem enim cum ab beatae veritatis molestiae ad vel, temporibus nam possimus sint fugiat facilis fugit officiis similique inventore voluptas dolore iusto! Vel ratione delectus enim illo, laudantium quae, eligendi voluptate quod possimus tenetur quaerat non officiis voluptatum accusamus iusto.",
      topicSources: undefined,
      topicTodos: [
        { todoTitle: "Lorem ipsum dolor sit amet 4", isDone: false },
        { todoTitle: "Lorem ipsum dolor sit amet 5", isDone: false },
        { todoTitle: "Lorem ipsum dolor sit amet 6", isDone: false },
      ],
    },
    {
      topicId: "3",
      topicName: "Beslenme",
      topicDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis maiores dolorem enim cum ab beatae veritatis molestiae ad vel, temporibus nam possimus sint fugiat facilis fugit officiis similique inventore voluptas dolore iusto! Vel ratione delectus enim illo, laudantium quae, eligendi voluptate quod possimus tenetur quaerat non officiis voluptatum accusamus iusto.",
      topicGoals:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis maiores dolorem enim cum ab beatae veritatis molestiae ad vel, temporibus nam possimus sint fugiat facilis fugit officiis similique inventore voluptas dolore iusto! Vel ratione delectus enim illo, laudantium quae, eligendi voluptate quod possimus tenetur quaerat non officiis voluptatum accusamus iusto.",
      topicSources: undefined,
      topicTodos: [
        { todoTitle: "Lorem ipsum dolor sit amet 7", isDone: false },
        { todoTitle: "Lorem ipsum dolor sit amet 8", isDone: false },
        { todoTitle: "Lorem ipsum dolor sit amet 9", isDone: false },
      ],
    },
  ],
};

const calendarTopics: RP_Topics | null = localStorage.getItem("calendarTopics")
  ? JSON.parse(localStorage.getItem("calendarTopics")!)
  : JSON.parse("null");

if (!calendarTopics || !calendarTopics?.topics) {
  localStorage.setItem("calendarTopics", JSON.stringify(initialTopics));
}
