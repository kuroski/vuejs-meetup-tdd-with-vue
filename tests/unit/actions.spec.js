import flushPromises from 'flush-promises'
import actions from '@/store/actions'
import api from '@/api'
import user from './fixtures/user'

describe('store actions', () => {
  let commit

  beforeEach(() => {
    commit = jest.fn()
  })

  it('searches for user', async () => {
    // arranje
    const expectedUser = 'kuroski'
    api.searchUser = jest.fn().mockResolvedValue(user.success)
    // act
    await actions.SEARCH_USER({ commit }, { username: expectedUser })
    await flushPromises()
    // assert
    expect(api.searchUser).toHaveBeenCalledWith(expectedUser)
    expect(commit).toHaveBeenCalledWith('SET_USER', user.success)
  })
})