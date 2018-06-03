import nock from 'nock'
import api from '@/api'
import user from './fixtures/user'

describe('api', () => {
  it('searches for the user', async () => {
    // arranje
    const expectedUser = 'kuroski'
    nock('https://api.github.com')
      .get(`/users/${expectedUser}`)
      .reply(200, user.success)

    // act
    const result = await api.searchUser(expectedUser)

    // assert
    expect(result).toEqual(user.success)
  })
})