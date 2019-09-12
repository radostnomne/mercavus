import { isPossibleHobbyYear } from '../../../../src/components/hobby/hobby.service'

describe('Hobby service', () => {
    it('isPossibleYear: should return true', () => {
        const result = isPossibleHobbyYear('2005')
        expect(result).toBeTruthy()
    })

    it('isPossibleYear: should return false', () => {
        const result = isPossibleHobbyYear('1234')
        expect(result).toBeFalsy()
    })
})
