import PersonDetail from './PersonDetail';

const Person = ({ person, onCheck, onSelect, onEditPerson }) => {
    return (
        <div className='mb-3'
            style={{ 'height': '150px', 'padding': '5px', 'backgroundColor': '#E3E3E3', 'borderRadius': '2px' }}>

            <div className='d-flex'>
                <div className='col-3' style={{}}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/${person.profileImage}`} style={{ 'width': '100%', 'height': '100%' }} alt='...' />
                </div>
                <div className='col-9' style={{}}>
                    <div className='d-flex justify-content-end'>
                        <div className='mx-2' style={{'cursor': 'pointer'}}>
                            <i className="fa fa-pencil" aria-hidden="true" style={{ 'fontSize': '16px', 'color': '#333' }} 
                            onClick={()=> {onEditPerson(person)}}></i>
                        </div>
                        <div>
                            <input type='checkbox' checked={person.selected}
                                onChange={() => { onSelect(person.id) }} />
                        </div>
                    </div>

                    <PersonDetail person={person} />

                    <div className='d-flex justify-content-between' style={{ 'paddingLeft': '10px' }}>
                        <div>
                            <i className="fa fa-tag" aria-hidden="true"
                                style={{ 'color': person.confirmed ? 'green' : 'red', 'fontSize': '20px' }}></i>
                        </div>
                        {!person.confirmed &&
                            <div>
                                <button className='btn btn-sm' onClick={() => { onCheck(person) }}
                                    style={{ 'backgroundColor': '#57EFDD' }}>Check</button>
                            </div>}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Person;