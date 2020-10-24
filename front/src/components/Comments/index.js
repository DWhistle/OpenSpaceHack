import React, { useState } from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import Button from './Button'
import plusImg from '../../assets/comments/plus.svg'

const Comments = () => {
    const [submit, setSubmit] = useState(false)

    return (
        <div>
            <CommentList />
            {submit ? (
                <CommentForm mode="add" action={() => setSubmit(!submit)} />
            ) : (
                <Button
                    type="button"
                    text="Добавить комментарий"
                    alt="add"
                    img={plusImg}
                    css="addButton"
                    action={() => setSubmit(!submit)}
                />
            )}
        </div>
    )
}

export default Comments
