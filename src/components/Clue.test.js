import React from 'react'
import { shallow } from 'enzyme'

import Clue from './Clue'

import { clue } from '../fixtures/fixtures'

const props = { clue }

describe('Clue', () => {
    let wrapper = shallow(<Clue {...props}/>)
    it('renders the clue value', () => {
        expect(wrapper.find('h4').text()).toEqual(clue.value.toString())
    })

    it('renders the clue question', () => {
        expect(wrapper.find('h5').at(0).text()).toEqual(clue.question)
    })

    it('renders the clue answer', () => {
        expect(wrapper.find('h5').at(1).text()).toEqual(clue.answer)
    })

    it('sets the answer with the `text-hidden` class', () => {
        expect(wrapper.find('h5').at(1).hasClass('text-hidden')).toBe(true)
    })

    it('initializes the `reveal` state to be `false`', () => {
        expect(wrapper.state().reveal).toBe(false)
    })

    describe('when rendering a clue with no value', () => {
        beforeEach(() => {
            props.clue.value = undefined;
            wrapper = shallow(<Clue {...props}/>)
        })

        it('displays the value as `unknown`', () => {
            expect(wrapper.find('h4').text()).toEqual('unknown')
        })
    })

    describe('when clicking on the clue', () => {
        beforeEach(() => {
            wrapper.simulate('click')
        })

        it('sets the `revel` state to be a true', () => {
            expect(wrapper.state().reveal).toBe(true)
        })

        it('sets the answer with the `text-revealed` class', () => {
            expect(wrapper.find('h5').at(1).hasClass('text-revealed')).toBe(true)
        })
    })
})