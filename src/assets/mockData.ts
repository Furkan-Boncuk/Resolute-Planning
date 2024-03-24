import { RP_Plans } from "../types/types";

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
                    fileName: "File Name"
                }
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
                    fileName: "File Name"
                }
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
                    fileName: "File Name"
                }
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
                    fileName: "File Name"
                }
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
                    fileName: "File Name"
                }
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
                    fileName: "File Name"
                }
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
                    fileName: "File Name"
                }
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
                    fileName: "File Name"
                }
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
                    fileName: "File Name"
                }
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
                    fileName: "File Name"
                }
            ],    
        },
    ]
};

// localStorage'dan alınan değer her zaman bir string veya null olacaktır, bu nedenle tipi RP_Plans | null olarak belirtilmelidir.
export const plans: RP_Plans | null = JSON.parse(localStorage.getItem("plans") || "null");

// plans değişkeni null veya undefined ise kontrolü düzgün yapılmalıdır.
if (!plans) {
    localStorage.setItem("plans", JSON.stringify(initialPlans)); // plans nesnesini JSON formatına dönüştürün
}
