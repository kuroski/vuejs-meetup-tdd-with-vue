import mutations from '@/store/mutations'
import user from './fixtures/user'

describe('mutations', () => {
  let state

  beforeEach(() => {
    state = {
      user: {}
    }
  })

  it('sets new user', () => {
    // arranje
    const expectedUser = user.success
    // act
    mutations.SET_USER(state, expectedUser)
    // assert
    expect(state.user).toEqual(expectedUser)
    expect(state.user).not.toBe(expectedUser)
  })
})