const Person = ({ person, onCheck }) => {
    return (
        <div className='d-flex mb-3'
            style={{ 'height': '150px', 'padding': '3px', 'backgroundColor': '#666' }}>
            <div className='col-3' style={{}}>
                <img src={require('../images/bill-gates.jpg')} style={{ 'width': '100%', 'height': '100%' }} alt='...' />
            </div>
            <div className='col-9' style={{}}>
                {person.name}
                <div className='d-flex justify-content-between'>
                    <div>
                        <i class="fa fa-tag" aria-hidden="true"
                            style={{ 'color': person.confirmed ? 'green' : 'red' }}></i>
                    </div>
                    {!person.confirmed && 
                    <div>
                        <button className='btn btn-sm btn-primary' onClick={()=>{onCheck(person)}}>Check</button>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default Person;