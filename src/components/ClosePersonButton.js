const ClosePersonButton = ({onClick}) => {
    return ( 
        <div className='d-flex justify-content-end' style={{'cursor': 'pointer', 'paddingRight': '10px' , 'marginBottom': '3px'}}>
            <i class="fa fa fa-times-circle" aria-hidden="true" onClick={onClick}
            style={{ 'color': '#f70000', 'fontSize': '32px' }}></i>
          </div>
     );
}
 
export default ClosePersonButton;