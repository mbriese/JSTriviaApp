import React from 'react';
import PropTypes from "prop-types";
import AccordionSection from "./AccordionSection.jsx";


class Accordion extends React.Component {
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
                    <AccordionSection
                        key={`accordion-section-${index}`}
                        isOpen={!!openSections[child.props.label]}
                        label={child.props.label}
                        onClick={onClick}
                    >
                        {child.props.children}
                    </AccordionSection>
                ))}
            </div>

        );
    };
    AccordionSection = AccordionSection;
}

export default Accordion;
