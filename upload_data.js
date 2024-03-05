const xlsx = require('xlsx')

const workbook = xlsx.readFile('datos.xlsx')
const sheet_list = workbook.SheetNames
const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_list[0]])

console.log(data)