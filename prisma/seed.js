const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const u1 = await prisma.user.create({
    data: { 
		username: "Lovász Zoltán",
		active: true
	 }
  })

  const u2 = await prisma.user.create({
    data: { username: "Kis László",
		active: true }
  })

  const u3 = await prisma.user.create({
    data: {username: "Tóth Anton",
		active: true}
  })

  await prisma.post.createMany({
    data: [
      { 
	  "title": "Iskolagyűlés",
	  "body": "2026.03.04-én nagyszünetben iskolagyűlés",
	  active: true,
	  date: new Date("2026-03-04"),
	  userId: u1.id       
	  
	},
	 { 
	  "title": "Elmaradó óra",
	  "body": "2026.03.04-én 13A 7.órája elmarad",
	  active: true,
	  date: new Date("2026-03-04"),
	  userId: u2.id       
	  
	},
	 { 
	  "title": "Tanítás nélküli munkanap",
	  "body": "2026.03.06-án tanítás nélküli munkanap",
	  active: true,
	  date: new Date("2026-03-04"),
	  userId: u3.id       
	  
	},
	 { 
	  "title": "Szavaló verseny",
	  "body": "2026.03.06-án Szavaló verseny lesz a könyvtárban",
	  active: true,
	  date: new Date("2026-03-10"),
	  userId: u3.id       
	  
	},
	 { 
	  "title": "Iskola gyűlés",
	  "body": "2026.03.06-án iskola gyűlés lesz",
	  active: true,
	  date: new Date("2026-03-12"),
	  userId: u3.id       
	  
	},
	 { 
	  "title": "Sportnap",
	  "body": "2026.03.06-án sportnap lesz",
	  active: true,
	  date: new Date("2026-03-14"),
	  userId: u3.id       
	  
	},
	 { 
	  "title": "Tavaszi szünet",
	  "body": "2026.04.02-2026.04.10-ig tavaszi szünet lesz",
	  active: true,
	  date: new Date("2026-04-02"),
	  userId: u3.id       
	  
	},
	 { 
	  "title": "Megemlékezés",
	  "body": "2026.03.13-án Március 15 megemlékezés",
	  active: true,
	  date: new Date("2026-03-13"),
	  userId: u3.id       
	  
	},
	 { 
	  "title": "Tanítás nélküli munkanap",
	  "body": "2026.03.20-án tanítás nélküli munkanap",
	  active: true,
	  date: new Date("2026-03-20"),
	  userId: u3.id       
	  
	},
	
    ]
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
