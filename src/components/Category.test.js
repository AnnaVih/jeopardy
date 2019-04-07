import React from 'react'
import { mount, shallow } from 'enzyme'
import { fakeServer } from 'sinon'
import { Category, LinkedCategory } from './Category'

import { categories, clues } from '../fixtures/fixtures'

const props = { category: categories[0]}

describe('Category', () => {
    let server;
    beforeEach(() => {
        server = fakeServer.create();
        server.respondWith(
            'GET',
            `http://jservice.io/api/clues?category=${props.category.id}`,
            [
                200,
                {'Content-Type': 'application/json'},
                JSON.stringify(clues)
            ]
        )
    })

    describe('when creating a new category', () => {
      let wrapper

      beforeEach( async () => {
        wrapper = mount(<Category {...props}/>)
        await server.respond();
      })

      it('initialize the clues in state', () => {
        expect(wrapper.state().clues).toEqual(clues)
      })

      it('renders the correct title ', () => {
        expect(wrapper.find('h2').text()).toEqual(props.category.title)
      })

      it('renders the correct number of clues', () => {
        expect(wrapper.find('Clue').length).toEqual(clues.length)
      })

    })
})

describe('LinkedCategory', () => {
    const wrapper = shallow(<LinkedCategory/>)

    it('creates the link to navigate home', () => {
        expect(wrapper.find('Link h4').text()).toEqual('Home')
    })

    it('creates a category component', () => {
        expect(wrapper.find('Category').exists()).toBe(true)
    })
})