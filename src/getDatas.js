require('dotenv').config();
const fs = require('fs');

const readFile = () => JSON.parse(fs.readFileSync(process.env.JSON_PATH));
    
const formattingDatas = async () => {
    const data = await readFile();
    return `
        ${data.updateDate} 

        ----- Covid-19 -----
        Total de casos: ${data.accumulated}, 
        Recuperados: ${data.recoveredCases},
        Novos casos: ${data.newCases},
        Total de mortes: ${data.accidentalDeaths},
        Novas mortes: ${data.newDeaths}
        --------------------

        https://covid.saude.gov.br/
        `;
}                                           

module.exports = formattingDatas; 
