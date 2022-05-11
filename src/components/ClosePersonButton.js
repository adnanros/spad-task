const ClosePersonButton = ({onAddPerson}) => {
    return ( 
        <div className='d-flex justify-content-end' style={{'cursor': 'pointer', 'paddingRight': '10px'}}>
            <i class="fa fa fa-times-circle" aria-hidden="true" onClick={onAddPerson}
            style={{ 'color': '#f70000', 'fontSize': '32px' }}></i>
          </div>
     );
}
 
export default ClosePersonButton;