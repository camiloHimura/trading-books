import './row.scss';

interface RowProps {}

export const Row = (_props: RowProps) => {
    return (
        <div className='booksRow'>
            <div>row Count</div>
            <div>row Amount</div>
            <div>row Total</div>
            <div>row Price</div>
        </div>
    );
};
