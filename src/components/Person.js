import PersonDetail from './PersonDetail';

const Person = ({ person, onCheck, onSelect }) => {
    return (
        <div className='mb-3'
            style={{ 'height': '150px', 'padding': '5px', 'backgroundColor': '#E3E3E3', 'borderRadius': '2px' }}>

            <div className='d-flex'>
                <div className='col-3' style={{}}>
                    <img src={require('../images/bill-gates.jpg')} style={{ 'width': '100%', 'height': '100%' }} alt='...' />
                </div>
                <div className='col-9' style={{}}>
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-sm btn-ouline-secondary'>Edit</button>
                        <div>
                            <input type='checkbox' checked={person.selected} 
                            onChange={()=>{onSelect(person.id)}} />
                        </div>
                    </div>

                    <PersonDetail person={person}/>
                    
                    <div className='d-flex justify-content-between' style={{'paddingLeft': '10px'}}>
                        <div>
                            <i className="fa fa-tag" aria-hidden="true"
                                style={{ 'color': person.confirmed ? 'green' : 'red' }}></i>
                        </div>
                        {!person.confirmed &&
                            <div>
                                <button className='btn btn-sm' onClick={() => { onCheck(person) }} 
                                style={{'backgroundColor': '#57EFDD'}}>Check</button>
                            </div>}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Person;