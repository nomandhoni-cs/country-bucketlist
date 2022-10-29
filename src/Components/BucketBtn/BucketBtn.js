import React from 'react';

const BucketBtn = (props) => {
    return (
        <div className="bucket-btn">
        <button onClick={ () => props.handleAddBucketBtn(props.country)} className="btn">
            <svg width="20" height="20" class="utUL6" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><desc lang="en">A plus sign</desc><path d="M14 3h4v26h-4zM29 14v4h-26v-4z"></path></svg>
        </button>
        </div>
    );
};

export default BucketBtn;