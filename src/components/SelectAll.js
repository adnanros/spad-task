const SelectAll = ({onSelectAll, selectAll}) => {
    return (
        <div className='d-flex justify-content-end mb-2' style={{'paddingRight': '10px'}}>
            <input type="checkbox" checked={selectAll} onChange={(e) => { onSelectAll(e) }} />
        </div>
    );
}

export default SelectAll;