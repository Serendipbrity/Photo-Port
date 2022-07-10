import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';



afterEach(cleanup);

// describe function isn't absolutely necessary for tests to run. It just organizes tests
// ---- create test to see if Nav is rendering and if it matches snapshot -------
describe('Nav component', () => {
    //  baseline test
    it('renders', () => {
        render(<Nav />);
    });
    //  snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav/>);
        //  assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})


// describe('emoji is visible', () => {
//     it('inserts emoji into the h2', () => {
//         // arrange
//         const { getByLabelText } = render(<Nav />);
//         // assert
//         expect(getByLabelText('camera')).toHaveContent('📸');
//     });
// })
// ---- not sure what the difference is between these two but the bottom works and the top doesnt lol
// ------create test for emoji visibility-----
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav/>);
  
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})
//   ------ test for link visibility to ensure user can use them ------
describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav/>);
        // arrange
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        // assert
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
})

// const { getByTestId } = render(<Nav />);

// describe('links are visible', () => {
//     it('inserts text into the links', () => {
//         const { getByTestId } = render(<Nav />);
//         expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
//         expect(getByTestId('about')).toHaveTextContent('About Me');
//     });
// })

