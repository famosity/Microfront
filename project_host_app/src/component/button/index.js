import React, { useContext } from 'react';
import {ButtonSelectorWrapper, Button } from './style';
import { HostContext } from '../context/index';

const MicroFrontSelector = ({movieOne, movieTwo}) =>{
    const{setSelectedMicroFront} = useContext(HostContext)

    return(
        <ButtonSelectorWrapper>
            <Button 
                onClick={() => setSelectedMicroFront(1)}
            >
                {movieOne}
            </Button>
            <Button
                onClick={() => setSelectedMicroFront(2)}
            >
                {movieTwo}
            </Button>
        </ButtonSelectorWrapper>
    )
}

export default MicroFrontSelector;