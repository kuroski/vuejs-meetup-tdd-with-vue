import { shallowMount } from '@vue/test-utils'
import VUserProfile from '@/components/VUserProfile'
import user from './fixtures/user'

describe('VUserProfile', () => {
  let props

  const build = () => {
    const wrapper = shallowMount(VUserProfile, {
      propsData: props,
    })
    return {
      wrapper,
      avatar: () => wrapper.find('.user-profile__avatar'),
      name: () => wrapper.find('.user-profile__name')
    }
  }

  beforeEach(() => {
    props = {
      user: user.success
    }
  })

  it('renders the component', () => {
    // arranje
    const { wrapper } = build()
    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main components', () => {
    // arranje
    const { avatar, name } = build()
    // assert
    expect(avatar().exists()).toBe(true)
    expect(avatar().attributes().src).toBe(props.user.avatar_url)
    expect(name().exists()).toBe(true)
    expect(name().text()).toBe(props.user.name)
  })
})