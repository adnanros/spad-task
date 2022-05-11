const PersonDetail = ({person}) => {
    return ( 
        <div>
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
                            FamilyName:
                        </div>
                        <div className='col-3'>
                            {person.familyName}
                        </div>
                    </div>
                    <div className='d-flex justify-content-begin'>
                        <div className='col-3'>
                            BirthDate:
                        </div>
                        <div className='col-3'>
                            {person.birthDate}
                        </div>
                    </div> 
        </div>
     );
}
 
export default PersonDetail;