import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Warrior from './Warrior'
import Magician from './Magician'
import Thief from './Thief'
import Bowman from './Bowman'
import Pirate from './Pirate'

function AllJobs() {
    return (
        <Accordion>
            <Card style={{backgroundColor: '#F4511E', }}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: 'white'}}>
                        Jobs
                    </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey="0">
                    <Card.Body style={{padding: '0'}}><Warrior /></Card.Body>
                </Accordion.Collapse>

                <Accordion.Collapse eventKey="0">
                    <Card.Body style={{padding: '0'}}><Magician /></Card.Body>
                </Accordion.Collapse>

                <Accordion.Collapse eventKey="0">
                    <Card.Body style={{padding: '0'}}><Thief /></Card.Body>
                </Accordion.Collapse>

                <Accordion.Collapse eventKey="0">
                    <Card.Body style={{padding: '0'}}><Bowman /></Card.Body>
                </Accordion.Collapse>

                <Accordion.Collapse eventKey="0">
                    <Card.Body style={{padding: '0'}}><Pirate /></Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}

export default AllJobs
