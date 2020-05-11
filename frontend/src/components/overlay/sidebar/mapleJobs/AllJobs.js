import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import jobList from '../../../../helpers/allJobsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';


function AllJobs() {
    return (
        <Accordion>
            <Card style={{ backgroundColor: '#F4511E', }}>
                <Card.Header style={{ padding: '0' }}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: 'white', width: '100%', padding: '0' }}>
                        Jobs
                    </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey="0">
                    <Card.Body style={{ padding: '0' }}>
                        {jobList.map((job, index) => {
                            return <Link to={job.link} key={index}><div className="link-div">
                                <FontAwesomeIcon icon={job.icon} className="sidebar-icon" />
                                <span className="nav-link">{job.title}</span>
                            </div>
                        </Link>
                        })}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default AllJobs;