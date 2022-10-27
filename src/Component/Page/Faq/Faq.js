import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Faq = () => {
    return (
        <div className='container mt-4'>
            <div className="row">
                <div className="col-md-6 " >

                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Node js framework or library</Accordion.Header>
                            <Accordion.Body>
                            js is a framework. Well more often than not, we do refer to it as one. However, Node. js is actually a JavaScript runtime environment — a platform to execute JavaScript codes on the server-side and make it portable
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What is Node.js?</Accordion.Header>
                            <Accordion.Body>
                            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;