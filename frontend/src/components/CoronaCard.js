import React from 'react';
import {Card, Button} from 'react-bootstrap';

function CoronaCard({
    title,
    data,
    style = {
        width: '14rem'
    },
    callback,
    btnTitle,
    icon,
    bg = 'warning',
    text = bg === 'warning' || bg === 'dark'
        ? 'dark'
        : 'light'
}) {
    return <Card bg={bg} style={style} text={text} className="m-1">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
            <Card.Title>{data}</Card.Title>
            <Button hidden={!btnTitle && !callback} variant="primary" onClick={callback}>{btnTitle}</Button>
        </Card.Body>
    </Card>
}

export default CoronaCard;