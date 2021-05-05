import React, { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { api } from '../api'

const DeleteModal = ({ writeDetail, push }) => {

    const [open, setOpen] = useState(false)
    const [err, setErr] = useState("")

    const show = () => {
        setOpen(true)
    }
    const close = () => {
        setOpen(false)
    }

    const handleDelete = (id) => {
        api()
            .delete(`/posts/${id}`)
            .then(() => {
                setErr("")
                // modal close
                close()

                // anasayfaya push yapıcaz push yapabilmek için historye ihtiyaç var 2 yolla 1. yol withRouter ile export bu sayede historye erişim olucak 2. yol props ile push metodunu alma
                push(`/`)
            })
            .catch(() => {
                setErr("Become Error during delete")
            })
    }

    return (
        <>
            <Button onClick={show} color="red">Delete</Button>

            <Modal size="mini" open={open} onClose={close}>
                <Modal.Header>Delete Title and Content</Modal.Header>
                <Modal.Content>
                    <p>Do you want to delete {writeDetail.title}</p>
                    {err && <p>{err}</p>}
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={close} negative>No</Button>
                    <Button
                        positive
                        icon="delete"
                        labelPosition="right"
                        content="Yes, Delete"
                        onClick={() => handleDelete(writeDetail.id)} />
                </Modal.Actions>
            </Modal>
        </>
    )
}

export default DeleteModal
