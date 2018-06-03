jest.mock('@/store/actions')
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import state from '@/store/state'
import actions from '@/store/actions'
import TheUserView from '@/views/TheUserView'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'
import user from './fixtures/user'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TheUserView', () => {

  const build = () => {
    const store = new Vuex.Store({
      state,
      actions,
    })

    const wrapper = shallowMount(TheUserView, {
      localVue,
      store,
    })

    return {
      wrapper,
      userSearchForm: () => wrapper.find(VUserSearchForm),
      userProfile: () => wrapper.find(VUserProfile),
    }
  }

  it('renders the view', () => {
    // arranje
    const { wrapper } = build()
    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main view components', () => {
    // arranje
    const { userSearchForm, userProfile } = build()
    // assert
    expect(userSearchForm().exists()).toBe(true)
    expect(userProfile().exists()).toBe(true)
  })

  it('passes a binded search function to user search form component', () => {
    // arranje
    const { wrapper, userSearchForm } = build()
    // assert
    expect(userSearchForm().vm.search).toBe(wrapper.vm.searchUser)
  })

  it('passes a binded user prop to user profile component', () => {
    // arranje
    state.user = user.success
    const { wrapper, userProfile } = build()
    // assert
    expect(wrapper.vm.user).toBe(state.user)
    expect(userProfile().vm.user).toBe(wrapper.vm.user)
  })

  it('searches for a user', () => {
    // arranje
    const expectedUser = 'kuroski'
    const { wrapper } = build()
    // act
    wrapper.vm.searchUser(expectedUser)
    // assert
    expect(actions.SEARCH_USER).toHaveBeenCalled()
    expect(actions.SEARCH_USER.mock.calls[0][1]).toEqual({ username: expectedUser })
  })
})