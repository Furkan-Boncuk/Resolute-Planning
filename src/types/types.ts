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