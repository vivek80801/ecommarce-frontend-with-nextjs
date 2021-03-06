export interface user {
    id: number;
    name: string;
    password: string;
    email: string;
    auth: boolean;
    isAdmin: boolean;
}
export const users: user[] = [
    {
        id: 1,
        name: "vivek",
        password: "vivek",
        email: "vivek@gmail.com",
        auth: false,
        isAdmin: true,
    },
    {
        id: 2,
        name: "root",
        password: "root",
        email: "root@gmail.com",
        auth: false,
        isAdmin: false,
    },
    {
        id: 3,
        name: "sohan",
        password: "sohan",
        email: "sohan@gmail.com",
        auth: false,
        isAdmin: false,
    },
    {
        id: 4,
        name: "rohan",
        password: "rohan",
        email: "rohan@gmail.com",
        auth: false,
        isAdmin: false,
    },
    {
        id: 5,
        name: "mohan",
        password: "mohan",
        email: "mohan@gmail.com",
        auth: false,
        isAdmin: false,
    },
    {
        id: 6,
        name: "mohit",
        password: "mohit",
        email: "mohit@gmail.com",
        auth: false,
        isAdmin: false,
    },
    {
        id: 7,
        name: "sona",
        password: "sona",
        email: "sona@gmail.com",
        auth: false,
        isAdmin: false,
    },
    {
        id: 8,
        name: "mona",
        password: "mona",
        email: "mona@gmail.com",
        auth: false,
        isAdmin: false,
    },
    {
        id: 9,
        name: "ram",
        password: "ram",
        email: "ram@gmail.com",
        auth: false,
        isAdmin: false
    },
];
