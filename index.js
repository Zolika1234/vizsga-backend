const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const express = require("express")
const app = express();

app.use(express.json());

function getStartOfWeek(year, week) {
    const d = new Date(year, 0, 4); // január 4.
    d.setDate(d.getDate() - (d.getDay() || 7) + 1 + (week - 1) * 7);
    return d;
}

app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany({
        include: {
            posts: true,
        },
    });
    res.json(users);    
    }); 


app.get("/posts/weeks/:week", async (req, res) => {
    const { week } = req.params;
    const year = new Date().getFullYear();
    const startOfWeek = getStartOfWeek(year, week);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);

    const posts = await prisma.post.findMany({
        where: {
            date: {
                gte: startOfWeek,
                lte: endOfWeek
            }
        },
        orderBy: {date: "asc"},
    });
    res.json(posts);
});


app.get("/posts/months/:month", async (req, res) => {
    const { month } = req.params;
    const year = new Date().getFullYear();
    const startOfMonth = new Date(year, month - 1, 1);
    const endOfMonth = new Date(year, month, 0);

    const posts = await prisma.post.findMany({
        where: {
            date: {
                gte: startOfMonth,
                lte: endOfMonth
            }
        },
        orderBy: {date: "asc"},
    });
    res.json(posts);
});

   

app.listen(3000, () => {    console.log("Fut a szerver");
}); 