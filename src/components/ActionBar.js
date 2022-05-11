const ActionBar = ({ onSelectAll, selectAll, onDelete }) => {
    return (
        <div className='d-flex justify-content-between mb-2' style={{ 'paddingRight': '10px' }}>
            <div style={{'cursor': 'pointer', 'paddingLeft': '5px'}} onClick={()=>{onDelete()}}>
                <img src={`${process.env.PUBLIC_URL}/assets/images/icons/recycleBin.png`} 
                alt="recycle" height={20} width={20} />
            </div>
            <div>
                <input type="checkbox" checked={selectAll} onChange={(e) => { onSelectAll(e) }} />
            </div>
        </div>
    );
}

export default ActionBar;