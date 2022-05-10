const Persons = ({persons}) => {
    return (
        <div style={{'padding': '5px', 'backgroundColor': '#999'}}>
            {
                persons.map((person, index) => (
                    <div key={index} className='d-flex' style={{ 'height': '150px' }}>
                        <div className='col-3' style={{ 'backgroundColor': 'red' }}>
                            <img src={require('../images/bill-gates.jpg')} style={{ 'width': '100%', 'height': '100%' }} alt='...' />
                        </div>
                        <div className='col-9' style={{ 'backgroundColor': 'green' }}>
                            {person.name}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Persons;