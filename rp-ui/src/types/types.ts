export interface RP_File {
    content: string;
    template: string;
    user: string;
    date: string;
    fileName: string;
}

export interface RP_Directory {
    dirName: string;
    files: RP_File[];
}

export interface RP_Plans {
    directories: RP_Directory[];
}

export enum TodoStatus {
    todo = "TODO",
    active = "ACTIVE",
    done = "DONE",
}

export interface RP_Topics {
    topics: TopicFields[];
}

export interface TopicFields {
    topicId: string;
    topicName: string;
    topicDescription: string;
    topicGoals: string;
    topicSources: JSX.Element | undefined;
    topicTodos: RP_Todos[];
}

export interface RP_Todos {
    todoTitle: string;
    isDone: boolean;
}
  