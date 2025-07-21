import { fireEvent, render, screen } from '@testing-library/react';
import SimpleCounter from '../index';

describe('SimpleCounter', () => {
    it('renders the initial count', () => {
        render(<SimpleCounter />);

        expect(screen.getByText('Counter: 0')).toBeInTheDocument();
    });

    it('increments the count', () => {
        render(<SimpleCounter />);

        const incrementButton = screen.getByRole('button', {
            name: 'Increment',
        });

        fireEvent.click(incrementButton);
        expect(screen.getByText('Counter: 1')).toBeInTheDocument();

        fireEvent.click(incrementButton);
        expect(screen.getByText('Counter: 2')).toBeInTheDocument();
    });

    it('decrements the count', () => {
        render(<SimpleCounter />);

        const incrementButton = screen.getByRole('button', {
            name: 'Increment',
        });
        const decrementButton = screen.getByRole('button', {
            name: 'Decrement',
        });

        fireEvent.click(incrementButton);
        expect(screen.getByText('Counter: 1')).toBeInTheDocument();

        fireEvent.click(decrementButton);
        expect(screen.getByText('Counter: 0')).toBeInTheDocument();

        fireEvent.click(decrementButton);
        expect(screen.getByText('Counter: -1')).toBeInTheDocument();
    });

    it('resets the count to 0 when Reset button is clicked', () => {
        render(<SimpleCounter />);

        const incrementButton = screen.getByRole('button', {
            name: 'Increment',
        });
        const resetButton = screen.getByRole('button', {
            name: 'Reset',
        });

        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        expect(screen.getByText('Counter: 4')).toBeInTheDocument();

        fireEvent.click(resetButton);
        expect(screen.getByText('Counter: 0')).toBeInTheDocument();
    });
});
