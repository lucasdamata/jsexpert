const { rejects, deepStrictEqual } = require("assert");
const { error } = require("./src/constants");
const File = require('./src/file')


;
(async ()=> {
  {
    const filePath = './mocks/emptyFile-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/fourItems-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/threeItems-valid.csv'
    const result = await File.csvToJson(filePath)
    const expected = [
      {
        "name": "Lucas da Mata",
        "id": 123,
        "profession": "Full Stack Developer",
        "birthDay": 2000
      },
      {
        "name": "Teste Silva",
        "id": 321,
        "profession": "QA",
        "birthDay": 2000
      },
      {
        "name": "Joaozinho",
        "id": 231,
        "profession": "Java Developer",
        "birthDay": 1992
      }
    ]

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
  }
})()