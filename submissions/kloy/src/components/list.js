import React, { createClass } from 'react';

const List = createClass({
    displayName: 'List',

    render() {
        return (
            <section className="css-scrollable-list">
                <ul className="css-slots">
                    <li className="css-slot">
                        <h3>Jorak Uln</h3>
                        <h6>Homeworld: Korriban</h6>
                    </li>
                    <li className="css-slot">
                        <h3>Skere Kaan</h3>
                        <h6>Homeworld: Coruscant</h6>
                    </li>
                    <li className="css-slot">
                        <h3>Na'daz</h3>
                        <h6>Homeworld: Ryloth</h6>
                    </li>
                    <li className="css-slot">
                        <h3>Kas'im</h3>
                        <h6>Homeworld: Nal Hutta</h6>
                    </li>
                    <li className="css-slot">
                        <h3>Darth Bane</h3>
                        <h6>Homeworld: Apatros</h6>
                    </li>
                </ul>

                <div className="css-scroll-buttons">
                    <button className="css-button-up" />
                    <button className="css-button-down" />
                </div>
            </section>
        );
    }
});

export default List;
