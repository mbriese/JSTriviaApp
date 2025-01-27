import React from 'react';
import PropTypes from "prop-types";
import AccordianSection from "./AccordianSection.jsx";

class Accordian extends React.Component {
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
    };

    constructor(props) {
        super(props);
        const openSections = {};
        this.state = {openSections};
    }

    onClick = label => {
        const {
            state: {openSections},
        } = this;

        const isOpen = !!openSections[label];

        this.setState({
            openSections: {
                [label]: !isOpen
            }
        });
    };


    render() {
        const {
            onClick,
            props: {children},
            state: {openSections},
        } = this;

        return (
            <div style={{border: '2px solid #008f68'}}>
                {children.map((child, index) => (
                    <AccordianSection
                        key={`accordian-section-${index}`}
                        isOpen={!!openSections[child.props.label]}
                        label={child.props.label}
                        onClick={onClick}
                    >
                        {child.props.children}
                    </AccordianSection>
                ))}
            </div>

        );
    };
    AccordianSection = AccordianSection;
}

export default Accordian;
