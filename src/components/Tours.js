import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {

    const renderTourList = (tours) =>  {
        return tours.map((tour) => {
            return <Tour key={tour.id} { ...tour} removeTour={removeTour} />
        });
    }

    return (
        <section>
            <div className="title">
                <h2>Tour Application</h2>
                <div className="underline"></div>
            </div>
            <div>
                {renderTourList(tours)}
            </div>
        </section>
    );
};

export default Tours;