const PersonDetail = ({person}) => {
    return ( 
        <div className="mb-3">
           <div className='d-flex justify-content-begin'>
                        <div className='col-3'>
                            Name:
                        </div>
                        <div className='col-3'>
                            {person.name}
                        </div>
                    </div>
                    <div className='d-flex justify-content-begin'>
                        <div className='col-3'>
                            Family:
                        </div>
                        <div className='col-3'>
                            {person.familyName}
                        </div>
                    </div>
                    <div className='d-flex justify-content-begin'>
                        <div className='col-3'>
                            BirthDay:
                        </div>
                        <div className='col-3'>
                            {person.birthDate}
                        </div>
                    </div> 
        </div>
     );
}
 
export default PersonDetail;