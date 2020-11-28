import React from 'react';
import SettingsCellIcon from '@material-ui/icons/SettingsCell';
import DevicesIcon from '@material-ui/icons/Devices';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import {
    Container,
    NumberCel,
    DivNumberCel,
    DivDeveloperBy,
    TextDeveloperBy,
    DivEmotion,
    TextEmotion
}from './styled';

export default () => {
    return(
        <Container>
            <DivDeveloperBy>
                <DevicesIcon />
                <TextDeveloperBy>Desenvolvido pela Tfcoder</TextDeveloperBy>
            </DivDeveloperBy>

            {/* <DivEmotion>
                <InsertEmoticonIcon />
                <TextEmotion>brigado Pela Preferência</TextEmotion>
            </DivEmotion> */}


            <DivNumberCel>
                <SettingsCellIcon />
                <NumberCel>81 9 8515 - 3464</NumberCel>                        
            </DivNumberCel>

        </Container>
    );
}