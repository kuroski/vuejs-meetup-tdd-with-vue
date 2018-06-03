import { shallowMount } from '@vue/test-utils'
import VUserSearchForm from '@/components/VUserSearchForm'

describe('VUserSearchForm', () => {
  let props

  const build = () => {
    const wrapper = shallowMount(VUserSearchForm, {
      propsData: props,
    })
    return {
      wrapper,
      input: () => wrapper.find('input'),
      button: () => wrapper.find('button'),
    }
  }

  beforeEach(() => {
    props = {
      search: jest.fn()
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
    const { input, button } = build()
    // assert
    expect(input().exists()).toBe(true)
    expect(button().exists()).toBe(true)
  })

  it('calls search function with search term on submit', () => {
    // arranje
    const expectedUser = 'kuroki'
    const { input, button } = build()
    // act
    input().element.value = expectedUser
    input().trigger('input')
    button().trigger('click')
    button().trigger('submit')
    // assert
    expect(props.search).toHaveBeenCalledWith(expectedUser)
  })
})