require('dotenv').config();
const fs = require('fs');

const readFile = () => JSON.parse(fs.readFileSync(process.env.JSON_PATH));
    
const formattingDatas = async () => {
    const data = await readFile();
    return `
COVID-19 no Brasil

Casos recuperados: ${data.recoveredCases}
Casos em acompanhamento: ${data.accompaniment}

Casos confirmados
Acumulado: ${data.accumulated}
Novos casos: ${data.newCases}

Óbitos confirmados
Acumulado: ${data.accidentalDeaths}
Novos óbitos: ${data.newDeaths}

Atualizado ${data.updateDate}
Fonte: https://covid.saude.gov.br/ 
    

    `;
}                                           

module.exports = formattingDatas; 
