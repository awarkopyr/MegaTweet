import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PostCard({ $id, title, featuredImage, content }) {

    return (
        <Link to={`/post/${$id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={appwriteService.getFilePreview(featuredImage)} alt={title} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                    <Button variant="primary">Click to read</Button>
                </Card.Body>

            </Card>
        </Link>
    )
}


export default PostCard