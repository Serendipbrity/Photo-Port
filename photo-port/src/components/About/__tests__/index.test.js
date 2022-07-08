import React from "react";
// cleanup is to remove components from the dom to prevent memory leaking/ anything that can corrupt tests
import { render, cleanup } from '@testing-library/react';

import About from "..";

afterEach(cleanup);

describe('About component', () => {
    // first test is baseline to verify that component is rendering
    it('renders', () => {
        render(<About />);
    });
    // compare snapshot versions of the dom node structure
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })

})