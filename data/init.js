db = db.getSiblingDB("fastapi");

const users = JSON.parse(cat('/docker-entrypoint-initdb.d/users.json'));
db.users.insertMany(users);

const skills = JSON.parse(cat('/docker-entrypoint-initdb.d/skills.json'));
db.skills.insertMany(skills);

const outcomes = JSON.parse(cat('/docker-entrypoint-initdb.d/outcomes.json'));
db.learningoutcomes.insertMany(outcomes);

//const subjects = JSON.parse(cat('/docker-entrypoint-initdb.d/subjects.json'));
//db.subjects.insertMany(subjects);

const titleMemories = JSON.parse(cat('/docker-entrypoint-initdb.d/titlememories.json'));
db.titleMemories.insertMany(titleMemories);

const permissions = JSON.parse(cat('/docker-entrypoint-initdb.d/permissions.json'));
db.permissions.insertMany(permissions);

