import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { CopyBlock, atomOneDark } from "react-code-blocks";

const Header = () => {

    return (
        <>
            <section className="fryday-header">
                <Row>
                    <Col md="6" className="">
                        <div style={{ padding: '5rem 5rem 2rem 5rem' }}>
                            <h2>
                                Cli++ <span className="text-muted">Complete Solution for command line development</span>
                            </h2>
                            <p>
                                Cli++ provides a framework for building cli apps with expressive, elegant syntax. I’ve already laid the foundation — freeing you to create awesome cli applications without sweating the small things.
                            </p>
                        </div>
                        <div style={{ padding: '3rem 12rem 2rem 5rem', backgroundColor: '#f7f7f7', width: '130%' }}>
                            <h4>Installation</h4>
                            <div className="mb-3">
                                <CopyBlock
                                    text={`git clone https://github.com/manishsahani999/cli-plus-plus.git`}
                                    language={'js'}
                                    // showLineNumbers={true}
                                    theme={atomOneDark}
                                    wrapLines
                                />
                            </div>
                            <p>Will be available on brew after first release, right now you need to add this path under includes headers. </p>
                        </div>
                        <div style={{ padding: '3rem 5rem 2rem 5rem' }}>
                            <h4 className="text-muted">
                                how would you <span className="text-danger">build</span> cli++?
                                The good news is that, there's <span className="text-dark"> nothing to build</span>.
                            </h4>
                            <p>
                                The library is a header only library, just <code>#include</code> and move on to your application. 
                                <span className="text-muted ml-1">
                                    The distribution comes with a cmake file, to help you start with the building your project
                                    for any platform.
                                </span>
                            </p>
                        </div>
                    </Col>
                    <Col md="6" style={{ overflow: 'hidden', paddingTop: '2.3rem' }}>
                        <h1 className="h1" style={{ marginLeft: '4.2rem' }}>
                            Delightful C++ Command line development
                        </h1>
                        <div>
                            <img src={require('assets/img/terminal.png')} style={{ maxWidth: '80rem' }} alt="" srcset="" />
                        </div>
                    </Col>
                </Row>
            </section>
            <section style={{ overflowX: 'hidden' }}>
                <Row>
                    <Col>
                        <div>
                            <img src={require('assets/img/code.png')} style={{ maxWidth: '80rem', marginLeft: '-21rem', marginTop: '-1rem', zIndex: '2' }} alt="" srcset="" />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h2 className="mb-5" >
                                Lets you focus on your awesome application
                                <span className="text-muted" style={{}}> and takes away the pain of options and arguments handling.</span>
                            </h2>
                        </div>
                        <div style={{ padding: '3rem', backgroundColor: '#f7f7f7', marginLeft: '-13rem' }}>
                            <p style={{ textAlign: 'justify', textJustify: 'inter-word', margin: '0' }}>
                                A suite of tools to build attractive command line interfaces (CLIs), from semantic elements: headers, lists, alerts, paragraphs, etc. 
                                
                            </p>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}
// Supports theming via a CSS-like language. It also contains a number of lower level CLI elements: rules, boxes, trees, and Unicode symbols with ASCII alternatives. It integrates with the crayon package to support ANSI terminal colors.

export default Header;