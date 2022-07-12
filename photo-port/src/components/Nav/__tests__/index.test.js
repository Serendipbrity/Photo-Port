import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    {name: 'portraits', description: 'Portraits of people in my life'}
]

// const mockCurrentCategory = jest.fn();
// const mockSetCurrentCategory = jest.fn();
// const mockContactSelected = jest.fn();
// const mockSetContactSelected = jest.fn();

afterEach(cleanup);

// describe function isn't absolutely necessary for tests to run. It just organizes tests
// ---- create test to see if Nav is rendering and if it matches snapshot -------
describe('Nav component renders', () => {
    //  baseline test
    it('renders', () => {
        render(<Nav
    //         categories={categories}
    // setCurrentCategory={mockSetCurrentCategory}
    // currentCategory={mockCurrentCategory}
    // contactSelected={mockContactSelected}
    // setContactSelected={mockSetContactSelected}
        />);
    });
    //  snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
    //         categories={categories}
    // setCurrentCategory={mockSetCurrentCategory}
    // currentCategory={mockCurrentCategory}
    // contactSelected={mockContactSelected}
    // setContactSelected={mockSetContactSelected}
        />);
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
        const { getByLabelText } = render(<Nav
    //         categories={categories}
    // setCurrentCategory={mockSetCurrentCategory}
    // currentCategory={mockCurrentCategory}
    // contactSelected={mockContactSelected}
    // setContactSelected={mockSetContactSelected}
        />);
  
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})
//   ------ test for link visibility to ensure user can use them ------
describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav
    //         categories={categories}
    // setCurrentCategory={mockSetCurrentCategory}
    // currentCategory={mockCurrentCategory}
    // contactSelected={mockContactSelected}
    // setContactSelected={mockSetContactSelected}
        />);
        // arrange
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        // assert
        expect(getByTestId('about')).toHaveTextContent('About me');
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

