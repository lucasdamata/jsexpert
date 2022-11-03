import mocha from 'mocha'
const { describe, it } = mocha
import chai from 'chai'
const { expect } = chai
import Person from '../src/person.js'

describe('Person', () => {
  it('should return a person instance from a string', () => {
    const person = Person.generateInstanceFromString(
      '1 bike,carro 2000 2021-11-01 2022-11-02'
    )
    const expected = {
      from: '2021-11-01',
      to: '2022-11-02',
      vehicles: ['bike', 'carro'],
      kmTraveled: "2000",
      id: '1'
    }

    expect(person).to.be.deep.equal(expected)
  });

  it('should format values', () => {
    const person = new Person({
      from: '2021-11-01',
      to: '2022-11-02',
      vehicles: ['bike', 'carro'],
      kmTraveled: "2000",
      id: '1'
    })
    const result = person.formatted("pt-BR")
    const expected = {
      id: 1,
      vehicles: 'bike e carro',
      kmTraveled: '2.000 km',
      from: '01 de novembro de 2021',
      to: '02 de novembro de 2022'
    }
    expect(result).to.be.deep.equal(expected)
  });
})