import React from 'react'

function Contador() {
    return (
        <>
            <h1 className='text-center mt-5'>Contador</h1>
            <div className='counter-bg d-flex align-items-center justify-content-around mx-auto mt-5'>

                <button type="button" class="btn btn-dark">
                    <i class="fas fa-clock" />
                </button>
                <div className='box-counter-size text-center-counter'>
                    <p>0</p>
                </div>
                <div className='box-counter-size text-center-counter'>
                    <p>0</p>
                </div>
                <div className='box-counter-size text-center-counter'>
                    <p>0</p>
                </div>
                <div className='box-counter-size text-center-counter'>
                    <p>0</p>
                </div>
                <div className='box-counter-size text-center-counter'>
                    <p>0</p>
                </div>
                <div className='box-counter-size text-center-counter'>
                    <p>0</p>
                </div>
            </div>
        </>
    )
}

export default Contador
