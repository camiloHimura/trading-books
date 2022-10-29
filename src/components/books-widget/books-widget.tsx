import { useEffect } from 'react';

import { SOCKET, SUBSCRIBE_BOOKS } from '../../contans/socket-io.config';
import { bookActions, BookRow, BookSnapshot } from '../../state/book.slice';
import { useAppDispatch, useAppSelector } from '../../state/store';
import { Header } from '../header/header';
import { Row } from '../row/row';
import './books-widget.scss';

const parseAndFilter = (callback: (data: BookSnapshot | BookRow) => void) => (msg: MessageEvent<string>) => {
    const response = JSON.parse(msg.data) as { event: string } | BookSnapshot | BookRow;
    if (!Array.isArray(response)) {
        return;
    }
    const [, rowValue] = response;
    if (typeof rowValue === 'string') {
        return;
    }

    callback(response);
};

const isSnapshot = (book: BookSnapshot | BookRow) => {
    const [, rows] = book;
    return rows && rows.length > 3;
};

export const BooksWidget = () => {
    const book = useAppSelector((state) => state.book);
    const dispatch = useAppDispatch();

    useEffect(() => {
        SOCKET.onopen = () => SOCKET.send(SUBSCRIBE_BOOKS);

        SOCKET.onmessage = parseAndFilter((data) => {
            if (isSnapshot(data)) {
                dispatch(bookActions.addSnapshot(data[1]));
            } else {
                console.log('row', data[0], data[1]);
            }
        });
    }, [dispatch]);

    return (
        <div className='bookWidget'>
            <Header />
            {book.map((row, index) => (
                <Row key={`row-${index}`} data={row} />
            ))}
        </div>
    );
};
