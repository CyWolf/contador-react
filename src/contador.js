import React, { useState } from 'react'

function Contador() {

    const [firstnum, setFirstnum] = useState(0)
    const [secondnum, setSecondnum] = useState(0)
    const [thirdnum, setThirdnum] = useState(0)
    const [fourthnum, setfourthnum] = useState(0)
    const [fifthnum, setFifthnum] = useState(0)
    const [sixthnum, setSixthnum] = useState(0)

    const firstadd = () => {
        setFirstnum(firstnum + 1)

        if (firstnum === 9) {
            setFirstnum(0)
            setSecondnum(secondnum + 1)
            if (secondnum === 9) {
                setSecondnum(0)
                setThirdnum(thirdnum + 1)
                
            }
            if (thirdnum === 9) {
                setThirdnum(0)
                setfourthnum(fourthnum + 1)
            }
            if (thirdnum === 9) {
                setfourthnum(0)
                setFifthnum(fifthnum + 1)
            }
            if (thirdnum === 9) {
                setFifthnum(0)
                setSixthnum(sixthnum + 1)
            }
        } else {
            setFirstnum(firstnum + 1)
        }

    }

    return (
        <>
            <h1 className='text-center mt-5'>Contador</h1>
            <div className='counter-bg d-flex align-items-center justify-content-around mx-auto mt-5'>

                <button onClick={firstadd} type="button" class="btn btn-dark">
                    <i class="fas fa-clock" />
                </button>
                <div className='box-counter-size text-center-counter'>
                    <p>{sixthnum}</p>
                </div>
                <div className='box-counter-size text-center-counter'>
                    <p>{fifthnum}</p>
                </div>
                <div className='box-counter-size text-center-counter'>
                    <p>{fourthnum}</p>
                </div>
                <div className='box-counter-size text-center-counter'>
                    <p>{thirdnum}</p>
                </div>
                <div className='box-counter-size text-center-counter'>
                    <p>{secondnum}</p>
                </div>
                <div className='box-counter-size text-center-counter'>
                    <p>{firstnum}</p>
                </div>
            </div>
        </>
    )
}

export default Contador
