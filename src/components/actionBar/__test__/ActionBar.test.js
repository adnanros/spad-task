import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../../App';
import ActionBar from '../ActionBar';

describe('renders Action-Bar elements', ()=> {
    it('renders delete icon', async() => {
        render(<App />);
        const iconElement = screen.getByAltText('recycle');
        expect(iconElement).toBeInTheDocument();
      });

      it('renders select-All check-box', async() => {
        render(<App />);
        const selectElement = screen.getByTestId('select-all');
        expect(selectElement).toBeInTheDocument();
      });
})


describe('select all should be checked and unchecked', ()=> {
    it('select-all should be checked and unchecked', async() => {
        render(<App />);
        const selectElement = screen.getByTestId('select-all');
        expect(selectElement.checked).toEqual(false);
        fireEvent.click(selectElement);
        expect(selectElement.checked).toEqual(true);
      });
      
      //Integration test
      it('clicks select-all and all of persons are selected', async() => {
        render(<App />);
        const selectElement = screen.getByTestId('select-all');
        expect(selectElement.checked).toEqual(false);
        fireEvent.click(selectElement);
        const affectedItems = screen.queryAllByTestId(/person-checkbox-/i)
        let count = 0;
        affectedItems.forEach((item) => {
            if (item.checked === false) {
                count++;
            }
        })
        // console.log(affectedItems);
        expect(count).toEqual(0);
      });

      it('Clicks Delete-Icon and deletes all of persons', async() => {
        render(<App />);
        const selectElement = screen.getByTestId('select-all');
        expect(selectElement.checked).toEqual(false);
        fireEvent.click(selectElement);
        const iconElement = screen.getByAltText('recycle');
        fireEvent.click(iconElement);
        const notDeletedItems = screen.queryAllByTestId(/person-div-/i);
        expect(notDeletedItems.length).toEqual(0);        
      });
      
})


