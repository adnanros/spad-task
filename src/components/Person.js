const Person = ({person}) => {
    return (
        <div className='d-flex' style={{ 'height': '150px', 'padding': '3px'}}>
            <div className='col-3' style={{ 'backgroundColor': 'red' }}>
                <img src={require('../images/bill-gates.jpg')} style={{ 'width': '100%', 'height': '100%' }} alt='...' />
            </div>
            <div className='col-9' style={{ 'backgroundColor': 'green' }}>
                {person.name}
            </div>
        </div>
    );
}

export default Person;