import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PostCard({ $id, title, featuredImage, content }) {
    const strippedContent = content.replace(/<[^>]*>?/gm, ''); // Remove HTML tags
    const firstTenWords = strippedContent.split(' ').slice(0, 5).join(' '); // Get first 10 words

    return (
        <Link to={`/post/${$id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={appwriteService.getFilePreview(featuredImage)} alt={title} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {firstTenWords}
                    </Card.Text>
                    <Button variant="primary">Click to read</Button>
                </Card.Body>

            </Card>
        </Link>
    )
}


export default PostCard