const Database = require('./db')
const createProffy = require('./createProffy')
Database.then(async(db) => {
    // Inserir os dados
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v",
        whatsapp: "51989898989",
        bio: "Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.<br><br>Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição:Aprenda a fazer dinheiro com isso!"
    }

    classValue = {
        subject: 1,
        cost: "20"
            // O Proffy_ID virá pelo Banco de Dados
    }

    classScheduleValues = [
        // Class_ID virá pelo Banco de Dados após cadastrarmos a aula
        {
            weekday: 1,
            time_from: 720,
            time_to: 1210
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1210
        }
    ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })

    // Consultar os dados inseridos

    // // // Todos os Proffys
    const selectedProffys = await db.all("SELECT * FROM proffys");
    // console.log(selectedProffys);

    // Consultar as classes de um determinado professor e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
        // console.log(selectedClassesAndProffys);

    // O horário que a pessoa trabalho, por exemplo, é das 8h - 18h
    // O Time_from (8h) precisa ser menor ou igual ao horário solicitado
    // O Time_to (18h) precisa ser acima
    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)
        // console.log(selectedClassesSchedules)

})