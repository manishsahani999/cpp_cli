import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { CopyBlock, atomOneDark } from "react-code-blocks";

const Header = () => {

    return (
        <>
            <section className="fryday-header">
                <Row>
                    <Col md="6" className="">
                        <div style={{ padding: '5rem 0 2rem 5rem' }}>
                            <h2>
                                Delightful C++ command line interface development
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
                        <div style={{ padding: '3rem 0rem 0rem 5rem' }}>
                            <h4 className="text-muted">
                                how would you <span className="text-danger">build</span> cli++?
                                The good news is that, there's <span className="text-dark"> nothing to build</span>.
                            </h4>
                            <p>
                                The library is a header only library, just <code>{`#include <cli++/commander>`} </code> and move on to your application.
                                <br></br>
                                {/* <small>
                                    <span className="text-muted">
                                        The distribution comes with a cmake file, to help you start with the building your project
                                        for any platform.
                                    </span>
                                </small> */}
                            </p>
                        </div>
                    </Col>
                    <Col md="6" style={{ overflow: 'hidden', paddingTop: '4.3rem', position: 'relative' }}>
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
                            <h4 className="text-muted" style={{ textAlign: 'justify', textJustify: 'inter-word', margin: '0' }}>
                                cli++ is the complete solution for command line development
                            </h4>
                        </div>
                        <div className="mt-2 pr-4" style={{ borderRadius: '22px', paddingTop: '3rem', marginRight: '-1rem' }}>
                            <h4 className="mb-2">
                                Easy Commanding
                            </h4>
                            <code>
                                program.command("cmd [arg]", "description")
                            </code>
                            <p className="mt-2">
                                Elegent and expressive design for defining commands with arguments.
                            </p>
                        </div>
                    </Col>
                </Row>
            </section>
            <section>
                <Row>
                    <Col md="6">
                        <div style={{ borderRadius: '22px', paddingLeft: '5rem' }}>
                            <h4 className="mb-2">
                                Prebuilt methods for default options
                            </h4>
                            <code>
                                program.version("1.0");
                            </code>
                            <p className="mt-2">
                                prebuilt methods to help you with the comman features like <code>--help</code> and <code>--version</code>.
                                Versioning has never been easier with <code>.version()</code> method.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="pr-4" style={{ borderRadius: '22px', marginRight: '-1rem' }}>
                            <h4 className="mb-2">
                                Fully featured Flag / Options
                            </h4>
                            <code>
                                program.option("-a", "simplest option");
                            </code>
                            <p className="mt-2">
                                Simpler flag management, defined with the <code>.option()</code> method, also serving as documentation for the options.
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