import { shallowMount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'
import VUserSearchForm from '@/components/VUserSearchForm'

let localVue = createLocalVue()
localVue.use(ElementUI)

describe('VUserSearchForm', () => {
  let props

  const build = () => {
    const wrapper = shallowMount(VUserSearchForm, {
      propsData: props,
      localVue,
    })
    return {
      wrapper,
      input: () => wrapper.find('.input-with-select'),
      button: () => wrapper.find('.submit'),
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
    const { wrapper, button } = build()
    wrapper.setData({
      term: expectedUser
    })

    // act
    button().trigger('click')
    button().trigger('submit')
    // assert
    expect(props.search).toHaveBeenCalledWith(expectedUser)
  })
})