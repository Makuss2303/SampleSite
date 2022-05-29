import React, { Component } from 'react'
import './ourServicesContent.css'
import { ourServicesItems } from './ourServicesItems'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class OurServicesContent extends Component {
    render() {
        return(
            <div className='ourServices'>
                <Row className='g-4'> 
                    {ourServicesItems.map((item, index)=>{
                        return (                  
                            <Col className='col-lg-3 col-sm-6' key={index}>
                                <div className={`${item.cName} spaceServices text-center `}>
                                    <div className="p-5">
                                        <img src={item.img} alt={item.title}></img>
                                        <h5 className="mb-3 customizeTitle">{item.title}</h5>
                                        <p className='customizeText'>{item.description}</p>
                                    </div>
                                </div>
                                <Button className={`${item.buttonType} customizeButtom btn-xl`}>read more</Button>
                            </Col>                                      
                        )
                    })}
                </Row>
                <br /><br /><br /><br /><br />
            </div>
        )
    }
}

export default OurServicesContent