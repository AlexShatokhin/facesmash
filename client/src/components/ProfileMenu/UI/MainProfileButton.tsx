import { FC } from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {styles} from '../profileButton.style';

type MainProfileButtonProps = {
    onPress?: () => void
}

const MainProfileButton :FC<MainProfileButtonProps> = ({onPress}) => {
    const user = require("../../../constants/icons").default.user;
    return (
        <TouchableOpacity onPress={onPress} style = {styles.main}>
            <Image 
                source = {user} 
                alt="menu arrow"
                style = {{width: 52, height: 52}}
                resizeMode='contain'/>
        </TouchableOpacity>
    )
}

export default MainProfileButton;